import { NextRequest, NextResponse } from 'next/server'
import {updateCoordinates} from "@/app/lib/coordinateStore";

export async function POST(req: NextRequest) {
    const body = await req.json()
    const { x, y } = body

    if (Number.isInteger(x) && Number.isInteger(y)) {
        updateCoordinates(x, y)
        return NextResponse.json({ message: 'Coordinates updated' }, { status: 200 })
    } else {
        return NextResponse.json({ error: 'Invalid coordinates, must be integers' }, { status: 400 })
    }
}