import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { MAJOR_PROJECTS, MINOR_PROJECTS } from '@/constants/projects'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getProjectDetails = (projectId?: string) => {
  if (!projectId) return

  const allProjects = MAJOR_PROJECTS.concat(MINOR_PROJECTS)

  return allProjects.find((project) => project.id === projectId)
}
