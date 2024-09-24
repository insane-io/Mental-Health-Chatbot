import React, { useState, useEffect, useRef, useContext } from 'react';
import { BiSend } from 'react-icons/bi';
// import { OnPressKey } from "../Hooks/useOnKeyPress";
import { IoMdAttach } from "react-icons/io";
import loader from "../Assets/loader.svg";
// import Typewriter from 'typewriter-effect';
import { FiSidebar } from "react-icons/fi";
import axios from 'axios';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import gif from "../Assets/bot.gif"
import botImage from "../Assets/image-removebg-preview.png"

const Message = ({ text }) => {
  return (
    <div className='flex items-center p-4 bg-[#0A9D50] text-white font-semibold w-fit max-w-96 h-auto rounded-3xl max-w-7/12 px-6 py-2'>
      <p>{text}</p>
    </div>
  );
};

const Response = ({ text, isfetched }) => {
  const [isTypingDone, setIsTypingDone] = useState(false);
  const chathistory = true

  useEffect(() => {
    setIsTypingDone(false);
  }, [text]);

  return (
    <>
      {text === "" ? (
        <div className='flex items-center gap-3'>
          <img src={botImage} className='h-20 w-20 rounded-full' alt="" />
          <img src={loader} alt="" className='h-16 w-16' />
        </div>
      ) : (
        <>
          <img src={botImage} className='h-20 w-20 rounded-full' alt="" />
          <div className='flex ms-5 items-center p-4 bg-[#D9D9D9] text-black font-semibold max-w-96 w-fit h-auto rounded-3xl'>
            {
              chathistory ? (
                <h1>{text}</h1>
              ) : (
                <>
                  {/* <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .changeDelay(10)
                        .changeCursor(' ')
                        .typeString(text.replace(/<\/?[^>]+(>|$)/g, ""))
                        .pauseFor(10)
                        .callFunction(() => setIsTypingDone(true))
                        .start();
                    }}
                  /> */}
                </>
              )
            }
          </div>
        </>
      )}
    </>
  );
};

const Chat = () => {

//   const {setHistory} = useContext(MyContext)
  const [message, setMessage] = useState([]);
  const [text, setText] = useState('');
  const [show, setShow] = useState(true)
  const [history, sethistory] = useState([])
  const [data, setData] = useState()
  const [response, setResponse] = useState(data);
  const [check, setCheck] = useState(false)
  const [isfetched, setisfetched] = useState()

  const navigate = useNavigate()

  const chatContainerRef = useRef(null);
  const params = useParams()
  const { id } = params
  useEffect(() => {
    setResponse(data);
  }, [data]);

  const sendMessage = async () => {
    if (text === "") return;
    try {
      const res = await axios.post('http://127.0.0.1:8000/chat/start_chat/', { message: text, session_id: id },
        {
          headers: {
            Authorization: localStorage.getItem('access_token')
              ? 'Bearer ' + localStorage.getItem('access_token')
              : null,
            'Content-Type': 'application/json',
            accept: 'application/json',
          }
        }
      );
      const updated = res.data.message;
      setData(updated);
      setMessage([...message, { input: text, output: updated }]);
      setText('');
    //   setHistory(false);
      setCheck(!check)
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleChange = (e) => {
    setText(e.target.value)
    // setHistory(false)
  }

  useEffect(() => {
    async function getChats() {
      try {
        const res = await axios.get('http://127.0.0.1:8000/chat/get_chat_session/', {
          headers: {
            Authorization: localStorage.getItem('access_token')
              ? 'Bearer ' + localStorage.getItem('access_token')
              : null,
            'Content-Type': 'application/json',
            accept: 'application/json',
          },
        });

        const response = await axios.get(`http://127.0.0.1:8000/chat/get_chat/?session_id=${id}`, {
          headers: {
            Authorization: localStorage.getItem('access_token')
              ? 'Bearer ' + localStorage.getItem('access_token')
              : null,
            'Content-Type': 'application/json',
            accept: 'application/json',
          },
        });

        const chat = response.data;
        sethistory(res.data);
        const processedMessages = chat.map(item => ({
          input: item.user_message,
          output: item.bot_response,
        }));

        setMessage(processedMessages);

      } catch (error) {
        console.error(error);
      }
    }

    getChats();
  }, [check])

  const chat = async() => {
      const res = await axios.post('http://127.0.0.1:8000/chat/start-session/',{},{
        headers: {
          Authorization: localStorage.getItem('access_token')
            ? 'Bearer ' + localStorage.getItem('access_token')
            : null,
          'Content-Type': 'application/json',
          accept: 'application/json',
        }
      })
      navigate(`/chat/${res.data.session_id}`)
    //   setHistory(false)
  }

  const handleChat = () => {
    // setHistory(true)
  }


//   OnPressKey(sendMessage, "Enter");

  return (
    <>
      <div className='flex flex-row'>
        <button className='absolute m-3 hover:bg-[#0A9D50] hover:text-white p-1 rounded-lg' onClick={() => { setShow(!show) }}><FiSidebar className='text-3xl' /></button>
        <div className={`w-1/6 bg-[#E3FEF0] overflow-y-auto rounded-lg h-[38.9rem] ${show ? " " : "hidden"} px-5`}>
        <div className='flex justify-end w-full mt-3'><button onClick={chat} className='w-4/5 p-1 hover:bg-green-400 hover:border-green-400 hover:text-white rounded-lg border-2 border-black'>New Chat</button></div>
          <div className='transition-width duration-500  flex flex-col mt-10 text-lg gap-1'>
            {[...history].reverse().map((d, i) => (
              <NavLink to={`/chat/${d.session_id}`} onClick={handleChat} className={({ isActive }) => isActive ? `bg-[#3dd687] px-3 py-2 rounded-lg cursor-pointer` : "hover:bg-green-300 px-3 py-2 rounded-lg cursor-pointer"} key={i}>{d.summary === null ? (<img src={loader} alt="" className='h-8 w-10' />) : (<><div>{d.summary}</div></>)}</NavLink> 
            ))}
          </div>
        </div>
        <div className={`${show ? "w-5/6" : "w-full"}`}>
          <div className='w-full'>
            <div ref={chatContainerRef} className='flex h-[33rem] py-5 px-80 overflow-y-auto flex-col'>
              {
                message.length === 0 && (
                  <div className='flex justify-start flex-col gap-y-5 items-center h-[33rem]'>
                    <img src={gif} alt="" className='h-60' />
                    <div className='flex justify-evenly w-full'>
                      <h1 className='text-2xl text-[#3dd687] font-semibold'>How Can I Help You!</h1>
                    </div>
                  </div>
                )
              }
              {message.map((d, i) => (
                <div key={i} className=''>
                  <div className='flex justify-end my-4'><Message text={d.input} /></div>
                  <div className='flex justify-start my-4'><Response text={d.output} isfetched={isfetched} /></div>
                </div>
              ))}
            </div>
            <div className='w-full flex justify-center items-center flex-row gap-x-2'>
              <IoMdAttach className='text-3xl text-gray-700 hover:text-black cursor-pointer' />
              <input type="text" onChange={(e)=>handleChange(e)} className={`focus:outline-none w-5/12 px-4  py-3 rounded-full bg-[#FEE9D9]`} value={text} placeholder='Type Message' />
              <BiSend className='text-3xl text-gray-700 hover:text-black cursor-pointer' onClick={sendMessage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
