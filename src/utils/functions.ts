import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { MAJOR_PROJECTS, MINOR_PROJECTS } from '@/constants/projects'
import { BOXICONS } from '@/lib/box-icons'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getProjectDetails = (projectId?: string) => {
  if (!projectId) return

  const allProjects = MAJOR_PROJECTS.concat(MINOR_PROJECTS)

  return allProjects.find((project) => project.id === projectId)
}

export const getPreviousAndNextProject = (projectId?: string) => {
  if (!projectId) return

  const allProjects = MAJOR_PROJECTS.concat(MINOR_PROJECTS)
  const allProjectsLength = allProjects.length

  const currentProjectIndex = allProjects.findIndex(
    (project) => project.id === projectId
  )

  if (currentProjectIndex === -1) {
    return null
  }

  const prevIndex =
    currentProjectIndex === 0 ? allProjectsLength - 1 : currentProjectIndex - 1

  const nextIndex =
    currentProjectIndex + 1 === allProjectsLength ? 0 : currentProjectIndex + 1

  return {
    prev: {
      id: allProjects[prevIndex].id,
      name: allProjects[prevIndex].title
    },
    next: {
      id: allProjects[nextIndex].id,
      name: allProjects[nextIndex].title
    }
  }
}

export const getBoxIcon = (id: string) => {
  const boxIconId = Object.entries(BOXICONS).find(
    (entry) => entry[0] === id
  )?.[0]

  if (!boxIconId) {
    return 'bx ' + BOXICONS.default
  }

  return 'bx ' + BOXICONS[boxIconId as keyof typeof BOXICONS]
}
