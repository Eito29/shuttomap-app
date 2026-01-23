import { prisma } from '@/app/_libs/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { getAuthUser } from '@/app/_libs/auth'

// 場所_詳細APIのレスポンスの型
export type SpotShowResponse = {
  spot: {
    id: number
    name: string
    address: String
    createdAt: Date
    updatedAt: Date
    category: {
      id: number
      name: string
    } | null
  }
}

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
    const spot = await prisma.spot.findUnique({
      where: {
        id: parseInt(id),
        userId: user.id,
      },
      include: {
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })

    if (!spot) {
      return NextResponse.json(
        { message: '権限がありません。再度ログインしてください。' },
        { status: 404 },
      )
    }

    return NextResponse.json<SpotShowResponse>({ spot }, { status: 200 })
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ message: '失敗しました' }, { status: 400 })
  }
}

// ---------------------------------------------------------
// 【PUT】場所を更新する
// ---------------------------------------------------------
// 記事の更新時にフロントエンドから送られてくるデータの型定義
export type SpotUpdateRequestBody = {
  id: number
  name: string
  address: string
  createdAt: Date
  updatedAt: Date
  category: {
    id: number
    name: string
  } | null
}

export const PUT = async ( request: NextRequest, { params }: { params:Promise<{ id: string }> }, ) => {
  console.log('Authorization Header:', request.headers.get('Authorization'));
  const user = await getAuthUser(request)
  
  if (!user) {
    return NextResponse.json({ message: 'ログイン情報が確認できません' }, { status: 401 })
  }

  const { id } = await params;

  try {
    const body: SpotUpdateRequestBody = await request.json();
    const { name, address, category } = body;

    const spot = await prisma.spot.update({
      where: {
        id: parseInt(id),
        userId: user.id,
      },
      data: {
        name,
        address,
        category: category?.id ? { connect: { id: category.id } } : { disconnect: true },
      },
    })

    return NextResponse.json({ status: 'OK', spot: spot }, { status: 200 })
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ status: error.message }, { status: 400 })
  }
};

// ---------------------------------------------------------
// 【DELETE】場所を削除する
// ---------------------------------------------------------
export const DELETE = async (
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  console.log('Authorization Header:', _request.headers.get('Authorization'));
  const user = await getAuthUser(_request)

  if (!user) {
    return NextResponse.json({ message: 'ログイン情報が確認できません' }, { status: 401 })
  }

  const { id } = await params

  try {
    // idを指定して、Spotを削除
    await prisma.spot.delete({
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
