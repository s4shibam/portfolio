'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { fadeIn } from '@/animation/framer'
import PROFILE_IMG from '@/assets/me/profile-image.webp'
import PageWrapper from '@/common/page-wrapper'
import { HERO_PAGE_QUOTE, RESUME_LINK } from '@/constants/others'
import { SOCIALS } from '@/constants/socials'
import AnimatedBorderCard from '@/ui/animated-border-card'
import Button from '@/ui/button'
import SocialIcon from '@/ui/social-icon'

const Home = () => {
  return (
    <PageWrapper className="relative mt-5 items-center md:mt-0">
      <AnimatedBorderCard className="aspect-square w-1/2 min-w-[280px] max-w-[325px]">
        <Image
          alt="Shibam Saha"
          className="z-10 w-full rounded-3xl object-cover"
          placeholder="blur"
          src={PROFILE_IMG}
          width={450}
        />
      </AnimatedBorderCard>
      <div className="space-y-1.5 text-center">
        <motion.p
          className="text-3xl font-bold tracking-wider md:text-4xl 2xl:text-5xl"
          variants={fadeIn('up', 'tween', 25, 0.1, 0.5)}
        >
          Hey, I&apos;m
        </motion.p>
        <motion.p
          className="animate-text bg-gradient-to-tr from-primary to-secondary bg-clip-text text-4xl font-bold tracking-wider text-transparent drop-shadow-lg md:text-6xl 2xl:text-7xl"
          variants={fadeIn('up', 'tween', 25, 0.1, 0.5)}
        >
          SHIBAM SAHA
        </motion.p>
        <motion.p
          className="font-semibold tracking-wide lg:text-xl 2xl:text-2xl"
          variants={fadeIn('up', 'tween', 25, 0.1, 0.5)}
        >
          {'{'} {HERO_PAGE_QUOTE} {'}'}
        </motion.p>
      </div>

      <div className="mb-2 space-x-2 sm:space-x-4">
        {SOCIALS?.map((link, i) => (
          <SocialIcon key={i} index={i} link={link} />
        ))}
      </div>

      <Button icon="bx-cloud-download" link={RESUME_LINK}>
        Resume
      </Button>

    </PageWrapper>
  )
}

export default Home
