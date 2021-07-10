import React from 'react'

export default function CustomerInfo(array) {

    var name;
    let detail;
    for(let [key, value] of Object.entries(array)){
        for(let val of value){
            detail = {key, val}
        }
       
    }
    return [ ...detail]
  
    
}
