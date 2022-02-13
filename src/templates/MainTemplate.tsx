import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import {theme} from "../themes/AppTheme";
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
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </WrapperOuter>
 
  );
};

export default MainTemplate
