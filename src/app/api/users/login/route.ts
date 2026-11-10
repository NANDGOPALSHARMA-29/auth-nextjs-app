import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
connectDB();


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        };
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1h" });
        const response = NextResponse.json(
            { message: "Login successful", token },
            { status: 200 }
        );
        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 3600, // 1 hour in seconds
        });
        return response;
    } catch (error) {
        console.error("Error in login route:", error);
        return NextResponse.json(
            { error: "Internal Server Error" }, 
            { status: 500 }
        );
    }
}
