import { useRef,  memo, useContext } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { debouce } from '../../commons/utils'
import { Context } from '../Provider'
import { API } from '../../commons'
import { CharactersList } from '../../pages/api/character'


const StyledInput = styled.input`
  height: 30px;
  width: 50%;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #CCCCCC;
  
  &:focus {
    outline-color: #CCCCCC
  }
`

const Search = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  const { setCharacterState } = useContext(Context)
  
  const onSearch = debouce(async () => {
    if (searchRef.current) {      
      try {
        const { value } = searchRef.current
        const url = `${API.BASE.characters}?name=${value}`
        const { data } =  await axios.get<CharactersList>(url)
        setCharacterState(data)
      } catch (error) {
        console.log(error)
      }
    }
  }, 500, false)
  return (
    <StyledInput ref={searchRef} onKeyUp={onSearch} placeholder='Search by name' />
  )
}

export default memo(Search)
