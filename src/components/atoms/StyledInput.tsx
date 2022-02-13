import styled from 'styled-components';




export const StyledInput = styled.input`
border:none;
background-color: transparent;
padding: 8px;
margin-bottom: 8px;
width:${({width})=>width?width:"auto"};

&:hover{
	background-color: #dee6ec;
}
&:focus{
	outline: none;
	box-shadow: 0px 0px 7px -2px #363535;
	background-color: #dee6ec;

}

`;