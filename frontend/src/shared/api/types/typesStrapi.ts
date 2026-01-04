export type TImage = {
  id: number
  documentId: string
  formats: {
    large: {
      url: string
    }
    medium: {
      url: string
    }
    small: {
      url: string
    }
    thumbnail: {
      url: string
    }
  }
}

export type TProjectInfo = {
  id: number
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  locale: string
  costProject: string
  totalArea: number
  implementationPeriod: string
  slug: string
  completionYear: string
  images?: TImage[]
}

export type TProjectsInfo = {
  data: TProjectInfo[]
}
