import { useState } from 'react'
import './App.css'

export default function App() {
  
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setQuestion(event.target.value!);
  }
  function handleClick(){
   setResponse(algorithm(question))
  }


  
  function algorithm(input: String): string {
    if (input.length == 0) {
      return "I do not understand"
    }
    let arr = input.toLowerCase().split(' ')
    let asCat = "As a Cat, "
    if (arr.includes("who")) {
      if (arr.includes("are")) {
        "Meow, who are you??"
      } else {
        return `${asCat} I'm not sure who or what you're talking about meow!`
      }
    } else if (arr.includes("what")) {
      return `I agree, what meow?`
      
    } else if (arr.includes("when")) {
      if (arr.includes("did")) {
        return "I'm not sure when that happened meow!?"
      } else {
        return `${asCat} I'm not sure when it happened, but I'll look into it witht my cat powers`
      }
    } else if (arr.includes("where")) {
      if (arr.includes("did")){
        return `${asCat} I think it went that way! Trust my cat instincts!`
      } else {
        return "I'm not sure where it went, maybe try again later?"
      }
      
    } else if (arr.includes("why")) {
      if (arr.includes("did")) {
        return `${asCat} why did it happen? Great question meow`
      } else {
        "meow meow"
      }
      
    } else if (arr.includes("how")) {
      
    } else if (arr.includes("explain")) {
      
    } else {
      return "Meow! I don't understand!"
    }
    return "Meowo default, some kinda error???"
  }
  return (
    <main className="flex-auto mx-auto">
      <label className="font-bold">
       Ask CatGPT a question: 
        <input name="" 
          className="outline-1 outline-black"
          placeholder="What is love?"
          value={question}
          onChange={handleInputChange}
          />
      </label>
      <button onClick={handleClick}>Ask Question</button>
      <h2>catGPT Response:</h2>
      <p>{response}</p>
      
    </main>
  )
}