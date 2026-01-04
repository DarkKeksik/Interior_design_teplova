import type { Dispatch, SetStateAction } from "react"
import { useState, useCallback, useEffect, useRef } from "react"
import { AxiosInstance } from "axios"

import axiosInstance from "../api/axiosInstance"

type TUseAxios = {
  url: string
  axiosInstanceCustom?: AxiosInstance
  axiosConfigRequest?: any
  dependencies?: any
}

type TReturn<T> = {
  dataBackend: T | null
  setDataBackend: Dispatch<SetStateAction<any>>
  setIsLoading: Dispatch<SetStateAction<boolean>>
  setIsError: Dispatch<SetStateAction<boolean>>
  isLoading: boolean
  isError: boolean
}

export const useAxios = <T>({
  url,
  axiosInstanceCustom = axiosInstance,
  axiosConfigRequest,
  dependencies = [],
}: TUseAxios): TReturn<T> => {
  const [dataBackend, setDataBackend] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const isFirstRender = useRef<boolean>(true)

  const getData = useCallback(async () => {
    /** Without first rendering */
    if (!isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    try {
      const response = await axiosInstanceCustom({ ...axiosConfigRequest, url })
      const data = response.data
      setDataBackend(data)
    } catch {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }, [axiosConfigRequest, axiosInstanceCustom, url])

  useEffect(() => {
    setIsLoading(true)
    setIsError(false)
    getData()
  }, [url, getData, ...dependencies])

  return { dataBackend, setDataBackend, isLoading, setIsLoading, isError, setIsError }
}
