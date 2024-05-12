"use client"
import Image from 'next/image'
import React from 'react'
import profileImage from '@/public/profile.jpeg'
import { motion } from "framer-motion"
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import Link from 'next/link'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'
export default function Intro() {

    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section ref={ref} id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2
                        }}>
                        <Image
                            alt='Dipit Portrait'
                            src={profileImage}
                            quality="95"
                            priority={true}
                            className='h-32 w-32 rounded-full border-[0.35rem] object-cover border-white shadow-xl' />
                    </motion.div>

                    <motion.span className='absolute text-4xl -bottom-1 right-0'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.5,
                            duration: 0.7
                        }}
                    >
                        👋
                    </motion.span>


                </div>
            </div>

            <motion.h1 className='mb-10 mt-4 px-4 text-xl font-extralight !leading-[1.5] sm:text-xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hi, I'm Dipit Vasdev.</span> I am an aspiring <span className="font-bold">Data Scientist, Research Enthusiast, and Software Developer</span> set to graduate from <span className="underline">New York University</span> in May 2024 with a degree in <span className="font-bold">Computer Engineering</span>. I excel in <span className="font-bold">Python, JavaScript, React, and TensorFlow</span> to create innovative digital solutions.

            </motion.h1>

            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 font-light'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link href="#contact"
                    className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all'

                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >Contact me <BsArrowRight
                        className='opacity-70 group-hover:translate-x-1 transition-all'
                    />
                </Link>

                <a className='bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10' href='/Dipit Vasdev Resume.pdf' download>Download CV <HiDownload className='opacity-60' /> </a>

                <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60' href='https://www.linkedin.com/in/dipit-vasdev/' target='_blank'>
                    <BsLinkedin />
                </a>

                <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60' href='https://github.com/dipitvasdev' target='_black'>
                    <BsGithub />
                </a>
            </motion.div>
        </section>
    )
}
