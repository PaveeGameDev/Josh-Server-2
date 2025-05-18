// app/api/coordinates/route.ts
import { NextResponse } from 'next/server'
import { getLatestCoordinates } from '../move/route'

export async function GET() {
    return NextResponse.json(getLatestCoordinates())
}