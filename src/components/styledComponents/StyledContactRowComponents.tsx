import styled from 'styled-components';
import { Label } from 'reactstrap';

export const StyledButtonsWrapper = styled.div`
	width: 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const StyledSpan = styled.span`
	color: navy;
	font-size: 1.2rem;
`;
export const IconWrapper = styled.div`
	width: 20px;
	height: 20px;
	position: relative;
`;
export const IconClickableOverlay = styled.div`
	width: 20px;
	height: 20px;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	cursor: pointer;
`;
export const StyledDateEditWrapper = styled.div`
	width: 100px;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-between;
	padding: 0 15px;
`;

export const StyledLabel = styled(Label)`
	font-size: 1.2rem;
	padding: 0 15px;
	color: 'green';
`;