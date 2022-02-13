import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../themes/GlobalStyles';

const WrapperOuter = styled.div`
position: relative;
height: 100vh;
`;
interface Props {
    children: any
}

const MainTemplate:React.FC <Props> = ({children}) => {

  return (
    <WrapperOuter>
      <GlobalStyles />
      {children}
    </WrapperOuter>
 
  );
};

export default MainTemplate
