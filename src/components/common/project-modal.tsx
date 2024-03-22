import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC, Fragment } from 'react'

import Card from '../ui/card'

import { fadeIn, slideIn } from '@/animation/framer'
import { TProject } from '@/constants/projects'
import { getRandomGradient } from '@/lib/card-hover-gradients'
import IconList from '@/ui/icon-list'
import ModalFrame from '@/ui/modal-frame'
import TagList from '@/ui/tag-list'

interface ProjectModalProps {
  project: TProject
  close: () => void
}

const ProjectModal: FC<ProjectModalProps> = ({ project, close }) => {
  return (
    <ModalFrame
      defaultBorderColor
      className="max-w-3xl"
      close={close}
      color={project.color}
      title={project.title}
    >
      <div className="flex flex-col gap-4">
        <motion.div
          className="mb-2 mt-14 aspect-[1920/940] h-auto w-full overflow-hidden rounded-2xl border-2 drop-shadow-md"
          variants={fadeIn('down', 'tween', 100, 0.2, 0.5)}
        >
          <Image
            alt={project?.title}
            className="size-full"
            placeholder="blur"
            src={project?.image}
            style={{ borderColor: project.color }}
          />
        </motion.div>

        <Card hoverGradient={getRandomGradient()} i={1} title="Summary">
          <div className="indent-3">{project?.summary}</div>
        </Card>

        <Card hoverGradient={getRandomGradient()} i={2} title="Project Links">
          <div className="grid grid-cols-[auto_1fr] items-center gap-2">
            {project.links.map((projectLink, i) => (
              <Fragment key={i}>
                <div className="flex h-full items-center gap-2 rounded-lg bg-bg-light px-2 py-1 dark:bg-bg-light/10">
                  <i
                    className={`bx ${projectLink.linkTypeBoxIcon} bx-sm pt-px`}
                  />
                  <p className="hidden font-medium capitalize sm:block">
                    {projectLink.linkType}
                  </p>
                </div>
                <a
                  className="line-clamp-1 flex w-fit max-w-full items-center gap-2 truncate rounded-lg bg-bg-light px-2 py-1 hover:text-primary dark:bg-bg-light/10 dark:hover:text-secondary"
                  href={projectLink.linkHost}
                  target="_blank"
                >
                  <i
                    className={`bx ${projectLink.linkHostBoxIcon} bx-sm pt-px`}
                  />
                  <code className="line-clamp-1">
                    {projectLink.linkHost.split('https://').pop()}
                  </code>
                </a>
              </Fragment>
            ))}
          </div>
        </Card>

        <Card hoverGradient={getRandomGradient()} i={3} title="Features">
          <IconList
            animation
            boxIcon="bxs-magic-wand"
            data={project.features}
          />
        </Card>

        <Card hoverGradient={getRandomGradient()} i={4} title="Tech Stack">
          <TagList animation data={project?.techs} />
        </Card>

        <motion.button
          className="group sticky inset-0 -bottom-2 mx-auto grid aspect-square w-10 place-items-center rounded-full bg-red-500 md:w-12"
          variants={slideIn('down', 'tween', 200, 1.5, 1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={close}
        >
          <i className="bx bx-x text-4xl text-white transition-transform duration-500 ease-in-out group-hover:rotate-180 md:text-5xl" />
        </motion.button>
      </div>
    </ModalFrame>
  )
}

export default ProjectModal
