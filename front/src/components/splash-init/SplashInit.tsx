import { Outlet } from 'react-router-dom'

const SplashInit = () => {
  /*
  const { splashDone, isFetching } = useSplash()
  
  if (!splashDone || isFetching) {
    return <SplashModule />
  }
  */

  return <Outlet />
}

export default SplashInit
