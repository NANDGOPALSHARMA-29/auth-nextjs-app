import {NextResponse} from "next/server";


export async function GET(request: Request) {
    try {
        const response = NextResponse.json({ message: "Logout successful" }, { status: 200 });
        response.cookies.delete("token");
        return response;
    } catch (error : any) {
        console.error("Error in logout route:", error);
        return NextResponse.json(
            { error: "Internal Server Error" }, 
            { status: 500 }
        );
    }
}