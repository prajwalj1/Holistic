"use client";
import React, { useRef, useState } from 'react'; // Consolidate imports
import Link from 'next/link';
import ReCAPTCHA from 'react-google-recaptcha';

const Page = () => {
    const recaptchaRef = useRef(null);
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const token = recaptchaRef.current.getValue(); // Get CAPTCHA value
        if (!token) {
            alert('Please complete the CAPTCHA verification.');
            return; // Ensure CAPTCHA validation
        }
        recaptchaRef.current.reset(); // Reset CAPTCHA after submission

        setLoading(true);

        try {
            const res = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, token }),
            });

            const result = await res.json();
            if (result.success) {
                alert('Email sent successfully!');
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            } else {
                alert('Failed to send email. Please try again.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="font-sans">
            {/* Image Section */}
            <div className="relative mb-4">
    <img
        src="/images/contact.jpg"
        alt="Contact Us Visual"
        className="w-full h-[350px] rounded-lg" // Fix invalid height class
    />
    {/* Overlay Breadcrumb Navigation */}
    <nav className="absolute bottom-4 right-4 bg-opacity-70 bg-white p-2 rounded-md text-sm">
        <Link href="/" className="text-blue-500 hover:underline">
            Home
        </Link>{' '}
        &gt; <span className="text-gray-500">Contact Us</span>
    </nav>
</div>

            {/* Contact Section */}
            <div className="text-center">
                <h2 className="font-bold text-red-600 text-2xl mb-2">Contact Us</h2>
                <p className="text-gray-500 text-base">
                    Please fill up the form and reach out to us. We will respond to you as soon as possible.
                </p>
            </div>

            {/* Contact Form */}
            <form className="flex flex-col gap-6 mt-10" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Left Column */}
                    <div className="flex flex-col gap-4">
    <label className="text-gray-700 font-bold mx-1">
        Name:
        <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full  p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm bg-zinc-100 font-medium"
            required
        />
    </label>
    <label className="text-gray-700 font-bold mx-1">
        Phone Number:
        <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full  p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm bg-zinc-100  font-medium"
            required
        />
    </label>
</div>

{/* Right Column */}
<div className="flex flex-col gap-4 ">
    <label className="text-gray-700 font-bold mx-1">
        Email Address:
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm bg-zinc-100 font-medium"
            required
        />
    </label>
    <label className="text-gray-700 font-bold mx-1 ">
        Subject:
        <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter the subject"
            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm bg-zinc-100 font-medium"
            required
        />
    </label>
</div>
                </div>
                {/* Message Section */}
                <label className='text-gray-700 font-bold mx-1 '>
                    Message:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        rows="4"
                        className="w-full p-2 rounded-md border border-gray-300 bg-zinc-100 font-medium"
                        required
                    />
                </label>

                {/* CAPTCHA Section */}
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LfI1xErAAAAAB0tafu6hXyQWrhWPONLEyomuJn_" // Replace with your reCAPTCHA site key
                    className="mx-1"
                />

                {/* Submit Button */}
                <button
    type="submit"
    className="py-3 px-4 rounded-b-sm bg-green-500 text-white hover:bg-green-600 disabled:bg-gray-400 mb-0.5 font-normal cursor-pointer"
    disabled={loading}
>
    {loading ? 'Sending...' : 'Submit'}
</button>
            </form>
        </div>
    );
};

export default Page;