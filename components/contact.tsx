"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast'

export default function Contact() {

    const { ref } = useSectionInView("Contact");


    return (
        <motion.section
            ref={ref}
            id="contact"
            className='scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            viewport={{
                once: true
            }}

        >
            <SectionHeading>Contact Me</SectionHeading>
            <p className='text-gray-700 -mt-6 dark:text-white/80'>Feel free to reach out to me through email at <a className='underline' href='mailto:dipit.vasdev@nyu.edu'>dipit.vasdev@nyu.edu</a> or send me a message using the form below.</p>

            <form className='mt-10 flex flex-col dark:text-black'
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);
                    if (error) {
                        toast.error(error);
                        return
                    }
                    toast.success("Email sent successfully!");
                }}
            >
                <input placeholder="Your email" className='h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' type="email"
                    required={true} maxLength={500} name='senderEmail'
                />
                <textarea placeholder="Your message" className='h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' required={true} maxLength={5000} name='message' />
                <SubmitBtn />
            </form>
        </motion.section>
    )
}
