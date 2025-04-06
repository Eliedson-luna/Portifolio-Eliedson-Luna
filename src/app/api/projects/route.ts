import { NextResponse } from "next/server";
import { Projects } from './projects.json'

export async function GET() {
    try {
        return NextResponse.json(Projects);
    } catch (err: unknown) {
        if (err instanceof Error) {
            return NextResponse.json(
                { error: `Error getting projects : ${err.message}` },
                { status: 500 }
            );
        } else {
            return NextResponse.json(
                { error: `Unknown Error` },
                { status: 500 }
            );
        }
    }
}