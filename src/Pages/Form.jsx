import React, { useState } from 'react'

function Form() {
    const [form, setForm] = useState({
        productName: "",
        productBrand: "",
        price: "",
        productCategory: "",
        itemWeight: "",
        productDescription: ""
    })

    React.useEffect(() => {
        const savedForm = JSON.parse(localStorage.getItem('form')) || JSON.parse(sessionStorage.getItem('form'))

        if (savedForm)
            setForm(savedForm)
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => {
            const updatedForm = { ...prev, [name]: value }
            localStorage.setItem('form', JSON.stringify(updatedForm)) // persit in localstorage
            sessionStorage.setItem('form', JSON.stringify(updatedForm)) // session storage
            return updatedForm;
        })
    }

    'use server'
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/submit", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form)

            })

            if (response.ok) {
                console.log('Form data saved successfully')

                setForm({
                    productName: "",
                    productBrand: "",
                    price: "",
                    productCategory: "",
                    itemWeight: "",
                    productDescription: ""
                })
            }
            else {
                console.log('failed to save from data');

            }
        } catch (error) {
            console.error('error', error)
        }
    }
    // })

    return (
        <>
            <section className="bg-white w-full  dark:bg-gray-900 relative top-[50px]">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16 shadow-md">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm  text-left font-medium text-gray-900 dark:text-white">Product Name</label>
                                <input
                                    type="text"
                                    name="productName"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type product name"
                                    required=""
                                    onChange={handleChange}
                                    value={form.productName}
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="brand" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Brand</label>
                                <input type="text"
                                    name="productBrand"
                                    id="brand"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Product brand"
                                    value={form.productBrand}
                                    onChange={handleChange}
                                    required="" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="price" className="block mb-2 text-sm  text-left font-medium text-gray-900 dark:text-white">Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="$2999"
                                    required=""
                                    value={form.price}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="productCategory" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Category</label>
                                <select
                                    id="productCategory"
                                    name='productCategory'
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    value={form.productCategory}
                                    onChange={handleChange}
                                >
                                    <option defaultValue=''>Select category</option>
                                    <option value="TV">TV/Monitors</option>
                                    <option value="PC">PC</option>
                                    <option value="GA">Gaming/Console</option>
                                    <option value="PH">Phones</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="item-weight" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Item Weight (kg)</label>
                                <input
                                    type="number"
                                    name="itemWeight"
                                    id="itemWeight"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="12"
                                    required=""
                                    value={form.itemWeight}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="description"
                                    className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea
                                    id="productDescription"
                                    name='productDescription'
                                    rows="8"
                                    value={form.productDescription}
                                    onChange={handleChange}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Your description here"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center bg-white px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Add product
                        </button>
                    </form>
                </div>
            </section>

        </>
    )
}

export default Form
