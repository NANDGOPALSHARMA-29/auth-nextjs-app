"use client";

import React from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";


export default function ProfilePage(){
    const router = useRouter();
    const logout = async () => {
        try{
            await axios.get("/api/users/logout");
            toast.success("Logout successful!");
            router.push("/login");
        }
        catch(error : any){
            console.error("Error during logout:", error);
            toast.error("Logout failed. Please try again.");
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f7f2e8] px-4 py-10">
            <div className="w-full max-w-md rounded-2xl border border-[#e8dfd1] bg-[#fffdf8] p-8 shadow-lg shadow-[#6b543515]">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[#3d342b]"> Profile </h1>
                    <p className="mt-2 text-[#786e61]"> Welcome to your profile page </p>
                </div>
                <button onClick={logout} className="w-full bg-[#a7835e] text-[#fffdf8] py-3 rounded-lg hover:bg-[#8a6b4a] transition">
                    Logout
                </button>
            </div>
        </div>
    )
}
