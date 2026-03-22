import { NextRequest, NextResponse } from 'next/server'

// Mock products data for now (will be replaced with database later)
const mockProducts = [
  {
    id: '1',
    name: 'Rose Quartz Crystal',
    category: 'crystals',
    price: 299,
    description: 'Beautiful rose quartz for love and healing',
    isActive: true
  },
  {
    id: '2',
    name: 'Amethyst Gem',
    category: 'gems',
    price: 599,
    description: 'Premium amethyst for spiritual protection',
    isActive: true
  },
  {
    id: '3',
    name: 'Love Attraction Oil',
    category: 'magic-oils',
    price: 500,
    description: '10ml magic oil for love attraction',
    isActive: true
  }
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category') || undefined
    
    let products = mockProducts
    
    if (category) {
      products = mockProducts.filter(product => product.category === category)
    }
    
    return NextResponse.json({
      success: true,
      data: products,
      count: products.length
    })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch products'
      },
      { status: 500 }
    )
  }
}