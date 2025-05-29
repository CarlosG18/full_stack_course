import { useState } from "react";

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const StatisticLine  = ({text, value}) => {
  return(
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
    
  )
}

const Statistics = ({data}) => {
  if(data["all"] <= 0){
    return(
      <>
        <p>No feedback given</p>
      </>
    )
  }
  return(
    <>
      <h1>Statistics</h1>
      <table>
        <StatisticLine  text="good" value={data["good"]}/>
        <StatisticLine  text="neutral" value={data["neutral"]}/>
        <StatisticLine  text="bad" value={data["bad"]}/>
        <StatisticLine  text="all" value={data["all"]}/>
        <StatisticLine  text="average" value={data["average"]}/>
        <StatisticLine  text="positive" value={data["positive"]}/>
      </table>
    </>
  )
}

function App() {
  let [good, setGood] = useState(0)
  let [neutral, setNeutral] = useState(0)
  let [bad, setBad] = useState(0)

  let all = good + neutral + bad;

  let data_statistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all,
    average: parseFloat((good - bad)/all),
    positive: parseFloat(good/all)
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)}/>
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)}/>
      <Button text="bad" handleClick={() => setBad(bad + 1)}/>
      <Statistics data={data_statistics} />
    </>
  );
}

export default App;
