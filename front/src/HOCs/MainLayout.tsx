import type React from 'react'
import LeftMenu from 'src/components/navbar/LeftMenu'
import useCommonFunctions from 'src/hooks/useCommonFunctions'
import TopStatusBar from 'src/components/TopStatusBar'

import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const MainLayout = ({
  showNavBar = true,
  ref,
}: {
  children?: React.ReactNode
  showNavBar?: boolean
  ref?: React.RefObject<HTMLDivElement | null>
}) => {
  const { isMovile } = useCommonFunctions()
  const handleFlex = () => {
    let className = 'flex-row'
    if (isMovile) className = 'flex-col'
    return className
  }

  return (
    <>
      <Helmet
        titleTemplate="%s | Template" // %s será reemplazado por el título de la página hija
        defaultTitle="Template"
      >
        <meta
          name="description"
          content="Mi aplicación genial hecha con React."
        />
        <link rel="icon" type="image/png" href="/6.png" />
      </Helmet>
      <div className={`flex ${handleFlex()} h-full relative`}>
        {isMovile && <TopStatusBar />}
        {showNavBar && <LeftMenu isMovile={isMovile} />}
        <div ref={ref} className="w-full h-screen overflow-y-auto relative">
          {!isMovile && <TopStatusBar />}
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainLayout
