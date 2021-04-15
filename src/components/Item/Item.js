import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.li`
  width: 200px;
  height: 220px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border: 1px solid lightgray;
`;

const StyledButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.secondary ? '#e7e044' : '#c0c7d6')};
  border-radius: 50px;
  border: none;
  color: white;
`;

const Item = ({
  itemData: { id, name, img = 'RandomImg', price, qtyAvailable },
}) => {
  return (
    <Wrapper>
      <div>{img}</div>
      <div>
        <p>{price}</p>
        <p></p>
        <StyledButton>+</StyledButton>
        <StyledButton secondary>+</StyledButton>
      </div>
    </Wrapper>
  );
};

Item.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.string,
    qtyAvailable: PropTypes.string,
  }),
};

export default Item;
