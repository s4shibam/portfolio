'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { fadeIn } from '@/animation/framer'
import PROFILE_IMG from '@/assets/me/profile-image.webp'
import PageWrapper from '@/common/page-wrapper'
import { METADATA } from '@/constants/meta'
import { HERO_PAGE_QUOTE, RESUME_LINK } from '@/constants/others'
import { SOCIALS } from '@/constants/socials'
import AnimatedBorderCard from '@/ui/animated-border-card'
import Button from '@/ui/button'
import SocialIcon from '@/ui/social-icon'
import { cn } from '@/utils/functions'

const Home = () => {
  return (
    <PageWrapper className={cn('relative mt-5 items-center pb-5 md:mt-0')}>
      <AnimatedBorderCard wrapperClassName="aspect-square w-1/2 min-w-[280px] max-w-[325px]">
        <Image
          priority
          alt="Shibam Saha"
          className="object-cover"
          height={450}
          src={PROFILE_IMG}
          width={450}
        />
      </AnimatedBorderCard>
      <div className="space-y-1.5 text-center">
        <motion.h3
          className="text-3xl font-bold tracking-wider md:text-4xl 2xl:text-5xl"
          variants={fadeIn('up', 'tween', 25, 0.1, 0.5)}
        >
          Hey, I&apos;m
        </motion.h3>
        <motion.h1
          className="animate-text bg-gradient-to-tr from-primary to-secondary bg-clip-text text-4xl font-bold tracking-wider text-transparent drop-shadow-lg md:text-6xl 2xl:text-7xl"
          variants={fadeIn('up', 'tween', 25, 0.1, 0.5)}
        >
          SHIBAM SAHA
        </motion.h1>
        <motion.h5
          className="font-semibold tracking-wide lg:text-xl 2xl:text-2xl"
          variants={fadeIn('up', 'tween', 25, 0.1, 0.5)}
        >
          {'{'} {HERO_PAGE_QUOTE} {'}'}
        </motion.h5>
      </div>

      <div className="mb-2 space-x-2 sm:space-x-4">
        {SOCIALS?.map((social, i) => (
          <SocialIcon key={i} index={i} social={social} />
        ))}
      </div>

      <Button icon="bx-cloud-download" link={RESUME_LINK}>
        Resume
      </Button>

      <span className="sr-only">{METADATA.description}</span>
    </PageWrapper>
  )
}

export default Home
