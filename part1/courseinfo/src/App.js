const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = ({title, count}) => {
  return(
    <>
      <p>
        {title} {count}
      </p>  
    </>
  )
}

const Content = ({part1, part2, part3}) => {
  return(
    <>
      <Part title={part1.title} count={part1.count}/>
      <Part title={part2.title} count={part2.count}/>
      <Part title={part3.title} count={part3.count}/>
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
  var parts = [
    {
      title: 'Fundamentos da biblioteca React',
      count: 10
    },
    {
      title: 'Usando props para passar dados',
      count: 7
    },
    {
      title: 'Estado de um componente',
      count: 14
    }
  ]
  var total = parts[0].count + parts[1].count + parts[2].count

  return (
    <>
      <Header course={course} />
      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]} />
      <Total total={total} />
    </>
  )
}

export default App;
