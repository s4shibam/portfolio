'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { fadeIn } from '@/animation/framer'
import PageWrapper from '@/common/page-wrapper'
import { ACHIEVEMENTS, ACHIEVEMENTS_HEADER } from '@/constants/achievements'
import { EXPERIENCES, EXPERIENCES_HEADER } from '@/constants/experiences'
import { getRandomGradient, gradients } from '@/lib/card-hover-gradients'
import Card from '@/ui/card'
import IconList from '@/ui/icon-list'
import PageHeading from '@/ui/page-heading'
import TagList from '@/ui/tag-list'

const Experience = () => {
  return (
    <PageWrapper>
      <PageHeading header={EXPERIENCES_HEADER} />

      <div className="flex w-full flex-col gap-4">
        {EXPERIENCES.map((experience, i) => (
          <Card
            key={i}
            className="py-0 sm:pt-0"
            hoverGradient={gradients[i]}
            i={i}
            title={`${experience.designation} (at) ${experience.company.name}`}
          >
            <div className="flex flex-col gap-6">
              <div className="flex w-[calc(100%+24px)] -translate-x-3 flex-wrap gap-2 border-b-2 bg-bg-lighter p-4 pt-[calc(1.125rem+0.75rem)] dark:bg-bg-dark sm:pt-[calc(1.375rem+0.75rem)]">
                <motion.div
                  className="flex items-center gap-2 rounded-full bg-bg-darker/10 px-4 py-1.5 pl-2 dark:bg-bg-light/10"
                  variants={fadeIn('left', 'spring', 50, 0.25, 0.25)}
                >
                  <p className="grid size-8 place-items-center overflow-hidden rounded-full bg-white">
                    <i className="bx bx-map text-xl text-primary sm:text-2xl" />
                  </p>
                  <span>{experience.location}</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-2 rounded-full bg-bg-darker/10 px-4 py-1.5 pl-2 dark:bg-bg-light/10"
                  variants={fadeIn('left', 'spring', 50, 0.5, 0.25)}
                >
                  <p className="grid size-8 place-items-center overflow-hidden rounded-full bg-white">
                    <i className="bx bx-time text-xl text-primary sm:text-2xl" />
                  </p>
                  <span>
                    {experience?.tenure?.from} - {experience?.tenure?.to}
                  </span>
                </motion.div>

                <motion.a
                  className="group flex items-center gap-3 rounded-full bg-bg-darker/10 px-4 py-1.5 pl-2 dark:bg-bg-light/10"
                  href={experience.company.link}
                  target="_blank"
                  variants={fadeIn('left', 'spring', 50, 0.75, 0.25)}
                >
                  <p className="grid size-8 place-items-center overflow-hidden rounded-full bg-white">
                    <Image
                      alt={experience.company.name}
                      className="size-6"
                      height={50}
                      src={experience.company.logo}
                      width={50}
                    />
                  </p>
                  <span className="group-hover:text-primary dark:group-hover:text-secondary">
                    {experience.company.link.split('https://').pop()}
                  </span>
                </motion.a>
              </div>

              <IconList
                animation
                boxIcon="bx-bulb"
                data={experience?.description}
              />

              <TagList
                animation
                data={experience?.techStack}
                wrapperClassName="flex w-[calc(100%+24px)] -translate-x-3 flex-wrap gap-2 border-t-2 bg-bg-lighter p-4 dark:bg-bg-dark"
              />
            </div>
          </Card>
        ))}
      </div>

      <PageHeading className="mt-20" header={ACHIEVEMENTS_HEADER} />

      <Card hoverGradient={getRandomGradient()} title="achievements">
        <IconList animation boxIcon="bx-trophy" data={ACHIEVEMENTS} />
      </Card>
    </PageWrapper>
  )
}

export default Experience
