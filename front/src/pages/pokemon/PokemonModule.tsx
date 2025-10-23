import { capitalFirstLetter } from 'src/utils/words-utilities'
import reactLogo from 'src/assets/react.svg'
import viteLogo from 'src/assets/vite.svg'
import { Helmet } from 'react-helmet-async'
import usePokemons from 'src/features/pokemon/hooks/usePokemons'
import PokeListaComponent from 'src/features/pokemon/components/PokeListaComponent'

const PokemonModule = () => {
  const { value, data, state, handleClickButton, handleGetPokeList } =
    usePokemons()

  return (
    <div className="flex flex-col items-center p-[2rem]  bg-primary-300  tablet:bg-amber-200 desktop:bg-warning-green ultrawide:bg-warning-orange">
      <Helmet>
        <title>Pokeapi</title>
      </Helmet>
      <div className="w-[50%] border-2  border-amber-300 flex gap-2 items-center justify-between px-[2rem]">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-[4rem] h-[4rem]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-[4rem] h-[4rem]" alt="React logo" />
        </a>

        {data?.sprites.animated !== null && (
          <a href="https://pokeapi.co/" target="_blank">
            {data?.sprites.front_default && (
              <img
                src={data?.sprites.front_default}
                className="w-[10rem] h-[10rem] "
                alt="React logo"
              />
            )}
          </a>
        )}
      </div>
      <h1 className="text-3xl mt-2">
        Vite + React, {capitalFirstLetter(data?.name ?? '')}{' '}
      </h1>
      <div className="flex p-7 gap-2 items-center justify-center">
        <button
          onClick={handleClickButton}
          disabled={state.loading}
          style={{ all: 'revert' }}
        >
          count is {state.count},{value}
        </button>
        <button
          onClick={handleGetPokeList}
          disabled={state.loading}
          style={{ all: 'revert' }}
        >
          obtener pokelista kanto
        </button>
      </div>
      <PokeListaComponent dataPokelista={state.dataPokelista} />
      <p className="read-the-docs">
        Click on the Vite, React and pokemon logos to learn more
      </p>

    </div>
  )
}

export default PokemonModule
