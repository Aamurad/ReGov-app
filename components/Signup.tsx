import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Link from 'next/link'

export default function Signup() {
    const router = useRouter()
    const [loading, isLoading] = useState(false)

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        isLoading(true)
        e.preventDefault()
        const body = {
            username: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
        }
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
        if (res.status === 200) {
            const userObj = await res.json()
            // mutate(userObj)
        } else {
            isLoading(false)
            // setErrorMsg('Incorrect username or password. Try again!')
        }
    }

    return (
        <div className="flex min-h-full flex-col items-center justify-center py-2">
            <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                <div className="flex max-w-4xl rounded-2xl bg-white shadow-2xl lg:w-2/3">
                    <div className="w-3/5 p-5">
                        <div className="py-12">
                            <form onSubmit={onSubmit}>
                                <h2 className="text-3xl font-bold text-blue-400 ">Sign In</h2>
                                <div className="mb-2 inline-block w-32 border-2 border-blue-400"></div>
                                <div className="flex flex-col items-center pt-5">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        id={'email'}
                                        className="mb-5 h-10 rounded-lg border-2 border-gray-300 px-5 focus:border-blue-400 focus:outline-none lg:w-80"
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        id={'password'}
                                        className="mb-5 h-10 rounded-lg border-2 border-gray-300 px-5 focus:border-blue-400 focus:outline-none lg:w-80"
                                    />
                                    <button className="inline-block rounded-full border-2 border-blue-400 px-12 py-2 font-semibold text-blue-400 transition duration-300 hover:bg-blue-400 hover:text-white">
                                        {loading ? (
                                            <div className="spinner-border" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        ) : (
                                            <>Login</>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-2/5 rounded-br-2xl rounded-tr-2xl bg-blue-400 py-36 px-12 text-white">
                        <h2 className="mb-2 text-3xl font-bold">Hello!</h2>
                        <div className="mb-2 inline-block w-32 border-2 border-white"></div>
                        <p className="mb-6">Have you signed up yet?</p>
                        <Link
                            href="/signup"
                            className="inline-block rounded-full border-2 border-white px-12 py-2 font-semibold transition duration-300 hover:bg-white hover:text-blue-400"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
