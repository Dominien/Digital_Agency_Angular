import type { MemberType } from './types'

const team1 = 'assets/images/team/01.jpg'
const team2 = 'assets/images/team/02.jpg'
const team3 = 'assets/images/team/03.jpg'
const team4 = 'assets/images/team/04.jpg'
const team5 = 'assets/images/team/05.jpg'
const team6 = 'assets/images/team/06.jpg'
const team7 = 'assets/images/team/07.jpg'
const team8 = 'assets/images/team/08.jpg'

export const teamMembers: MemberType[] = [
  {
    socialMedia: [
      {
        icon: 'fa-instagram',
        variant: 'instagram-gradient',
      },
    ],
    user: {
      firstName: 'Emma',
      lastName: 'Watson',
      avatar: team1,
      role: 'Founder',
    },
  },
  {
    socialMedia: [
      {
        icon: 'fa-facebook-f',
        variant: 'facebook',
      },
    ],
    user: {
      firstName: 'Allen',
      lastName: 'Smith',
      avatar: team2,
      role: 'UI/UX designer',
    },
  },
  {
    socialMedia: [
      {
        icon: 'fa-twitter',
        variant: 'twitter',
      },
      {
        icon: 'fa-linkedin-in',
        variant: 'linkedin',
      },
    ],
    user: {
      firstName: 'Jacqueline',
      lastName: 'Miller',
      avatar: team3,
      role: 'Human Resource',
    },
  },
  {
    socialMedia: [
      {
        icon: 'fa-facebook-f',
        variant: 'facebook',
      },
      {
        icon: 'fa-instagram',
        variant: 'instagram-gradient',
      },
    ],
    user: {
      firstName: 'Louis',
      lastName: 'Ferguson',
      avatar: team4,
      role: 'Web Developer',
    },
  },
  {
    socialMedia: [
      {
        icon: 'fa-instagram',
        variant: 'instagram-gradient',
      },
    ],
    user: {
      firstName: 'Frances',
      lastName: 'Guerrero',
      avatar: team5,
      role: 'Software Developer',
    },
  },
  {
    socialMedia: [
      {
        icon: 'fa-facebook-f',
        variant: 'facebook',
      },
      {
        icon: 'fa-instagram',
        variant: 'instagram-gradient',
      },
    ],
    user: {
      firstName: 'Lori',
      lastName: 'Stevens',
      avatar: team6,
      role: 'Graphic designer',
    },
  },
  {
    socialMedia: [
      {
        icon: 'fa-twitter',
        variant: 'twitter',
      },
    ],
    user: {
      firstName: 'Samuel',
      lastName: 'Bishop',
      avatar: team7,
      role: 'Product designer',
    },
  },
  {
    socialMedia: [
      {
        icon: 'fa-instagram',
        variant: 'instagram-gradient',
      },
      {
        icon: 'fa-twitter',
        variant: 'twitter',
      },
    ],
    user: {
      firstName: 'Amanda',
      lastName: 'Reed',
      avatar: team8,
      role: 'Content writer',
    },
  },
]
