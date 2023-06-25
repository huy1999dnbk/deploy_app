"use client"
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
  const [user, setUser] = useState('')

  const getName = async () => {
    const data = await axios.get('http://localhost:8080/user',{
    })
    setUser(data.data.data.name)
  }

  useEffect(() => {
    getName()
  }, [])
  

  return (
    <div>{user}</div>
  )
}
