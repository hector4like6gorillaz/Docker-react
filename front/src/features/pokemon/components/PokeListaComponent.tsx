import { Fragment } from 'react/jsx-runtime'
import { capitalFirstLetter } from 'src/utils/words-utilities'

const PokeListaComponent = ({ dataPokelista }: { dataPokelista: any }) => {
  return (
    <Fragment>
      {dataPokelista !== null && (
        <div className="">
          {dataPokelista.results.map(
            (item: { name: string }, index: number) => {
              return (
                <div key={index}>
                  <p>{capitalFirstLetter(item.name)} </p>
                </div>
              )
            }
          )}
        </div>
      )}
    </Fragment>
  )
}

export default PokeListaComponent
