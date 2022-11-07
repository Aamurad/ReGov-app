import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Test() {
    const [navbar, setNavbar] = useState(false)
    return (
        <div>
            <Head>
                <title>Create Next Responsive Navbar With Tailwind CSS</title>
                <meta name="description" content="Create Next JS Responsive Menu with Tailwind CSS" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className="w-full bg-gray-800 shadow">
                <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
                    <div>
                        <div className="flex items-center justify-between py-3 md:block md:py-5">
                            <a href="#">
                                <h2 className="text-2xl font-bold text-white">NEXT JS</h2>
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                                navbar ? 'block' : 'hidden'
                            }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-white">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="text-white">
                                    <Link href="/blogs">Blogs</Link>
                                </li>
                                <li className="text-white">
                                    <Link href="/about">About US</Link>
                                </li>
                                <li className="text-white">
                                    <Link href="/contact">Contact US</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="navbar-expand-lg bg-blueGray-500 relative mb-3 flex flex-wrap items-center justify-between px-2 py-3">
                <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
                    <div className="relative flex w-full justify-between px-4  lg:static lg:block lg:w-auto lg:justify-start">
                        <a
                            className="whitespace-no-wrap mr-4 inline-block py-2 text-sm font-bold uppercase leading-relaxed text-white"
                            href="#pablo"
                        >
                            blueGray Color
                        </a>
                        <button
                            className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
                            type="button"
                        >
                            <span className="relative block h-px w-6 rounded-sm bg-white"></span>
                            <span className="relative mt-1 block h-px w-6 rounded-sm bg-white"></span>
                            <span className="relative mt-1 block h-px w-6 rounded-sm bg-white"></span>
                        </button>
                    </div>
                    <div className="flex-grow items-center lg:flex">
                        <ul className="ml-auto flex list-none flex-col lg:flex-row">
                            <li className="nav-item">
                                <a
                                    className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-white hover:opacity-75"
                                    href="#pablo"
                                >
                                    Discover
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-white hover:opacity-75"
                                    href="#pablo"
                                >
                                    Profile
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-white hover:opacity-75"
                                    href="#pablo"
                                >
                                    Setting
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="mt-8 flex items-center justify-center">
                <h1 className="text-2xl font-bold text-purple-500">
                    Create Responsive Navbar Menu in Next js with Tailwind CSS
                </h1>
            </div>
        </div>
    )
}
