import React from 'react'
import { CalcPoints } from './CalcPoints';

const CheckDate = (userData, monthData) => {
    for(let i=0; i < userData.length; i++){
        let month = new Date(userData[i]['date']);
        if(month.getMonth() + 1 === 1 || month.getMonth() +1 === 2 || month.getMonth() + 1 === 3){
            monthData[month.getMonth() + 1]['amounts'].push(userData[i]['amount']);
        }
    }
    for(let val in monthData){
        let total_month_rewards = 0;
        for(let i=0; i<monthData[val]['amounts'].length; i++){
            let price = monthData[val]['amounts'][i];

            total_month_rewards = total_month_rewards + CalcPoints(price);
        }
        monthData[val]['rewards'] = total_month_rewards;
    }
}

export default CheckDate 