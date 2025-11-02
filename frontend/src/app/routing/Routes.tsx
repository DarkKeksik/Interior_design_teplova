import { createBrowserRouter } from "react-router-dom"

import { PageWithLayouts } from "../layouts"

import { MainPage } from "@pages/index"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageWithLayouts>
        <MainPage />
      </PageWithLayouts>
    ),
  },
  {
    path: "*",
    element: <div>404</div>,
  },
])

export default router
