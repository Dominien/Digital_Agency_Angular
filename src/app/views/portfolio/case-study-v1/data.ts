import { credits } from '@/app/common/constants'

export type ProjectInfoType = {
  title: string
  description: string
}

export const projectInfoData: ProjectInfoType[] = [
  {
    title: 'Client',
    description: credits.name + ' Webflow Agency',
  },
  {
    title: 'Headquarters',
    description: '489 Depot Road Midland',
  },
  {
    title: 'Industry',
    description: 'E-commerce',
  },
  {
    title: 'Founders',
    description: 'Emma Watson, Maria Smith',
  },
  {
    title: 'Services',
    description: 'Email marketing, Product design & Content marketing',
  },
  {
    title: 'Time spent',
    description: '2023, 4 months',
  },
]
