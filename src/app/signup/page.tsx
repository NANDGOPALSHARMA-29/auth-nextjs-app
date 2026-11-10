"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage(){
    const router = useRouter();
    const [user, setUser] = React.useState({
        username: "",
        email: "",
        password: ""
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const onSignup = async ()=>{
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            toast.success("Account created successfully!");
            router.push("/login");
        }
        catch (error) {
            console.error("Error creating user:", error);
            toast.error("Error creating user. Please try again.");
        }finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        if(user.username.length>0 && user.email.length>0 && user.password.length>0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f7f2e8] px-4 py-10">
            <div className="w-full max-w-md rounded-2xl border border-[#e8dfd1] bg-[#fffdf8] p-8 shadow-lg shadow-[#6b543515]">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[#3d342b]"> Create Account </h1>
                    <p className="mt-2 text-[#786e61]"> {loading ? "Creating account..." : "Sign up to get started"} </p>
                </div>
                <div className="mb-5">
                    <label htmlFor="username" className="mb-2 block text-sm font-medium text-[#51483d]"> Username </label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        className="w-full rounded-lg border border-[#d9cdbb] bg-[#fffaf1] px-4 py-3 text-[#352d25] outline-none transition placeholder:text-[#8d8376] focus:border-[#a7835e] focus:ring-2 focus:ring-[#a7835e]/25"
                        value={user.username}
                        onChange={(e) =>
                            setUser({ ...user, username: e.target.value })
                        }
                    />
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

                <button onClick={onSignup} disabled={buttonDisabled || loading}
                    className="w-full rounded-lg bg-[#76583f] py-3 font-semibold text-[#fffdf8] transition duration-200 hover:bg-[#624730] disabled:cursor-not-allowed disabled:opacity-50">
                    {loading ? "Creating account..." : buttonDisabled ? "Please fill all fields" : "Create Account" } 
                </button>

                <p className="mt-6 text-center text-sm text-[#786e61]">
                    Already have an account?{" "}
                    <Link href="/login" className="font-semibold text-[#76583f] hover:underline"> Login </Link>
                </p>

            </div>
        </div>
    )
}