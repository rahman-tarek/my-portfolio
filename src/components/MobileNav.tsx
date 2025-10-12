import React from 'react'
import { Link } from 'react-router'

const MobileNav = () => {
    return (
        <div className="w-full mt-20 border border-gray-300 px-3 py-2 rounded-lg backdrop-blur-md">
            <ul className="flex flex-col justify-between items-center gap-2 text-gray-500 text-left text-sm">
                {["Home", "About", "Projects", "Blog", "Contact", "More"].map((item, i) => (
                    <li key={i}>
                        <Link
                            to={`/${item.toLowerCase()}`}
                            className="focus:border rounded-full border-gray-300 px-4 py-1"
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MobileNav