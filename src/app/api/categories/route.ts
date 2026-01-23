
import { prisma } from '@/app/_libs/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { getAuthUser } from '@/app/_libs/auth'

// カテゴリー一覧APIのレスポンスの型
export type CategoryIndexResponse = {
  category: {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    userId: string
  }[]
}

// ---------------------------------------------------------
// 【GET】カテゴリーの一覧を取得する
// ---------------------------------------------------------
export const GET = async (request: NextRequest) => {
  const user = await getAuthUser(request)

  if (!user) {
    return NextResponse.json({ message: 'ログイン情報が確認できません' }, { status: 401 })
  }

  try {
    // カテゴリーの一覧をDBから取得
    const category = await prisma.category.findMany({
      where: {
        userId: user.id, // 重要：ログインしているユーザーのIDで絞り込む
      },
      orderBy: {
        createdAt: 'desc', // 作成日時の降順で取得
      },
    })

    return NextResponse.json<CategoryIndexResponse>({ category }, { status: 200 })
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ message: error.message }, { status: 400 })
  }
}

// ---------------------------------------------------------
// 【POST】カテゴリーを作成する
// ---------------------------------------------------------
export type CreateCategoryRequestBody = {
  name: string
}

export type CreateCategoryResponse = {
  id: number
}

export const POST = async (request: NextRequest) => {
  const user = await getAuthUser(request)

  if (!user) {
    return NextResponse.json({ message: 'ログイン情報が確認できません' }, { status: 401 })
  }
  
  try {
    const body = await request.json()
    const { name }: CreateCategoryRequestBody = body

    const category = await prisma.category.create({
      data: {
        name,
        userId: user.id
      },
    })

    return NextResponse.json<CreateCategoryResponse>({ id: category.id, }, { status: 201 })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 })
    }
  }
}
