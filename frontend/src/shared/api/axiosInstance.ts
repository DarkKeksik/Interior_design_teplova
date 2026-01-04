import axios from "axios"

import { env } from "@shared/config"

const axiosInstance = axios.create({ baseURL: env.API_URL })

export default axiosInstance
