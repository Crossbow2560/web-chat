import React from 'react'
import ReactDOM from 'react-dom/client'
import Message from './Message.jsx'

ReactDOM.createRoot(document.getElementById('chat-area')).render(
  <React.StrictMode>
    <Message name="Nishit" text="This is a test message!" />
  </React.StrictMode>,
)