"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useClerk } from '@clerk/nextjs';

const AutoSignOut = () => {
    const { signOut } = useClerk();
    const router = useRouter();

    useEffect(() => {
        signOut().then(() => {
            router.push("/");
        });
    }, [signOut, router]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
            <p className="text-lg md:text-xl font-bold text-red-500 dark:text-red-400">
                Error:    Signing user out...
            </p>
        </div>
    );
};

export default AutoSignOut;