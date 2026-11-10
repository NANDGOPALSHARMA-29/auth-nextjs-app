"use client";

import React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import axios from "axios";

export default function LoginPage(){
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    });
    const onLogin = async ()=>{
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f7f2e8] px-4 py-10">
            <div className="w-full max-w-md rounded-2xl border border-[#e8dfd1] bg-[#fffdf8] p-8 shadow-lg shadow-[#6b543515]">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[#3d342b]"> Login </h1>
                    <p className="mt-2 text-[#786e61]"> Sign in to your account </p>
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#51483d]">
                        Email Address
                    </label>

                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-[#d9cdbb] bg-[#fffaf1] px-4 py-3 text-[#352d25] outline-none transition placeholder:text-[#8d8376] focus:border-[#a7835e] focus:ring-2 focus:ring-[#a7835e]/25"
                        value={user.email}
                        onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                        }
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="mb-2 block text-sm font-medium text-[#51483d]">
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className="w-full rounded-lg border border-[#d9cdbb] bg-[#fffaf1] px-4 py-3 text-[#352d25] outline-none transition placeholder:text-[#8d8376] focus:border-[#a7835e] focus:ring-2 focus:ring-[#a7835e]/25"
                        value={user.password}
                        onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                        }
                    />
                </div>

                <button onClick={onLogin} className="w-full rounded-lg bg-[#76583f] py-3 font-semibold text-[#fffdf8] transition duration-200 hover:bg-[#624730]"> Login </button>

                <p className="mt-6 text-center text-sm text-[#786e61]">
                    Don't have an account?{" "}
                    <Link href="/signup" className="font-semibold text-[#76583f] hover:underline"> Sign Up </Link>
                </p>

            </div>
        </div>
    )
}