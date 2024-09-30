'use client'

import React from 'react'
// import { Menu, X } from 'lucide-react'
// import { menuItems } from "../data/AboutData"

import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// import { navigation } from "../data/AboutData"
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    // const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen)
    // }
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    return (

        <header className="fixed bg-slate-50 inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="  flex align-center justify-between p-6">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">AI Translator</span>
                        <img
                            alt=""
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            className="h-8 w-auto"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:gap-x-12">
                    {/* {navigation.map((item) => (
                        <Link key={item.name} href={item.name} className="text-sm font-semibold leading-6 text-gray-900">
                            {item.name}
                        </Link>
                    ))} */}
                    <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Home
                            </NavLink>

                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/fetch"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Fetch
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/page"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Page
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <NavLink to="/form" className="text-sm font-semibold leading-6 text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </NavLink>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {/* {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.name}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </NavLink>
                                ))} */}
                                <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                                    <li>
                                        <NavLink
                                            to="/"
                                            className={({ isActive }) =>
                                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }
                                        >
                                            Home
                                        </NavLink>

                                    </li>
                                    <li>
                                        <NavLink
                                            to="/about"
                                            className={({ isActive }) =>
                                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/card"
                                            className={({ isActive }) =>
                                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }
                                        >
                                            Card
                                        </NavLink>
                                    </li>
                                </ul>

                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
export default Header


// <header className="relative w-full border-b bg-white pb-4">
//     <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
//         <div className="inline-flex items-center space-x-2">
//             <span>
//                 <svg
//                     width="30"
//                     height="30"
//                     viewBox="0 0 50 56"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <path
//                         d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
//                         fill="black"
//                     />
//                 </svg>
//             </span>
//             <span className="font-bold">DevUI</span>
//         </div>
//         <div className="hidden lg:block">
//             <ul className="inline-flex space-x-8">
//                 {menuItems.map((item) => (
//                     <li key={item.name}>
//                         <a
//                             href={item.href}
//                             className="text-sm font-semibold text-gray-800 hover:text-gray-900"
//                         >
//                             {item.name}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//         <div className="hidden lg:block">
//             <button
//                 type="button"
//                 className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//             >
//                 Button text
//             </button>
//         </div>
//         <div className="lg:hidden">
//             <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
//         </div>
//         {isMenuOpen && (
//             <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
//                 <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
//                     <div className="px-5 pb-6 pt-5">
//                         <div className="flex items-center justify-between">
//                             <div className="inline-flex items-center space-x-2">
//                                 <span>
//                                     <svg
//                                         width="30"
//                                         height="30"
//                                         viewBox="0 0 50 56"
//                                         fill="none"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path
//                                             d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
//                                             fill="black"
//                                         />
//                                     </svg>
//                                 </span>
//                                 <span className="font-bold">DevUI</span>
//                             </div>
//                             <div className="-mr-2">
//                                 <button
//                                     type="button"
//                                     onClick={toggleMenu}
//                                     className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                                 >
//                                     <span className="sr-only">Close menu</span>
//                                     <X className="h-6 w-6" aria-hidden="true" />
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="mt-6">
//                             <nav className="grid gap-y-4">
//                                 {menuItems.map((item) => (
//                                     <a
//                                         key={item.name}
//                                         href={item.href}
//                                         className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
//                                     >
//                                         <span className="ml-3 text-base font-medium text-gray-900">
//                                             {item.name}
//                                         </span>
//                                     </a>
//                                 ))}
//                             </nav>
//                         </div>
//                         <button
//                             type="button"
//                             className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                         >
//                             Button text
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         )}
//     </div>
// </header >