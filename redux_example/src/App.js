import React from "react";
import './app.css'

import { addCostumerAction, removeCostumerAction } from './component/store/costumerReducer'
import {addCashAction, getCashAction} from './component/store/cashReducer'
import {useDispatch, useSelector} from 'react-redux'
import { fetchCostumers } from "./component/asyncAction";

const App = () => {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const costumer = useSelector(state => state.costumer.costumers)

  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  }

  const getCash = (cash) => {
    dispatch(getCashAction(cash))
  }

  const addCostumer = (name) => {
    const costumer = {
      name,
      id: Date.now()
    }
    dispatch(addCostumerAction(costumer))
  }

  const removeCostumer = (costumer) => {
    
    dispatch(removeCostumerAction(costumer.id))
  }


  return (
    <div className={'app'}>
      <div style={{ fontSize: '50px' }}>{cash}</div>
      <div style={{ display: "flex" }}>
        
        <button onClick={() => addCash(Number(prompt()))} className="btn btn-success" style={{ marginRight: '20px' }}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))} className="btn btn-danger">Снять со счета</button>
        <button onClick={() => addCostumer(prompt())} className="btn btn-warning">Добавить пользователя</button>
        <button onClick={() => dispatch(fetchCostumers())} className="btn btn-info">Добавить пользователя из базы</button>

      </div>
      {
        costumer.length > 0 ?
          <div>
            {costumer.map(costumers => <div key={costumers.id} onClick={() => removeCostumer(costumers)}>{costumers.name}</div>)}
          </div> :
          <div>
            Not a client
          </div>
      }
    </div>
  )
}



export default App