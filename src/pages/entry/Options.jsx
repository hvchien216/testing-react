import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import AlertBanner from '../../common/AlertBanner';
import { pricePerItem } from '../../constants';
import { useOrderDetails } from '../../context/OrderDetail';
import ScoopOption from './ScoopOption';
import TopingOption from './TopingOption';

function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  const [orderDetails, updateItemCount] = useOrderDetails();
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => setItems(res.data))
      .catch((err) => setError(true));
  }, [optionType]);

  const ItemComponent = optionType === 'scoops' ? ScoopOption : TopingOption;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();
  if (error) {
    return <AlertBanner />;
  }

  const itemMap = items.map((e) => (
    <ItemComponent
      key={e.name}
      name={e.name}
      imagePath={e.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, optionType)
      }
    />
  ));

  return (
    <>
      <h2>{title}</h2>
      <p>{pricePerItem[optionType]} each</p>
      <p>{title} total: {orderDetails.totals[optionType]}</p>
      <Row>{itemMap}</Row>
    </>
  );
}

export default Options;
