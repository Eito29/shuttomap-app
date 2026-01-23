import { getAuthUser } from '@/app/_libs/auth'
import { prisma } from '@/app/_libs/prisma'
import { NextRequest, NextResponse } from 'next/server'

// カテゴリー詳細APIのレスポンスの型
export type CategoryShowResponse = {
  category: {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    userId: string
  }
}

// ---------------------------------------------------------
// 【GET】カテゴリーの詳細を取得する
// ---------------------------------------------------------
export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {

  const user = await getAuthUser(request)
    
  if (!user) {
    return NextResponse.json({ message: 'ログイン情報が確認できません' }, { status: 401 })
  }

  const { id } = await params

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: parseInt(id),
        userId: user.id,
      },
    })

    if (!category) {
      return NextResponse.json(
        { message: 'カテゴリーが見つかりません。' },
        { status: 404 },
      )
    }

    return NextResponse.json<CategoryShowResponse>({ category }, { status: 200 })
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ message: error.message }, { status: 400 })
  }
}

// ---------------------------------------------------------
// 【PUT】カテゴリーを更新する
// ---------------------------------------------------------
// カテゴリーの更新時に送られてくるリクエストのbodyの型
export type CategoryUpdateRequestBody = {
  name: string
}

export const PUT = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  const user = await getAuthUser(request)
    
  if (!user) {
    return NextResponse.json({ message: 'ログイン情報が確認できません' }, { status: 401 })
  }

  const { id } = await params

  // リクエストのbodyを取得
  const { name }: CategoryUpdateRequestBody = await request.json()

  try {
    await prisma.category.update({
      where: {
        id: parseInt(id),
        userId: user.id,
      },
      data: {
        name,
      },
    })

    return NextResponse.json({ message: 'OK' }, { status: 200 })
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ message: error.message }, { status: 400 })
  }
}

// ---------------------------------------------------------
// 【DELETE】カテゴリーを削除する
// ---------------------------------------------------------
export const DELETE = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {

  const user = await getAuthUser(request)
    
  if (!user) {
    return NextResponse.json({ message: 'ログイン情報が確認できません' }, { status: 401 })
  }

  const { id } = await params

  try {
    await prisma.category.delete({
      where: {
        id: parseInt(id),
        userId: user.id,
      },
    })

    return NextResponse.json({ message: 'OK' }, { status: 200 })
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ message: error.message }, { status: 400 })
  }
}
