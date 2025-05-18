// lib/coordinateStore.ts

const latestCoordinates = { x: 0, y: 0, id: 0 }

export function updateCoordinates(x: number, y: number) {
    latestCoordinates.id += 1
    latestCoordinates.x = x
    latestCoordinates.y = y
}

export function getCoordinates() {
    return latestCoordinates
}