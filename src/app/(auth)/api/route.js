import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    message: 'Auth API endpoint',
    status: 'authenticated',
    user: {
      id: 1,
      name: 'Test User'
    }
  });
}

