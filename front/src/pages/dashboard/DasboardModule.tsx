import { Helmet } from 'react-helmet-async'
import { tabTitles } from 'src/router/mapPath'

const DasboardModule = () => {
  return (
    <div>
      <Helmet>
        <title>{tabTitles.dashboard} </title>
      </Helmet>
      <div className="h-[500rem]">Dashboard</div>
    </div>
  )
}

export default DasboardModule
