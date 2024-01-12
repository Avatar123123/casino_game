import React from 'react';
import Tokens from './tokens'
import styles from '../styles/App.module.css'
export default function App()
{
  return (
    <div className={styles.app__container}>
      <h1 className={styles.banner}>Casino Game</h1>
        <div className={styles.instruction__container}>
          <div className={styles.instruction}>
            <h3>Instruction:</h3>
            <p>Click the play button to generate the combinations</p>
            <p>You would need to get three matches to win a prize</p>
            <p>You can buy more tokens by clicking the buttons below</p>
            <p>Good luck!</p>  
          </div>
 
        </div>
        <Tokens/>
    </div>
  );
  
}
