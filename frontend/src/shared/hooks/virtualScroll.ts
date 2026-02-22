import { useLayoutEffect } from "react"

type TUseScrollTop = {
  top?: number
  behavior?: ScrollBehavior
}

export const useScrollTop = ({ top = 0, behavior = "smooth" }: TUseScrollTop) => {
  useLayoutEffect(() => {
    window.scrollTo({
      top,
      behavior,
      left: 0,
    })
  }, [top, behavior])
}
