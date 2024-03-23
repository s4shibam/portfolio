'use client'

import PageWrapper from '@/common/page-wrapper'
import {
  MAJOR_PROJECTS,
  MAJOR_PROJECT_HEADER,
  MINOR_PROJECTS,
  MINOR_PROJECT_HEADER
} from '@/constants/projects'
import useOpenClose from '@/hooks/use-open-close'
import Button from '@/ui/button'
import PageHeading from '@/ui/page-heading'

import ProjectCard from './_components/project-card'

const Projects = () => {
  const { isOpen: isMinorProjectsOpen, open: openMinorProjects } =
    useOpenClose()

  return (
    <PageWrapper>
      <PageHeading header={MAJOR_PROJECT_HEADER} />

      <div className="relative grid size-full gap-6 md:grid-cols-2">
        {MAJOR_PROJECTS?.map((project, i) => (
          <ProjectCard key={project.id} i={i} project={project} />
        ))}
      </div>

      {!isMinorProjectsOpen && (
        <Button
          icon="bx-plus"
          wrapperClassName="mx-auto mb-4 mt-16 w-fit rounded-full px-3"
          onClick={openMinorProjects}
        />
      )}

      {isMinorProjectsOpen && (
        <>
          <PageHeading className="mt-20" header={MINOR_PROJECT_HEADER} />

          <div className="relative grid size-full gap-6 md:grid-cols-2">
            {MINOR_PROJECTS?.map((project, i) => (
              <ProjectCard key={project.id} i={i} project={project} />
            ))}
          </div>
        </>
      )}
    </PageWrapper>
  )
}

export default Projects
