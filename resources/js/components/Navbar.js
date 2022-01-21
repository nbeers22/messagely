import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar () {
    return (
        <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
            <a href="{{ route('login') }}" className="text-sm text-gray-700 dark:text-gray-500 underline">Log in</a>
            <a href="{{ route('register') }}" className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register</a>
        </div>
    )
}
