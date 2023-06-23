"use client"
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
  const [name, setName] = useState('')

  const getName = async () => {
    const data = await axios.get('http://localhost:8080/name',{
    })
    setName(data.data.name)
  }

  useEffect(() => {
    getName()
  }, [])
  

  return (
    <div>{name}</div>
  )
}
