// ************************ COURSEINFO ********************************


const Header = (props)=>{
  console.log(props)
  return(
    <h1>{props.course}</h1>
  )
}


const Part = (props)=>{
  console.log(props)
  return (
    <p>{props.name}{props.exercises}</p>
  )
}
const Content = (props)=>{
  console.log(props)
  return(
    <>
      <Part name={props.partes[0].name} exercises={props.partes[0].exercises}/>
      <Part name={props.partes[1].name} exercises={props.partes[1].exercises}/>
      <Part name={props.partes[2].name} exercises={props.partes[2].exercises}/>
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>
      Number of exercises {props.partes[0].exercises + props.partes[1].exercises + props.partes[2].exercises}
    </p>
  )
}





const App = () => { 
  const course = {
    name:'Half Stack application development',
    partes:[
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
 
  return (
    <>
      <Header course={course.name}/>
      <Content partes={course.partes}/>
      <Total partes={course.partes}/>
    </>
  )
}

export default App

//-------------------------------------------------------------------------------------------------------





//-------------------------------------------------------------------------------------------------------

// *************** UNICAFE **********************


// import { useState } from "react"


// const Title = (props)=>{
//   return(
//     <h1>{props.titulo}</h1>
//   )
// }


// const Button = (props)=>{
//   return(
//     <div>
//       <button onClick={props.handleClick}>{props.text}</button>
//     </div>
//   )
// }



// const StatisticLine = (props) => {
//   return(
//     <tr>
//       <td>{props.texto}</td>
//       <td>{props.counter}</td>
//     </tr>
//   )
// }
  



// const Statistics = (props)=>{
//   const total = props.counter.good + props.counter.neutral + props.counter.bad
//   const average = total / 3
//   const positive = props.counter.good / total * 100 

//   if (total === 0){
//     return(
//       <p>Not feedback given</p>
//     )
//   }
//   return(
//     <table>
//       <tbody>
//         <StatisticLine texto = "Good: " counter={props.counter.good}/>
//         <StatisticLine texto = "Neutral: " counter={props.counter.neutral}/>
//         <StatisticLine texto = "Bad: " counter={props.counter.bad}/>
//         <StatisticLine texto = "Total:" counter={total}/>
//         <StatisticLine texto = "Average:" counter={average}/>
//         <StatisticLine texto = "Positive" counter={positive}/>
//       </tbody>
//     </table>
//   )
// }




// const App = () =>{
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] =  useState(0)
//   const [bad, setBad] = useState(0)
//   const list = {good, neutral, bad}


//   const goodClick = ()=>{
//       const updateGood = good + 1
//       setGood(updateGood)
//       return good
//   }

//   const neutralClick = ()=>{
//       const updateNeutral = neutral + 1
//       setNeutral(updateNeutral)
//       return neutral
//   }

//   const badClick = ()=>{
//       const updateBad = bad + 1
//       setBad(updateBad)
//       return bad
//   }


//   return (
//     <>

//     <Title titulo="give feedback"/>
//     <Button handleClick={goodClick} text="good"/>
//     <Button handleClick={neutralClick} text="neutral"/>
//     <Button handleClick={badClick} text="bad"/>
    
//     <Title titulo="statistics"/>
//     <Statistics counter={list}/>
//     </>
//   )
// }



// export default App


//------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------

// ************* ANECDOTES *************



// import { useState } from 'react'


// const Button = ({handleClick, texto})=> (<div><button onClick={handleClick}>{texto}</button></div>)



// const App = () => {
//   const anecdotes = [
//     'If it hurts, do it more often.',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
//     'The only way to go fast, is to go well.'
//   ]

//   const [selected, setSelected] = useState(0)
//   const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

//   const aleatorio = ()=>{
//     return(
//       setSelected(Math.floor(Math.random() * anecdotes.length))
//     )
//   }


//   const vote = () => {
//     const copy = [...votes]
//     copy[selected] += 1
//     setVotes(copy)
//   }

//   const maxVotes = Math.max(...votes)
//   const indice = votes.indexOf(maxVotes)
  
//   return (
//     <div>
//       <h1>Anecdote of the day</h1>
//       {anecdotes[selected]}
//       <p>has {votes[selected]} votes</p>
//       <Button handleClick={aleatorio} texto="next anecdote"/>
//       <Button handleClick={vote} texto="vote"/>
//       <h1>Anecdote with most votes </h1>
//       {anecdotes[indice]}
//       {maxVotes}
//     </div>
//   )
// }

// export default App
