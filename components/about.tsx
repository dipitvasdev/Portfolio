"use client"
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
export default function About() {

  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className='mb-3'>
        I am a software engineer with experience in backend development, machine learning, data analysis, and cloud technologies. I earned my M.S. in Computer Engineering from New York University in May 2024 and currently work at Google.
      </p>

      <p>
        I enjoy building reliable software systems and applying data-driven methods to practical problems. Outside technology, I enjoy chess, cinema, gaming, reading, and exploring new places.
      </p>
    </motion.section>
  )
}
