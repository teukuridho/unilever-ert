import { NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export function middleware(request: NextRequest) {
    // prisma.user.findFirst().then(val => {    
    //     console.log(val)
    // })
    
    // console.log(request.nextUrl.pathname)
}