import { NextResponse } from 'next/server'

interface OrderRequest {
  name: string
  phone: string
  email: string
  observation?: string
}

export async function POST(request: Request) {
  try {
    const body: OrderRequest = await request.json()

    if (!body.name || !body.phone || !body.email) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 },
      )
    }

    await new Promise((resolve) =>
      setTimeout(resolve, 500 + Math.random() * 1000),
    )

    if (Math.random() < 0.05) {
      return NextResponse.json(
        { success: false, message: 'Internal server error' },
        { status: 500 },
      )
    }

    const order = {
      id: `ORD-${Date.now().toString(36).toUpperCase()}`,
      ...body,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }

    console.log('📦 Novo pedido recebido:', order)

    return NextResponse.json(
      {
        success: true,
        message: 'Order created successfully',
        data: {
          orderId: order.id,
          status: order.status,
          createdAt: order.createdAt,
        },
      },
      { status: 201 },
    )
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request body' },
      { status: 400 },
    )
  }
}
