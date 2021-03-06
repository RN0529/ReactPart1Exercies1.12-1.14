import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints]= useState([0,0,0,0,0,0,0])
  const [max,setMax]= useState(0)
  const handleSelected = () =>{
    if(selected===6){
      setSelected(0)
    }else{
      setSelected(selected +1)
    }
    
  }
  const handleVote = () => {
    
    let test = {...points}
    console.log(test[selected])
    test[selected] = test[selected]+1
    if(test[selected]>test[max]){
      setMax(selected)
    }
    setPoints(test) 
  }

  return (
    <div>
      {anecdotes[selected]}
      <br></br>
      <p>{points[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={handleVote}> vote </button>
      <button onClick={handleSelected}>next anecdote</button>

      <h1>anecdote with the most votes</h1>
      {anecdotes[max]}
    </div>
  )
}

export default App