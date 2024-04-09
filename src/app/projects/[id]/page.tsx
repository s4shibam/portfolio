'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Fragment, useEffect, useState } from 'react'

import PageWrapper from '@/common/page-wrapper'
import { TProject } from '@/constants/projects'
import { getRandomGradient } from '@/lib/card-hover-gradients'
import AnimatedBorderCard from '@/ui/animated-border-card'
import Card from '@/ui/card'
import IconList from '@/ui/icon-list'
import PageHeading from '@/ui/page-heading'
import TagList from '@/ui/tag-list'
import { getPreviousAndNextProject, getProjectDetails } from '@/utils/functions'

const ProjectDetailsById = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [loading, setLoading] = useState(true)
  const [project, setProject] = useState<TProject | null>()
  const [prevProject, setPrevProject] = useState<{ id: string; name: string }>()
  const [nextProject, setNextProject] = useState<{ id: string; name: string }>()

  useEffect(() => {
    const projectId = pathname?.split('/')?.pop()
    const projectDetails = getProjectDetails(projectId)
    if (projectDetails) {
      setProject(projectDetails)
      const response = getPreviousAndNextProject(projectId)
      setPrevProject(response?.prev)
      setNextProject(response?.next)
    }
    setLoading(false)
  }, [router, pathname])

  if (!project && !loading) {
    router.replace('/projects')
    return null
  }

  return (
    <PageWrapper>
      <div className="flex items-center justify-between gap-5">
        <Link
          className="grid place-items-center rounded-lg bg-bg-lighter transition-opacity hover:opacity-75 dark:bg-bg-dark"
          href={'/projects/' + prevProject?.id}
        >
          <i className="bx bx-chevron-left bx-lg" />
        </Link>
        <PageHeading
          className="mb-0 uppercase md:mb-0"
          dot={false}
          heading={project?.title}
        />
        <Link
          className="grid place-items-center rounded-lg bg-bg-lighter transition-opacity hover:opacity-75 dark:bg-bg-dark"
          href={'/projects/' + nextProject?.id}
        >
          <i className="bx bx-chevron-right bx-lg" />
        </Link>
      </div>

      {project && (
        <AnimatedBorderCard>
          <Image
            alt={project?.title}
            className="object-cover"
            src={project?.image}
            style={{ borderColor: project?.color }}
          />
        </AnimatedBorderCard>
      )}

      <Card hoverGradient={getRandomGradient()} i={1} title="Summary">
        <div className="indent-3">{project?.summary}</div>
      </Card>

      <Card hoverGradient={getRandomGradient()} i={2} title="Project Links">
        <div className="grid grid-cols-[auto_1fr] items-center gap-2">
          {project?.links.map((projectLink, i) => (
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

      {project && (
        <Card hoverGradient={getRandomGradient()} i={3} title="Features">
          <IconList
            animation
            boxIcon="bxs-magic-wand"
            data={project?.features}
          />
        </Card>
      )}

      {project && (
        <Card hoverGradient={getRandomGradient()} i={4} title="Tech Stack">
          <TagList animation data={project?.techs} />
        </Card>
      )}
    </PageWrapper>
  )
}

export default ProjectDetailsById
