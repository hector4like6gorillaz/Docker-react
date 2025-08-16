import { Spin } from 'antd'
import { Helmet } from 'react-helmet-async'
import { PiCoffee } from 'react-icons/pi'
import useCommonFunctions from 'src/hooks/useCommonFunctions'
import { mapRoutes, tabTitles } from 'src/router/mapPath'

const CloseSessionModule = () => {
  const {} = useCommonFunctions({
    redirect: true,
    path: mapRoutes.login,
  })

  return (
    <div className="fixed w-full h-full bg-gradient-primary z-50 flex flex-col items-center justify-center">
      <Helmet>
        <title>{tabTitles.closedSession} </title>
      </Helmet>
      <PiCoffee className="w-[70%] tablet:w-[60%] desktop:w-[20rem] ultrawide:w-[20rem] h-auto" />

      <Spin spinning />
      <h1 className="text-xl tablet:text-2xl desktop:text-[2rem]">
        Cerrando sesion
      </h1>
      <p>Ve por un cafe...</p>
    </div>
  )
}

export default CloseSessionModule
