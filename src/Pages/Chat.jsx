import React, { useContext, useEffect, useState, useRef } from 'react'
import { BiSend } from 'react-icons/bi';
import { IoMdAttach } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import CreateAxiosInstance from '../axios/axios';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { ThreeDot } from 'react-loading-indicators';
import { OnPressKey } from '../Hooks/useOnKeyPress';
import { MyContext } from "../Context/MyContext"
import bot from "../Assets/chatbot.png"
import { IoAdd } from "react-icons/io5";
import img from "../Assets/testing.gif"

const AnimatedText = ({ text, isTyping }) => {
  const [displayedText, setDisplayedText] = useState('')
  const intervalRef = useRef(null)

  useEffect(() => {
    if (isTyping) {
      let i = 0;
      intervalRef.current = setInterval(() => {
        setDisplayedText(text.slice(0, i));
        i++;
        if (i > text.length) {
          clearInterval(intervalRef.current);
        }
      }, 20);
    } else {
      setDisplayedText(text);
    }
    return () => clearInterval(intervalRef.current);
  }, [text, isTyping]);

  return (
    <h1 className={`py-3 px-5 text-lg max-w-[38rem] rounded-3xl text-primary`}>
      {displayedText}
    </h1>
  );
};

const Chat = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const axiosInstance = CreateAxiosInstance();
  const [siderBar, setSiderBar] = useState(localStorage.getItem('sidebar'))
  const [message, setMessage] = useState([])
  const [userMessage, setUserMessage] = useState("")
  const [input, setInput] = useState(null)
  const { login } = useContext(MyContext)
  const [theme, setTheme] = useState("theme-focus-and-clarity")
  const [history, setHistory] = useState([])
  const [check, setCheck] = useState(false)

  useEffect(() => {
    localStorage.setItem("sidebar", siderBar)
  }, [siderBar])

  const handleMessage = (e) => {
    setUserMessage(e.target.value);
  };

  const sendMessage = () => {
    if (userMessage) {
      const newMessage = userMessage;
      setInput(userMessage)
      setMessage(prevMessages => [...prevMessages, { user: newMessage, response: "", isTyping: false }])
      setUserMessage("");
    }
  };

  OnPressKey(sendMessage, "Enter")

  useEffect(() => {
    if (input) {
      async function Message() {
        try {
          const res = await axiosInstance.post("chat/start_chat/", { message: input, session_id: id });
          const botResponse = res.data.message;
          setMessage(prevMessages => {
            const updatedMessages = [...prevMessages];
            updatedMessages[updatedMessages.length - 1].response = botResponse;
            updatedMessages[updatedMessages.length - 1].isTyping = true;
            return updatedMessages;
          });
          setCheck(!check)
        } catch (error) {
          console.log(error);
        }
      }
      Message();
    }
  }, [input]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axiosInstance.get("chat/get_chat_session/")
        setHistory(res.data)
      } catch (error) {
        console.log(error);
      }
    } getData()
  }, [check, setCheck])

  useEffect(() => {
    async function getChat() {
      try {
        const response = await axiosInstance.get(`chat/get_chat/?session_id=${id}`)
        const processedMessages = response.data.map(item => ({
          user: item.user_message,
          response: item.bot_response,
          isTyping: false
        }));
        setMessage(processedMessages)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    } getChat()
  }, [id])

  console.log(message)


  const newSession = async () => {
    const res = await axiosInstance.post("chat/start-session/", {})
    navigate(`/chat/${res.data.session_id}`)
  }

  return (
    <div className={`flex h-screen ${theme}`}>
      <div className={`transition-all duration-300 ${siderBar ? 'w-60' : 'w-16'} hidden  h-full md:flex md:flex-col`}>
        <div className={`p-4 cursor-pointer flex ${siderBar ? "flex-row" : "flex-col"} justify-between items-center`}>
          <RxHamburgerMenu onClick={() => setSiderBar(!siderBar)} className='size-6' />
          {siderBar ? (<button onClick={newSession}>New Chat</button>) : (<IoAdd onClick={newSession} className='mt-5 size-8' />)}
        </div>
        <div className={`mt-10 flex-1 overflow-y-auto`}>
          <div className={`flex flex-col gap-1`}>
            {siderBar && [...history].reverse().map((d) => (
              <NavLink key={d.session_id} to={`/chat/${d.session_id}`} className={({ isActive }) => isActive ? "  mx-3  p-3 rounded-lg active duration-500 text-theme" : "hover:bg-hover mx-3 p-3 rounded-lg "}>{d.summary}</NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className={`flex-1 flex flex-col bg-theme`}>
        <div className='h-20 flex flex-row justify-end px-10 items-center shadow-md rounded-b-xl'>
          <button onClick={() => { setTheme("theme-comfort-and-warmth") }} className='border-2 mx-5 font-semibold p-2 rounded-lg text-theme'>Change Theme</button>
          {
            login ? (
              <h1 className='bg-white size-10 rounded-full'></h1>
            ) : (
              <button onClick={() => navigate("/login")} className='border-2 text-theme'>Login</button>
            )
          }
        </div>
        <div className='flex-1 overflow-y-auto'>
          <div className='flex items-center flex-col gap-y-2 p-4'>
            {message.length > 0 ?
              message.map((d, i) => (
                <div key={i} className='lg:w-7/12'>
                  <div className='flex justify-end my-3'>
                    <h1 className='card text-lg py-3 px-5 max-w-[30rem] rounded-3xl text-theme'>{d.user}</h1>
                  </div>
                  {d.response === "" ? (
                    <div className='flex justify-start flex-row items-start'>
                      <img src={bot} className='size-12' alt="" />
                      <div className='lg:ms-4'><ThreeDot variant="pulsate" color="#484848" size="medium" text="" textColor="" /></div>
                    </div>
                  ) : (
                    <div className='flex text-theme justify-start flex-row items-start'>
                      <img src={bot} className='size-12' alt="" />
                      <div className='flex flex-col items-start'>
                        <AnimatedText text={d.response} isTyping={d.isTyping} />
                      </div>
                    </div>
                  )}
                </div>
              )) : (
                <div className='flex justify-center items-center flex-col '>
                  <img src={img} alt="" className='size-40' />
                  <h1 className='text-2xl mt-5'>Hello <span className='font-bold'>Dhruv</span>! how can i help you today </h1>
                </div>
              )
            }
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-row gap-x-2 p-4">
          <IoMdAttach className="text-3xl text-theme cursor-pointer" />
          <input
            type="text"
            className={`focus:outline-none placeholder:text-gray-600 lg:w-7/12 w-4/5 px-4 py-4 rounded-full ${theme} input-container`}
            placeholder="Type Message"
            onChange={handleMessage}
            value={userMessage}
            style={{
              backgroundColor: 'var(--input-bg-color)',
              color: 'black'
            }}
          />
          <BiSend onClick={sendMessage} className="text-3xl text-theme cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Chat;