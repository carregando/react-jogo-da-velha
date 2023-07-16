import styles from './GameInfo.module.css' 

import Icon from '../icon/Icon'
import Button from '../button/Button'

function GameInfo ({ currentPlayer, winner, onReset }) {
  return ( 
   <div className= {styles.gameInfo}>
     {
       winner === 0 &&
       <>
        <h4>Próximo a jogar</h4>
          {
            currentPlayer === 1 && <Icon iconName ='circle.svg' />
          }
          {
            currentPlayer === -1 && <Icon iconName ='x.svg' />
          }
       </>
     }
     {
       winner !== 0 &&
       <>
        <h4>Fim de Jogo! Campeão:</h4>
          {
            winner === 1 && <Icon iconName ='circle.svg' />
          }
          {
            winner === -1 && <Icon iconName ='x.svg' />
          }
         
       </>
     } 
     <Button 
       onClick={onReset}
       disabled={winner === 0}
     >
        Reiniciar
     </Button>
   </div>
  )
}
export default GameInfo