export const breakpoints = {
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
  wide: "1920px",
} as const

export const media = {
  mobile: `
    @media screen and (max-width: ${breakpoints.tablet})
  `,
  tablet: `
    @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.laptop})
  `,
  laptop: `
    @media screen and (min-width: ${breakpoints.laptop}) and (min-width: ${breakpoints.desktop})
  `,
  desktop: `
    @media screen and (min-width: ${breakpoints.desktop}) and (min-width: ${breakpoints.wide})
  `,
  wide: `
    @media screen and (min-width: ${breakpoints.wide})
  `,
} as const
