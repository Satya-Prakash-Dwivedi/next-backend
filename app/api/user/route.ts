import { NextRequest, NextResponse } from "next/server";

export function GET(req : NextRequest){
    return NextResponse.json(
        {
            email: "satya@gmail.com",
            username : "satya"
        }
    )
}

export async function POST(req : NextRequest){
    // body
    const body = await req.json();
    console.log(body);
    // header
    // console.log(req.headers.get("authorization"));
    // // query parameter
    // console.log(req.nextUrl.searchParams.get("name"));

    // hit the database with username and password

    return NextResponse.json(
        // {
        //     message : "you are signed up"
        // }
        body
    )
}