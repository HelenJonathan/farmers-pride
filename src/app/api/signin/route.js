import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import prisma from '../../../lib/prisma'
import jwt from 'jsonwebtoken'

export async function POST(req) {
    try {
        const { email, password } = req.body

        if (!email, !password) {
            return NextResponse.json({ error: 'All fields are required'}, { status: 400});
        }

        const user = await prisma.user.findUnique({ where: { email }});

        const hashedPassword = await bcrypt.hash(password, 10);

        const passwordMatch = await bcrypt.compare(hashedPassword, user.password)

        if(!passwordMatch) {
            return NextResponse.json({ error: 'Invalid credentials'}, { status: 401});
        }

        const token = jwt.sign({ userId:user.id, email:user.email}, process.env.JWT_SECRET, {expires: '24h'})

        return NextResponse.json({
            message: 'Logged in successfully!',
            data : {
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    fullName: user.fullName,
                    userType: user.userType,
                }
            },
            status: 200
        }, {status: 200})
    } catch (error) {
        console.error("Error: " + error);
        return NextResponse.json({ error: 'An error occurred while logging in' }, { status: 500 });
    }
}