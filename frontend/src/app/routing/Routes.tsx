import { createBrowserRouter } from "react-router-dom"

import { PageWithLayouts } from "../layouts"

import { MainPage, VideoBlogPage } from "@pages/index"

import { linksPages } from "@shared/config"

const router = createBrowserRouter([
  {
    path: linksPages.page_main.link,
    element: (
      <PageWithLayouts>
        <MainPage />
      </PageWithLayouts>
    ),
  },
  {
    path: linksPages.page_vblog.link,
    element: (
      <PageWithLayouts>
        <VideoBlogPage />
      </PageWithLayouts>
    ),
  },
  {
    path: "*",
    element: <div>404</div>,
  },
])

export default router
