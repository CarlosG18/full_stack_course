const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = ({name, exercises}) => {
  return(
    <>
      <p>
        {name} {exercises}
      </p>  
    </>
  )
}

const Content = ({parts}) => {
  return(
    <>
      <Part name={parts[0].name} exercises={parts[0].exercises}/>
      <Part name={parts[1].name} exercises={parts[1].exercises}/>
      <Part name={parts[2].name} exercises={parts[2].exercises}/>
    </>
  )
}

const Total = ({total}) => {
  return(
    <>
      <p>Number of exercises {total}</p>  
    </>
  )
}

function App() {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const parts = [
    {
      name: 'Fundamentos da biblioteca React',
      exercises: 10
    },
    {
      name: 'Usando props para passar dados',
      exercises: 7
    },
    {
      name: 'Estado de um componente',
      exercises: 14
    }
  ]

  let total = parts[0].exercises + parts[1].exercises + parts[2].exercises

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={total} />
    </>
  )
}

export default App;
