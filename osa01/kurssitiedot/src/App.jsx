const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course}/>
      <Content part={part1.name} excersises={part1.exercises1} />
      <Content part={part2.name} excersises={part2.exercises} />
      <Content part={part3.name} excersises={part3.excersises} />
      <Total first={part1.exercises} second={part2.exercises} third={part3.exercises} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
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