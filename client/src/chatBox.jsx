import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./chatBox.css";

function ChatBox() {
  const [input,setInput] = useState("")
  const [messages,setMessages] = useState([])
  const [loading,setLoading] = useState(false)
  const bottomRef = useRef(null)

  const API_URL = import.meta.env.VITE_API_URL

  useEffect(()=>{
    bottomRef.current?.scrollIntoView({behavior:"smooth"})
  },[messages,loading])

  async function sendMessage(){
    if(!input.trim()){
      return;
    }

    addMessage("user",input)
    setInput("")
    setLoading(true)

    try {
      const {data} = await axios.post(`${API_URL}/api/chat`,{prompt:input})
      setTimeout(()=>startTyping(data.reply),600)
    } catch {
      addMessage("ai","Error fetching AI response")
      setLoading(false)
    }
  }

  function startTyping(text){
    setLoading(false)
    addMessage("ai","")

    let i = 0;
    const interval = setInterval(()=>{
      updateLastMessage(text.slice(0,i+1));
      i++;

      if (i===text.length){
        clearInterval(interval)
      }
    },12)
  }

  function addMessage(sender,text){
    setMessages((m)=>[...m,{sender,text}])
  }

  function updateLastMessage(text){
    setMessages((m)=>{
      const updated = [...m]
      updated[updated.length - 1].text = text
      return updated
    })
  }

  return(
    <div className="chat-container">
      <div className="chat-window">
        {messages.map((m,i)=>(
          <div key={i} className={`msg ${m.sender}`}>
            {m.text}
          </div>
        ))}

        {loading && <div className="msg ai">Typing...</div>}
        <div ref={bottomRef} />
      </div>

      <div className="input-area">
        <input value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=>e.key==="Enter" && sendMessage()} placeholder="Send a message..." />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}

export default ChatBox;