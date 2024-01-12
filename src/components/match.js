import React from 'react';

function pricesFunction()
{
    let prizes = ['Iphone', 'Laptop', 'Headphones', 'Television']
    const random_index = Math.floor(Math.random() * prizes.length)
    let prizeWon = prizes[random_index];
    return `Congragulations. Price won: ${prizeWon}`;
}

export default function Match(arr, data)
{
    const matchThreshold = 3;
    const count = Array(arr.length).fill(0);

    for (let i = 0; i < arr.length; i++)
    {
        for (let j = 0; j < data.length; j++)
        {
            if (arr[i] === data[j])
            {
                count[i]++;
                if (count[i] >= matchThreshold)
                {
                    return pricesFunction();
       
                }   
              }
        } 
    }
    return "No Price won. Try again";
  }
