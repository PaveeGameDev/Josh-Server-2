// app/api/move/route.ts
import { NextRequest, NextResponse } from 'next/server'

// Temporary in-memory store
const latestCoordinates = { x: 0, y: 0, id: 0 }

export async function POST(req: NextRequest) {
    const body = await req.json()
    const { x, y } = body

    if (Number.isInteger(x) && Number.isInteger(y)) {
        latestCoordinates.id += 1
        latestCoordinates.x = x
        latestCoordinates.y = y
        return NextResponse.json({ message: 'Coordinates updated' }, { status: 200 })
    } else {
        return NextResponse.json({ error: 'Invalid coordinates, must be integers' }, { status: 400 })
    }
}

// Export current state for re-use in /coordinates
export function getLatestCoordinates() {
    return latestCoordinates
}