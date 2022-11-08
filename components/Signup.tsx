import React, { useState } from 'react'

export default function Signup() {
    const [loading, isLoading] = useState(false)

    async function uploadFile(file: any) {
        let formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'documents')

        const res = await fetch('https://api.cloudinary.com/v1_1/dfaulsyg0/image/upload', {
            method: 'POST',
            body: formData,
        }).then((res) => res.json())
        console.log(res)
        return res
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        let idCardUrl = ''
        let ppPhotoUrl = ''
        isLoading(true)
        e.preventDefault()
        let { idCard, ppPhoto, firstName, lastName, email, password, address, country, postCode } = e.currentTarget
        await uploadFile(idCard.files[0]).then((res) => {
            idCardUrl = res.url
        })
        await uploadFile(ppPhoto.files[0]).then((res) => {
            ppPhotoUrl = res.url
        })

        let formData = new FormData()
        formData.append('idCard', idCardUrl)
        formData.append('ppPhoto', ppPhotoUrl)
        formData.append('firstName', firstName.value)
        formData.append('lastName', lastName.value)
        formData.append('email', email.value)
        formData.append('password', password.value)
        formData.append('address', address.value)
        formData.append('country', country.value)
        formData.append('postCode', postCode.value)

        await fetch('/api/signup', {
            method: 'POST',
            body: formData,
        })
    }

    return (
        <div className="flex min-h-full flex-col items-center justify-center py-2">
            <div className="flex w-full flex-col items-center justify-center text-center lg:px-20">
                <div className="w-full rounded-2xl bg-white shadow-2xl lg:w-1/2">
                    <div className=" p-5">
                        <div className="py-12">
                            <div className="mb-4">
                                <h2 className="text-3xl font-bold text-gray-900 ">Signup</h2>
                                <div className="mb-2 inline-block w-32 border border-gray-900"></div>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-6 grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="firstName"
                                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                            placeholder="First Name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="lastName"
                                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                            placeholder="Last Name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="address"
                                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            id="address"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                            placeholder="Address"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="postCode"
                                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Post Code
                                        </label>
                                        <input
                                            type="number"
                                            id="postCode"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                            placeholder="12345"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="city"
                                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            id="city"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                            placeholder="Kuala Lumpur"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="country"
                                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Country
                                        </label>
                                        <input
                                            type="text"
                                            id="country"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                            placeholder="Malaysia"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        placeholder="email@company.com"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="password"
                                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        placeholder="•••••••••"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                                        htmlFor="ppPhoto"
                                    >
                                        Passport Photo
                                    </label>
                                    <input
                                        className="block w-full cursor-pointer rounded-lg border border-gray-300  text-sm  focus:outline-none "
                                        id="ppPhoto"
                                        type="file"
                                        accept=".jpg, .jpeg, .png"
                                    />
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                                        .JPG, .JPEG or .PNG
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <label
                                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                                        htmlFor="idCard"
                                    >
                                        ID Photo
                                    </label>
                                    <input
                                        className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none"
                                        id="idCard"
                                        type="file"
                                        accept=".jpg, .jpeg, .png"
                                    />
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                                        .JPG, .JPEG or .PNG
                                    </p>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded-lg border border-blue-400 bg-white px-5 py-2.5 text-center text-sm font-medium text-blue-400 text-white hover:bg-blue-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
