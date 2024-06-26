const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
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
    <div>
      <Header course={course.name}/>
      <Content part={course.parts[0].name} excersises={course.parts[0].exercises} />
      <Content part={course.parts[1].name} excersises={course.parts[1].exercises} />
      <Content part={course.parts[2].name} excersises={course.parts[1].exercises} />
      <Total first={course.parts[0].exercises} second={course.parts[1].exercises} third={course.parts[2].exercises} />
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