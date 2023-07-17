import { useState, useEffect } from 'react'

import GameInfo from '../gameInfo/GameInfo'
import styles from '../game/Game.module.css'
import GameOption from '../gameOption/GameOption'

const winnerTable = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]


function Game () {
  const [gameState, setGameState] = useState(Array(9).fill(0))
  const [currentPlayer, setCurrentPlayer] = useState(-1)
  const [winner, setWinner] = useState(0)
  const [winnerLine, setWinnerLine] = useState([])
  const [draw, setDraw] = useState(false)

  const handleClick = (valueOfPos) => {
    if (gameState[valueOfPos] === 0 && winner === 0) {
     let newGameState = [...gameState]
     newGameState[valueOfPos] = currentPlayer
     setGameState(newGameState)
    }
  }

  const verifyGame = () => {
    winnerTable.forEach((line) =>{
     const values = line.map ((values) => gameState[values])
     const soma = values.reduce((acc, value) => acc + value, 0 )
     if (soma === 3 || soma === -3) {
       setWinner(soma / 3)
       setWinnerLine(line)
     } 
    })
  }

  const verifyWinnerLine = (pos) => 
  winnerLine.find((value) => value === pos) !== undefined

  const handleReset = () => {
    setGameState(Array(9).fill(0))
    setWinner(0)
    setCurrentPlayer(-1)
    setWinnerLine([])
    setDraw(false)
  }

  const verifyDraw = () => {
    if (gameState.find((value) => value === 0) === undefined && winner === 0){
      setDraw(true)
    } 
  }
  //IMPORTANTE!!! useEffect tem dois parametros, uma função e um array
  useEffect(() => {
    setCurrentPlayer(currentPlayer * -1)
    verifyGame()
    verifyDraw()
  }, [gameState])

  useEffect (() =>{
    if (winner !== 0) setDraw(false)
  }, [winner])

  return (
    <div className={styles.gameContent}>
      <div className = {styles.game}>
      {
        gameState.map((value, pos) =>
        <GameOption 
          key={`game-option-pos-${pos}`} 
          status={value}
          onClick={() => handleClick(pos)}
          isWinner={verifyWinnerLine(pos)}
          isDraw={draw}
        />
        ) 
      }
     </div>

     <GameInfo
     currentPlayer={currentPlayer}
     winner={winner}
     onReset={handleReset}
     isDraw={draw}
     />
    </div>

  )
}
export default Game 