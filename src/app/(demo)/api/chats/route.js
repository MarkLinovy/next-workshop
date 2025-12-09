import { NextResponse } from 'next/server';

export async function GET() {
  // Simulate delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Return 500 error
  return NextResponse.json(
    { error: 'Internal Server Error' },
    { status: 500 }
  );
}

