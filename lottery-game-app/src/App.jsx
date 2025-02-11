
import './App.css'
import LotteryGame from './lotteryGame'
import Ticket from './Ticket'

function App() {

  return (
    <>
      <LotteryGame n={2} winningSum={10}/>
    </>
  )
}

export default App
