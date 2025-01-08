import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


const client = new PrismaClient();
export async function GET(req : NextRequest){
    const user = await client.user.findFirst();

    return NextResponse.json(
        {
            email: user?.email,
            name : "satya"
        }
    )
}

export async function POST(req : NextRequest){
    // body
    const body = await req.json();
    console.log(body);
    try {
        await client.user.create({
            data : {
                email : body.email,
                password : body.password
            }
        });
        return NextResponse.json({
            body
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message : "Error while signing up"
        },
    {status : 411})
    }
}