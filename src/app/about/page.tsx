'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { fadeIn, slideIn } from '@/animation/framer'
import ABOUT_IMG from '@/assets/me/about-image.webp'
import PageWrapper from '@/common/page-wrapper'
import { ABOUT, ABOUT_HEADER } from '@/constants/about'
import { CODING_PROFILES } from '@/constants/coding-profiles'
import { CURRENT_STATUS } from '@/constants/others'
import { getRandomGradient, gradients } from '@/lib/card-hover-gradients'
import AnimatedBorderCard from '@/ui/animated-border-card'
import Button from '@/ui/button'
import Card from '@/ui/card'
import IconList from '@/ui/icon-list'
import PageHeading from '@/ui/page-heading'

const About = () => {
  return (
    <PageWrapper>
      <PageHeading header={ABOUT_HEADER} />

      <div className="mb-6 flex w-full flex-col items-center gap-3">
        <AnimatedBorderCard wrapperClassName="aspect-square min-w-[280px] max-w-[325px]">
          <Image
            priority
            alt="Shibam Saha"
            className="object-cover"
            height={450}
            src={ABOUT_IMG}
            width={450}
          />
        </AnimatedBorderCard>
        <motion.p
          className="mb-4 text-center font-medium"
          variants={fadeIn('down', 'tween', 50, 0.25, 0.25)}
        >
          {CURRENT_STATUS}
        </motion.p>
        <Button className="px-2" icon="bx-paper-plane" link="/contact">
          Say Hi!
        </Button>
      </div>

      {ABOUT?.map((about, i) => (
        <Card
          key={about.type}
          hoverGradient={gradients[i]}
          title={about.type}
          titleClassName="capitalize"
        >
          <IconList animation boxIcon="bx-analyse" data={about.description} />
        </Card>
      ))}

      <Card hoverGradient={getRandomGradient()} title="coding profiles">
        <div className="flex flex-wrap gap-3">
          {CODING_PROFILES?.map((profile, i) => (
            <Link key={i} href={'/_' + profile?.source} target="_blank">
              <motion.div
                className="flex items-center gap-3 rounded-xl border-2 bg-bg-light p-1.5 pr-5 dark:bg-bg-darker"
                style={{ borderColor: profile.color }}
                variants={slideIn('left', 'tween', 50, 0.25 * (i + 1), 0.25)}
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="rounded-lg bg-white p-1.5">
                  <profile.Icon
                    className="size-4 sm:size-5"
                    color={profile.color}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                </div>
                <p className="text-sm font-medium tracking-wide md:text-lg">
                  {profile?.name}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </Card>
    </PageWrapper>
  )
}

export default About
