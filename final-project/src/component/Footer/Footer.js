
const Footer = () => {
    return(
        <>
            <footer id="footer" className="bg-blue rounded-lg shadow dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                    <a
                        href="https://flowbite.com/"
                        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        <img
                        src="https://th.bing.com/th/id/OIP.UFkpFtGLkCbP9mlYlruljwHaHa?w=196&h=196&c=7&r=0&o=5&pid=1.7"
                        className="h-8"
                        alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Pekerja Dinasti
                        </span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                        <a href="https://www.linkedin.com/in/dimas-chandra-winata-softwaredev/" className="hover:underline me-4 md:me-6">
                            Linkedin
                        </a>
                        </li>
                        <li>
                        <a href="https://api.whatsapp.com/send/?phone=6281371758592&text&type=phone_number&app_absent=0" className="hover:underline">
                            Contact
                        </a>
                        </li>
                    </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024{" "}
                    <a href="https://flowbite.com/" className="hover:underline">
                        Dimas Chandra Winata
                    </a>
                    . All Rights Reserved.
                    </span>
                </div>
            </footer>

        </>
    )
}

export default Footer;