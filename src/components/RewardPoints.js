import React, { Fragment, useEffect, useState } from 'react'
import style from './PointStyle.modules.css'
import fetch from './Transaction'
import { CalcPoints } from './CalcPoints'
import CheckDate from './CheckDate'
import CustomerInfo from './CustomerInfo'
import data from './newData'

const RewardPoints =() => {

    const [customers, setCustomers] = useState([]);
    const [customerRewards, setCustomerRewards] = useState([])
    const [customerTransactions, setCustomerTransactions] = useState([])
    const [customerDetails, setCustomerDetails] = useState([])

    const [currentUser, setCurrentUser] = useState("");
    const [savedCustomer, setSavedCustomer] = useState([]);
    const [newTransaction, setNewTransaction] = useState({data: new Date(), amount: 0})


    
    useEffect(() => {
        /* 
        setCustomers(data)
        setCustomerDetails(data)
        setSavedCustomer({...fetch})

       */
        setCustomers([...Object.keys(fetch)])
        setCustomerDetails([...Object.values(fetch)])
        setSavedCustomer({...fetch})
    }, [])
   
    console.log(customerDetails)
    console.log(savedCustomer)
    console.log(customers)


    const selectUser = (value, key) => {
        setCurrentUser((value));
        let customerData = savedCustomer[value];

        let monthData = {
            1: {
                amounts: [],
                rewards: 0,
            },
            2: {
                amounts: [],
                rewards: 0,
            },
            3: {
                amounts: [],
                rewards: 0,
            }

        };
       CheckDate(customerData, monthData)
        setCustomerRewards({...monthData});
        setCustomerTransactions([...customerData]);
    }

  

    return (
        <div>
        <div className={style.displayContainer}>
            <div className={style.display}>
                <div>
                <select onChange={e => selectUser(e.target.value)} value={currentUser}>
                    <option value={""} disabled>Select Customer</option>
                    {customers.map((customer, index)=>{
                        return(
                            <option key={index} value={customer}>{customer}</option>
                        )
                    })}
                </select>
                </div>
                {Object.keys(customerRewards).length> 0 &&
                <Fragment>
                            <table>
                            <tbody>
                            <tr>
                                <th>Month</th>
                                <th>Reward Points</th>
                            </tr>
                                <tr>
                                    <td>
                                        First Month
                                    </td>
                                    <td>{customerRewards[1]["rewards"]}</td>
                                </tr>
                                <tr>
                                    <td>
                                        Second Month
                                    </td>
                                    <td>{customerRewards[2]["rewards"]}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Third Month
                                    </td>
                                    <td>{customerRewards[3]["rewards"]}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Total Reward</td>
                                    <td>{customerRewards[1]["rewards"] + customerRewards[2]["rewards"] + customerRewards[3]["rewards"]} </td>
                                </tr>
                                </tbody>
                                </table>
                               
                                <h4>Customer Purchases</h4>
                                {customerTransactions.length > 0 ?
      
                            <table>
                            <tbody>
                            <tr>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Reward Points</th>
                        </tr>
                {
                customerTransactions.map((customer, i) => (
                        <tr key={i}>

                            <td>{customer["amount"]}</td>
                            <td>{customer["date"]}</td>
                            <td>{CalcPoints(customer.amount)}</td>
                        </tr>
                         ))
                        }
                        </tbody>
                    </table> : 
                    <div> 
                        <h2>Transaction unavalable</h2> 
                        </div>}
          </Fragment>}
                    </div>
                </div>     
</div>

    )
}

export default RewardPoints