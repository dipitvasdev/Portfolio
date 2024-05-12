import React from 'react'

export default function Footer() {
    return (
        <footer className='mb-10 px-4 text-center text-gray-500'>
            <small className='mb-2 block text-xs'>
                &copy; 2024 Dipit Vasdev. All rights reserved.
            </small>
            <p className='text-xs'>
                <span className='font-semibold'>About this website:</span> built with <a href="https://nextjs.org/">Next.js</a> (App Rounter and Server Actions) & <a href="https://reactjs.org/">React</a>, TypeScript, <a href="https://tailwindcss.com/">Tailwind CSS</a>, Framer Motion, React Email & Resend, and <a href="https://vercel.com/">Vercel hosting</a>.
            </p>

        </footer>
    )
}
