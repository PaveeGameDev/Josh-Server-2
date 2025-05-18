import { NextResponse } from 'next/server'
import {getCoordinates} from "@/app/lib/coordinateStore";

export async function GET() {
    return NextResponse.json(getCoordinates())
}