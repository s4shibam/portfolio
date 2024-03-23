'use client'

import { motion } from 'framer-motion'

import { fadeIn } from '@/animation/framer'
import PageWrapper from '@/common/page-wrapper'
import { STACKS_HEADER, STACK_CATEGORIES } from '@/constants/stacks'
import { gradients } from '@/lib/card-hover-gradients'
import Card from '@/ui/card'
import PageHeading from '@/ui/page-heading'

const Stacks = () => {
  return (
    <PageWrapper>
      <PageHeading header={STACKS_HEADER} />

      {STACK_CATEGORIES?.map((stack, i) => (
        <Card
          key={stack?.type}
          className="w-full"
          hoverGradient={gradients[i]}
          i={i + 0.25}
          title={
            <div className="flex items-center gap-1 font-medium">
              <i className="bx bx-command text-lg md:text-2xl" />
              <span>{stack?.type}</span>
            </div>
          }
        >
          <div className="flex flex-wrap gap-2 overflow-hidden">
            {stack?.techs?.map((tech, j) => (
              <motion.div
                key={tech.title}
                className="flex items-center gap-3 rounded-xl border-2 bg-bg-light p-1.5 pr-5 dark:bg-bg-darker"
                style={{ borderColor: tech.color }}
                variants={fadeIn('left', 'tween', 50, 0.1 * j + i, 0.5)}
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="rounded-md bg-white p-1 md:rounded-lg md:p-1.5">
                  <tech.Icon
                    className="size-4 sm:size-5"
                    color={tech.color}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                </div>
                <p className="text-sm font-medium tracking-wide md:text-lg">
                  {tech?.title}
                </p>
              </motion.div>
            ))}
          </div>
        </Card>
      ))}
    </PageWrapper>
  )
}

export default Stacks
