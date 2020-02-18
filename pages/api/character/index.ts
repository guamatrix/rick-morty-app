import { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosResponse } from 'axios'

import { API } from '../../../commons'

export type ListInfo = {
  count: number,
  pages: number,
  next: string,
  prev: string
}

export type Character = {
  id: string,
  name: string,
  status: string,
  gender: string,
  species: string,
  image: string,
}


export interface CharactersList {
  info: ListInfo
  results: Character[]
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query: { name }} = req
  console.log(name)
  try {
    const filter = name ? `?name=${name}` : ''
    const { data } = await axios.get<AxiosResponse<CharactersList>>(`${API.R_M.characters}${filter}`)
    res.status(200).send({
      ...data
    })
  } catch (error) {
    res.status(500).send(error)
  }
}