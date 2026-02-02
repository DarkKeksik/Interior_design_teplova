export const breakpoints = {
  mobile: 375,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
} as const

export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile}px)`,
  tablet: `@media (max-width: ${breakpoints.tablet}px)`,
  desktop: `@media (max-width: ${breakpoints.desktop}px)`,
  wide: `@media (min-width: ${breakpoints.wide}px)`,
} as const

export const mediaMin = {
  mobile: `@media (min-width: ${breakpoints.mobile + 1}px)`,
  tablet: `@media (min-width: ${breakpoints.tablet + 1}px)`,
  desktop: `@media (min-width: ${breakpoints.desktop + 1}px)`,
} as const
