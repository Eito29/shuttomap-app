import { prisma } from '@/app/_libs/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { getAuthUser } from '@/app/_libs/auth'

export type SpotIndexResponse = {
  spots: {
    id: number
    name: string
    address: string
    createdAt: Date
    updatedAt: Date
    category: {
       id: number
       name: string
     } | null
  }[]
}

export const GET = async (request: NextRequest) => {
  const user = await getAuthUser(request)

  if (!user) {
    return NextResponse.json({ message: 'ログイン情報が確認できません' }, { status: 401 })
  }

  try {
    const spots = await prisma.spot.findMany({
      where: { userId: user.id }, 

      include: { 
        category: { 
          select: { id: true, name: true } 
        } 
      },

      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ spots }, { status: 200 })

  } catch (error) {
    return NextResponse.json({ message: '失敗しました' }, { status: 400 })
  }
}

export const POST = async (request: NextRequest) => {
  const user = await getAuthUser(request)

  if (!user) {
    return NextResponse.json({ message: '権限がありません。再度ログインしてください。' }, { status: 401 })
  }

  try {
    const body = await request.json()

    const { name, address, categoryId } = body

    const data = await prisma.spot.create({
      data: {
        name,
        address,
        user: { connect: { id: user.id } }, 
        category: categoryId ? { connect: { id: categoryId } } : undefined,
      },
    })

    return NextResponse.json({ status: 'OK', id: data.id }, { status: 201 })

  } catch (error) {
    return NextResponse.json({ message: '失敗しました' }, { status: 400 })
  }
}
