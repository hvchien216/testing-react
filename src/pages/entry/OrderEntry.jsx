import React from 'react'
import { useOrderDetails } from '../../context/OrderDetail'
import Options from './Options'

function OrderEntry({name, imagePath}) {
  const [orderDetail] = useOrderDetails();
  return (
    <div>
      <h1>Design your Sundae!</h1>
      <Options optionType='scoops'/>
      <Options optionType='toppings'/>
      <h2>Grand total: {orderDetail.totals.grandTotal}</h2>
    </div>
  )
}

export default OrderEntry