import React, { useState, useEffect, useRef } from 'react'
import './App.css'
const App = () => {
  const [quotes, setQuotes] = useState("");
  const textRef = useRef();
  let colors = ["ffff00", "#90ee90", "#ffa500", "#ff68ff", "#a9a9e7",   "#d28ca7"];

  const getQuote =() => {
    fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then(data =>{
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
    })
  }
  useEffect(() => {
    getQuote();
  }, [])
  useEffect(() => {
    textRef.current.style.color = colors[Math.floor(Math.random() * colors.length)]
  },[quotes])
  return (
    <div className='App'>
      <h1>Wise quotes</h1>
      <div className='quote'>
        <p ref={textRef}>{quotes.text}</p>
        <p >Author: <span ref={textRef}>{quotes.author}</span> </p>
        <button onClick={getQuote} className='btn'>Get Quote</button>
        <button><a html href="https://www.google.com/search?q=google+translate&oq=goo&aqs=chrome.1.69i57j69i59l2j69i65j69i60l4.3937j0j7&sourceid=chrome&ie=UTF-8">Translate</a></button>

      </div>
    </div>
  )
}

export default App