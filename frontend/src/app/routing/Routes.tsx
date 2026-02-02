import { createBrowserRouter, Outlet } from "react-router-dom"

import { PageWithLayouts } from "../layouts"

import { MainPage, VideoBlogPage, ProjectsPage, ProjectPage } from "@pages/index"

import { linksPages } from "@shared/config"
import { NotFound } from "@shared/ui"

const router = createBrowserRouter([
  {
    path: linksPages.page_main.link,
    element: (
      <PageWithLayouts>
        <MainPage />
        <Outlet />
      </PageWithLayouts>
    ),
  },
  {
    path: linksPages.page_projects.link,
    element: (
      <PageWithLayouts>
        <Outlet />
      </PageWithLayouts>
    ),
    children: [
      {
        index: true,
        element: <ProjectsPage />,
      },
      {
        path: ":slug",
        element: <ProjectPage />,
      },
    ],
  },
  {
    path: linksPages.page_vblog.link,
    element: (
      <PageWithLayouts>
        <VideoBlogPage />
      </PageWithLayouts>
    ),
    children: [
      {
        index: true,
        element: <VideoBlogPage />,
      },
      {
        path: ":slug",
        element: <VideoBlogPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
])

export default router
