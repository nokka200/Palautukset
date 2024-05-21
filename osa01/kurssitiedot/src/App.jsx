const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part={part1} excersises={exercises1} />
      <Content part={part2} excersises={exercises2} />
      <Content part={part3} excersises={exercises3} />
      <Total first={exercises1} second={exercises2} third={exercises3} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part} excersises={props.excersises} />
    </div>
  )
}

const Total = (props) => { 
  return (
    <div>
      <p>
        Number of exercises {props.first + props.second + props.third}
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
      {props.part} {props.excersises}
      </p>
    </>
  )
}

export default App

/*
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
*/