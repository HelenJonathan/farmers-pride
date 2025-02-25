import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "../../../lib/prisma";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { email, password } = await req.json(); // Await the JSON parsing

    // Check if both fields are provided
    if (!email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({ where: { email } });

    // Check if user exists
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Compare provided password with stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" } // Changed to expiresIn for JWT
    );

    return NextResponse.json(
      {
        message: "Logged in successfully!",
        data: {
          token,
          user: {
            id: user.id,
            email: user.email,
            fullName: user.fullName,
            userType: user.userType,
          },
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error: ", error);
    return NextResponse.json(
      { error: "An error occurred while logging in" },
      { status: 500 }
    );
  }
}
