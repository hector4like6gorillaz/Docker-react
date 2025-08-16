import { Helmet } from 'react-helmet-async'
import { tabTitles } from 'src/router/mapPath'

const CondominiumsModule = () => {
  return (
    <div>
      <Helmet>
        <title>{tabTitles.condominiums} </title>
      </Helmet>
      CondominiumsModule
    </div>
  )
}

export default CondominiumsModule
