import styled from 'styled-components';

export const StyledCol= styled.div`
min-height: 50px;
height: auto;
font-size: 1.8rem;
margin:1px;
border:1px solid #e0dbdb;
box-shadow: 0px 0px 7px -2px rgba(154, 152, 152, 1);
&:hover{
	transform: scale(1.01);
	background-color: #f8f2f2;
	cursor: pointer;
}

&:first-child{
    width:25%;
}
&:nth-child(2){
    width:25%;
}
&:nth-child(3){
    width:20%;
}
&:nth-child(4){
    width:20%;
}
&:last-child{
    width:10%;
}

`;