import React, { useEffect } from 'react'
import CreateAxiosInstance  from '../axios/axios'
import { useNavigate } from 'react-router-dom'
// import HandleError from './Error/Error'

const Home = () => {
  const navigate = useNavigate()
  const axiosInstance = CreateAxiosInstance();

  const NewChat = async () => {
    try {
      const res = await axiosInstance.post('chat/start-session/', {})
      navigate(`/chat/${res.data.session_id}`)
    } catch (error) {
        // console.log(HandleError(error))
    }
  }
  return (
    <div>
      <button onClick={NewChat} className='p-3 border-2'>New Chat</button>
    </div>
  )
}

export default Home
