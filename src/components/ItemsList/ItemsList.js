import React from 'react';
import Item from 'components/Item/Item';
import { items } from 'data/items';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 70vh;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15 -10px rgba(0, 0, 0, 0.3);
  overflow: scroll;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0px;
`;

const ItemsList = () => {
  return (
    <Wrapper>
      <StyledList>
        {items.map((itemData) => (
          <Item key={itemData.id} itemData={itemData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default ItemsList;
