import React from 'react'

export default function Nav() {
  return (
    <div className="bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-24 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
                <a className="block text-pink-600" href="#">
                <span className="sr-only">Home</span>
                <svg
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    height="3em"
                    width="5em"
                    className="mx-auto mb-2 text-white"
                    >
                     <path d="M0 32v448h448V32H0zm316.5 325.2L224 445.9l-92.5-88.7 64.5-184-64.5-86.6h184.9L252 173.2l64.5 184z" />
                </svg>
                </a>
            </div>

            <div className="hidden md:block">
                <nav >
                <ul className="flex items-center gap-6 text-sm">
                    <li>
                        <a className="text-white transition hover:text-gray-500/75" href="#"> Home</a>
                    </li>

                    <li>
                        <a className="text-white transition hover:text-gray-500/75" href="#"> About Us </a>
                    </li>

                    <li>
                    <a className="text-white transition hover:text-gray-500/75" href="#"> Our Services </a>
                    </li>

                    <li>
                    <a className="text-white transition hover:text-gray-500/75" href="#"> Testimonials </a>
                    </li>

                </ul>
                </nav>
            </div>

            <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                <a
                    className="rounded-md bg-white px-6 py-3 text-md font-medium text-stone-800 shadow"
                    href="#"
                >
                    Book a Demo
                </a>

    
                </div>

                <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
