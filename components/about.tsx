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
        After earning a Bachelor's degree in <span className="font-medium">Computer Science and Engineering</span> from Guru Gobind Singh Indraprastha University, my fascination with neural networks drove me to pursue a Master’s in <span className="font-medium">Computer Engineering</span> at New York University. <span className="italic">What excites me most about technology</span> is the challenge of unraveling complex problems. I <span className="underline">thrive</span> on finding innovative solutions in the fields of <span className="font-medium">data science, machine learning, and generative AI</span>. My technical toolkit includes <span className="font-medium">Python, Java, TensorFlow, and React</span>, alongside advanced competencies in <span className="font-medium">full-stack development</span>. I’m continuously honing these skills through dynamic projects and professional engagements. Presently, I am eager to secure a <span className="font-medium">full-time role</span> where I can contribute to impactful tech solutions.
      </p>

      <p>
        <span className="italic">Beyond the screen</span>, I balance my tech pursuits with personal interests. I’m a <span className="font-medium">chess enthusiast</span>, relishing the strategic depth of each game. I’m currently absorbed in <span className="font-medium">"Quiet: The Power of Introverts in a World That Can't Stop Talking"</span> by Susan Cain, which has given me profound insights into personality dynamics. As a gamer, I find relaxation in virtual worlds, and I explore culinary arts as a <span className="font-medium">cooking aficionado</span>, experimenting with new recipes.
      </p>
    </motion.section>
  )
}
