import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência.',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))
  const [top, setTop] = useState(0)

  const handle = () => {
    const newVote = [...vote]
    newVote[selected] += 1
    setVote(newVote)
    
    let maior = newVote[0]
    let index = 0
    for(let i=0; i < newVote.length; i++){
      if(newVote[i] > maior){
        index = i;
        maior = newVote[i]
      }
    }

    setTop(index)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {vote[selected]} votes!</p>
      <Button text="vote" handleClick={handle} />
      <Button text="next anecdote" handleClick={() => setSelected(getRandomInt(anecdotes.length))}/>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[top]}</p>
      <p>Has {vote[top]} votes!</p>
    </div>
  )
}

export default App