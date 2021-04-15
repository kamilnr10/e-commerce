import React from 'react';
import ItemsList from 'components/ItemsList/ItemsList';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f7f8fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Root = () => {
  return (
    <Wrapper>
      <ItemsList />
    </Wrapper>
  );
};

export default Root;
