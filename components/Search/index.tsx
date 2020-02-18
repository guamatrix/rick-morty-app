import { useRef,  memo, useContext } from 'react'
import axios from 'axios'

import { debouce } from '../../commons/utils'
import { Context } from '../Provider'
import { API } from '../../commons'
import { CharactersList } from '../../pages/api/character'

const Search = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  const { setCharacterState } = useContext(Context)
  
  const onSearch = debouce(async () => {
    if (searchRef.current) {      
      try {
        const { value } =searchRef.current
        const url = `${API.BASE.characters}?name=${value}`
        const { data } =  await axios.get<CharactersList>(url)
        setCharacterState(data)
      } catch (error) {
        console.log(error)
      }
    }
  }, 500, false)
  return (
    <input ref={searchRef} onKeyUp={onSearch} />
  )
}

export default memo(Search)
