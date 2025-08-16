import { Helmet } from 'react-helmet-async'
import { tabTitles } from 'src/router/mapPath'

const CarsModule = () => {
  return (
    <div>
      <Helmet>
        <title>{tabTitles.cars} </title>
      </Helmet>
      CarsModule
    </div>
  )
}

export default CarsModule
