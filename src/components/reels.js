
import React, { useState } from 'react';
import Match from './match'
import styles from '../styles/Reels.module.css'


const items = ['apple', 'orange', 'pear', 'watermelon']; 

export default function Reels(props)
{ 
    const {tokenDeduction, totalTokenName, costName} = props;
    const [something, setSomething] = useState([]);
    const [matchCount, setMatchCount] = useState(null);
    function handleButtonClick()
    {
        tokenDeduction();
        let symbols_combo = [];
        const num_of_symbols = 5;
        for (let i = 0; i < num_of_symbols; i++)
        {
            const random_index = Math.floor(Math.random() * items.length)
            symbols_combo.push(items[random_index])
        }
        setSomething(symbols_combo);
        const count = Match(items, something)
        setMatchCount(count);   
    }

    return ( 
        <div>
            <div className={styles.play__button__container}>
                <button className={styles.play__button} disabled={totalTokenName < costName} onClick={handleButtonClick}>Play</button>
            </div>
            
            <div className={styles.list}>
                {something.map((symbol, index) => (
                <p key={index}>{symbol}</p>
            ))}
            </div>
            <p className={styles.match__count}>{matchCount}</p>
        </div>
    );

}
