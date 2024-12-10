const stories1 = 'assets/images/stories/01.jpg'
const stories3 = 'assets/images/stories/03.jpg'
const client2 = 'assets/images/client/02.svg'
const client3 = 'assets/images/client/03.svg'

export type StoryType = {
  title: string
  image: string
  companyLogo: string
}

export const stories: StoryType[] = [
  {
    title: 'Stories of Trust, Transformation, and Triumph',
    image: stories1,
    companyLogo: client2,
  },
  {
    title: 'Empathy in action touching lives through customer experiences',
    image: stories3,
    companyLogo: client3,
  },
]
