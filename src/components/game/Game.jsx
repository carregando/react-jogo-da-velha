import { useState, useEffect } from 'react'

import Icon from '../icon/Icon'
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
  [2,4,6]
]


function Game () {
  const [gameState, setGameState] = useState(Array(9).fill(0))
  const [currentPlayer, setCurrentPlayer] = useState(-1)
  const [winner, setWinner] = useState(0)

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
     if (soma === 3 || soma === -3) setWinner(soma / 3)
    })
  }

  //IMPORTANTE!!! useEffect tem dois parametros, uma função e um array
  useEffect(() => {
    setCurrentPlayer(currentPlayer * -1)
    verifyGame()
  }, [gameState])

  return (
    <div className={styles.gameContent}>
      <div className = {styles.game}>
      {
        gameState.map((value, pos) =>
        <GameOption 
          key={`game-option-pos-${pos}`} 
          status={value}
          onClick={() => handleClick(pos)}
        />
        ) 
      }
     </div>
     <div className= {styles.gameInfo}>
      <h4>Próximo a jogar</h4>
      {
        currentPlayer === 1 && <Icon iconName ='circle.svg' />
      }
      {
        currentPlayer === -1 && <Icon iconName ='x.svg' />
      }
     </div>
    </div>
  )
}

export default Game 