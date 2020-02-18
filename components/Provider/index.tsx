import { createContext, PropsWithChildren, useState, memo } from 'react'
import { ListInfo, Character, CharactersList } from '../../pages/api/character'
import axios from 'axios'
import { API } from '../../commons'

interface CharacterContext  {
  paginationState: ListInfo
  characterState: Character[]
  setCharacterState: (data: CharactersList) => void
  goToPage: (url: string) => void
}

type ProviderState = Pick<CharacterContext, 'paginationState' | 'characterState'>

const initialState: CharacterContext = {
  paginationState : {
    count: 0,
    pages: 0,
    next: '',
    prev: ''
  },
  characterState : [],
  setCharacterState: () => {},
  goToPage: () => {}
}
export const Context = createContext<CharacterContext>(initialState)

const ProviderComponent = (props: PropsWithChildren<{}>) => {
  const { children } = props
  const [state, setState] = useState<ProviderState>({ paginationState: initialState.paginationState, characterState: initialState.characterState })
  
  const setCharacterState = ({ info, results }: CharactersList) => {
    setState({ ...state, paginationState: info, characterState: results  })
  }

  const goToPage = async (url: string) => {
    try {
      const { data } = await axios.get(url)      
      setCharacterState(data)
    } catch (error) {
      console.log(error)
    }

  }

  const { characterState, paginationState } = state
  return (
    <Context.Provider value={{
      paginationState,
      characterState,
      setCharacterState,
      goToPage
    }}>
      {children}
    </Context.Provider>
  )
}

export default memo(ProviderComponent)