
import { Suspense } from "react";

function ProfileLoading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f7f2e8] px-4 py-10">
            <div className="w-full max-w-md rounded-2xl border border-[#e8dfd1] bg-[#fffdf8] p-8 shadow-lg shadow-[#6b543515]">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[#3d342b]">
                        Profile
                    </h1>

                    <p className="mt-2 text-[#786e61]">
                        Loading your profile...
                    </p>

                    <div className="mt-6 flex justify-center">
                        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#e8dfd1] border-t-[#786e61]"></div>
                    </div>
                </div>

            </div>
        </div>
    );
}

async function ProfileContent({ params }: any) {
    const { id } = await params;

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f7f2e8] px-4 py-10">
            <div className="w-full max-w-md rounded-2xl border border-[#e8dfd1] bg-[#fffdf8] p-8 shadow-lg shadow-[#6b543515]">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[#3d342b]">
                        Profile
                    </h1>

                    <p className="mt-2 text-[#786e61]">
                        Welcome to your profile page {id}
                    </p>
                </div>

            </div>
        </div>
    );
}

export default function UserProfile({ params }: any) {
    return (
        <Suspense fallback={<ProfileLoading />}>
            <ProfileContent params={params} />
        </Suspense>
    );
}
