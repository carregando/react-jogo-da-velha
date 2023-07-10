import styles from './Title.module.css'

function Title ({ children }) {
  return (
    <>
     <div>
      <h1 className = {styles.title}>{ children }</h1>
     </div>
    </>
  )
}

export default Title