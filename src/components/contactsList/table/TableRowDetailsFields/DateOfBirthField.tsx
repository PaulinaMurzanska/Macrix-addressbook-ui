import React, { useContext } from 'react';
import { ContactCtx } from '../../../../context/ContactContex';
import {
	StyledSpan,
	IconWrapper,
	IconClickableOverlay,
	StyledDateEditWrapper,
	StyledLabel,
} from '../../../styledComponents/StyledContactRowComponents';
import { FaEdit } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
	id: string;
	dateOfBirthFormatted: string;
	setCustomDateOnChange: (date: any) => void;
	startDate: Date;
	onClickChangeDateButtonHandler: (e: any) => void;
	dateChangeBtnTargetId: string | null;
}

const DateOfBirthField: React.FC<Props> = ({
	id,
	dateOfBirthFormatted,
	setCustomDateOnChange,
	startDate,
	onClickChangeDateButtonHandler,
	dateChangeBtnTargetId,
}) => {
	const { idToEdit, rowActive } = useContext(ContactCtx);

	const firstConditionToMakeCalendarVisible = dateChangeBtnTargetId === id;
	const secondConditionToMakeCalendarVisible =
		dateChangeBtnTargetId === idToEdit;
	const isCalendarVisible =
		firstConditionToMakeCalendarVisible &&
		rowActive &&
		secondConditionToMakeCalendarVisible;

	return (
		<td>
			<StyledDateEditWrapper>
				<StyledSpan> Date of birth: {dateOfBirthFormatted} </StyledSpan>

				{idToEdit === id && (
					<IconWrapper>
						<FaEdit
							style={{
								color: 'navy',
								fontSize: '1.8rem',
								marginLeft: '10px',
							}}
						/>
						<IconClickableOverlay
							id={id}
							onClick={onClickChangeDateButtonHandler}
						/>
					</IconWrapper>
				)}
			</StyledDateEditWrapper>
			{isCalendarVisible && (
				<>
					<StyledLabel for='birth'>update date of birth</StyledLabel>
					<DatePicker
						selected={startDate}
						onChange={setCustomDateOnChange}
						peekNextMonth
						showMonthDropdown
						showYearDropdown
						dropdownMode='select'
					/>
				</>
			)}
		</td>
	);
};

export default DateOfBirthField;
