import axios from "axios"
import { IWordSpelling } from "../interfaces/wordInterfaces"

const api = axios.create({
  baseURL: "https://backend-transcripton.herokuapp.com/custom-word",
})

export const getAllWords = async () => {
  const words = await api.get('/get-all')

  return words
}

export const createWord = async(from: string, to: string) => {
  await api.post('/create', {from, to})
}

export const deleteWord = async(id: number) => {
  await api.delete(`/delete-one/${id}`)
}

export const getOneWord = async(id: number) => {
  const word = await api.get(`/get-one/${id}`)
  
  return word
}

export const updateWord = async(id: number, from: string, to: string) => {
  await api.put(`/update-one/${id}`, {from, to})
}
