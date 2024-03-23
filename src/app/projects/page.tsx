'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import { fadeIn } from '@/animation/framer'
import PageWrapper from '@/common/page-wrapper'
import ProjectModal from '@/common/project-modal'
import {
  MAJOR_PROJECTS,
  MAJOR_PROJECT_HEADER,
  MINOR_PROJECTS,
  MINOR_PROJECT_HEADER,
  TProject
} from '@/constants/projects'
import useOpenClose from '@/hooks/use-open-close'
import Button from '@/ui/button'
import PageHeading from '@/ui/page-heading'

const Projects = () => {
  const { isOpen, open, close } = useOpenClose()
  const { isOpen: isMinorProjectsOpen, open: openMinorProjects } =
    useOpenClose()
  const [currentProject, setCurrentProject] = useState<TProject>()

  return (
    <PageWrapper>
      <PageHeading header={MAJOR_PROJECT_HEADER} />

      <div className="relative grid size-full gap-6 md:grid-cols-2">
        {MAJOR_PROJECTS?.map((project, i) => (
          <ProjectCard
            key={i}
            i={i}
            openModal={open}
            project={project}
            setCurrentProject={setCurrentProject}
          />
        ))}
      </div>

      {!isMinorProjectsOpen && (
        <Button
          icon="bx-plus"
          wrapperClassName="mx-auto mt-16 w-fit rounded-full px-3"
          onClick={openMinorProjects}
        />
      )}

      {isMinorProjectsOpen && (
        <>
          <PageHeading className="mt-20" header={MINOR_PROJECT_HEADER} />

          <div className="relative grid size-full gap-6 md:grid-cols-2">
            {MINOR_PROJECTS?.map((project, i) => (
              <ProjectCard
                key={i}
                i={i}
                openModal={open}
                project={project}
                setCurrentProject={setCurrentProject}
              />
            ))}
          </div>
        </>
      )}

      {isOpen && currentProject && (
        <ProjectModal close={close} project={currentProject} />
      )}
    </PageWrapper>
  )
}

export default Projects

// Components

const ProjectCard = ({
  i,
  project,
  openModal,
  setCurrentProject
}: {
  i: number
  project: TProject
  openModal: () => void
  setCurrentProject: (project: TProject) => void
}) => {
  return (
    <motion.div
      key={i}
      className="group relative grid aspect-[1920/940] w-full place-items-center overflow-hidden rounded-xl border-2 drop-shadow-md"
      style={{
        background: `linear-gradient(to bottom right, ${project.color}, transparent 50%, transparent)`,
        borderColor: project.color
      }}
      variants={fadeIn('left', 'tween', 50, 0.25 * (i + 1), 0.5)}
    >
      <div className="absolute -bottom-10 flex w-[90%] flex-col items-center justify-center transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:w-full">
        <p className="pb-1 text-lg font-semibold uppercase tracking-wider text-black transition-all duration-700 ease-in-out group-hover:-translate-y-10 dark:text-white sm:text-2xl">
          {project?.title}
        </p>
        <Image
          alt={project?.title}
          className="rounded-lg drop-shadow-md"
          placeholder="blur"
          src={project?.image}
        />
      </div>
      <button
        className="absolute mb-5 flex translate-y-16 items-center gap-1 self-end rounded-lg px-3 py-1 text-lg font-medium tracking-wide text-black drop-shadow-lg transition-all delay-200 duration-500 ease-in-out hover:!bg-bg-lighter group-hover:translate-y-0 dark:hover:!bg-bg-lighter"
        style={{ backgroundColor: project.color }}
        onClick={() => {
          setCurrentProject(project)
          openModal()
        }}
      >
        <i className="bx bx-cube-alt text-2xl" />
        See Details
      </button>
    </motion.div>
  )
}
