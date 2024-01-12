import React, {useState} from 'react'; 
import Reels from './reels'
import styles from '../styles/Tokens.module.css'

const tokensCredit = [10, 20, 30, 40, 50]
export default function Tokens()
{
    const [totalToken, setTotalToken] = useState(100);
    const handleAddTokens = (event) =>
    {
        const value = Number(event.target.value);
        setTotalToken(totalToken + value);
    }

    const cost = 40 
    const handleDeductTokens = () =>
    {
        if (totalToken >= cost) {
            setTotalToken(totalToken - cost);
            
        } else {
            return 
        }

      }
      return (
          <div>
            <div className={styles.token__info}>
                <p>Token left: {totalToken}</p>
                <p>Tokens required per play: {cost}</p>
            </div>
            <div className={styles.token__container}>
                {tokensCredit.map((tokensCredit, index) => (
                    <button className={styles.token} key={index} onClick={handleAddTokens} value={tokensCredit}>{tokensCredit} Tokens</button>
                ))}
            </div>
            <div className={styles.result}>
                <Reels tokenDeduction={handleDeductTokens} totalTokenName={totalToken} costName={cost}/>
            </div>
            <div className={styles.result_two}>
                {totalToken < cost && <p style={{color: "red"}}>Not enough tokens! Please add more</p>}
            </div>
          </div>
      )
  
    }