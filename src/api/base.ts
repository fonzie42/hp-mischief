import { axiosInstance } from "./axios-instance"
import { ParseDataToCharacter } from "../api/parser/character"
import { Character } from "@/types/character"
import { notNullable } from "@/types/type-guards"

const apiToCharacters = ({ data }: {data: unknown[]}) => {
    const parsedCharacters = data.map((item: unknown) => ParseDataToCharacter(item))
    const characters = parsedCharacters.filter(notNullable)
    return characters
}
  
export const getAllCharacters: () => Promise<Character[]> = async () => {
  return axiosInstance.get('/characters').then(apiToCharacters)
}

export const getAllStudents = async () => {
  return axiosInstance.get('/characters/students').then(apiToCharacters)
}

export const getAllStaff = async () => {
  return axiosInstance.get('/characters/staff').then(apiToCharacters)
}

export const getCharacterById = async (id: string) => {
  return axiosInstance.get(`/character/${id}`).then(({data}) => {
    const [rawCharacter] = data
    const parse = ParseDataToCharacter(rawCharacter)
    return parse
  })
}
