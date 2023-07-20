import styles from './Score.module.css'

import Icon from '../icon/Icon'

function Score ({winsO, winsX}) {
   return (
    <>
    <h4>Placar:</h4>
    <div className={styles.score}>
      <div className={styles.scoreContent}>
       <Icon iconName="circle.svg"/>
       <h2>{winsO}</h2>
      </div>
      <div className={styles.scoreContent}>
       <Icon iconName="x.svg"/>
       <h2>{winsX}</h2>
      </div>
    </div>
    </>
   )
}

export default Score