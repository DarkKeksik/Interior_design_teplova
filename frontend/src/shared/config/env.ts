const getEnv = (key: string): string => {
  const value = import.meta.env[key]
  if (!value) {
    throw new Error(`Missing env variable: ${key}`)
  }
  return value
}

export const env = {
  BACKEND_URL: import.meta.env.PROD
    ? getEnv("VITE_URL_PRODUCTION")
    : getEnv("VITE_URL_DEVELOPMENT"),

  API_URL: import.meta.env.PROD
    ? `${getEnv("VITE_URL_PRODUCTION")}${getEnv("VITE_API_URL")}`
    : `${getEnv("VITE_URL_DEVELOPMENT")}${getEnv("VITE_API_URL")}`,
} as const
