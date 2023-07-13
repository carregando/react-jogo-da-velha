import styles from '../gameOption/GameOption.module.css'
import Icon from '../icon/Icon'

const GameIcon = ({ iconName }) => <Icon iconName= {iconName} size = "25px"/>

function GameOption ({ status }) {
  return (
    <div className = {styles.gameOption}>
      {
        status === 1 && <GameIcon iconName ='circle.svg'/>
      }
      {
        status === -1 && <GameIcon iconName ='x.svg'/>
      }
    </div>
  )
}

export default GameOption 