"use client";

import Link from 'next/link';


const Page = () => {
    
    return (
        <div className="font-sans ">
            {/* Image Section */}
            <div className="relative mb-3">
    <img
        src="/images/contact.jpg"
        alt="Contact Us Visual"
        className="w-full h-[350px] rounded-lg " // Fix invalid height class
    />

    {/* Overlay Breadcrumb Navigation */}
    <nav className="absolute bottom-4 right-4 bg-opacity-70 bg-white p-2 rounded-md text-sm">
        <Link href="/" className="text-blue-500 hover:underline">
            Home
        </Link>{' '}
        &gt; <span className="text-gray-500">Our Services</span>
    </nav>
</div>

            {/* Contact Section */}
            <div className="text-center">
                <h2 className="font-bold text-red-600 text-2xl mb-2">Our Services</h2>
                <p className="text-gray-500 text-base">
                "Our goal is to establish universal premier care across the United States. By setting a benchmark for excellence in health and support services, we aim to ensure compassionate, reliable, and innovative care for all individuals, regardless of location or circumstance."
                </p>
            </div>
        </div>
    
    );
};

export default Page;