import React, {useState} from 'react';

import arrowUpper from "../../assets/dropdown/role-uper.png";
import arrowDown from "../../assets/dropdown/role-down.png";

import {
    FiltersSelectButton,
    FiltersSelectOption,
    FiltersSelectOptions,
    FiltersSelectWrapper, SelectedColor
} from "./FiltersSelect.style";

const StatusSelect = ({status, setStatus}) => {
    const [isActive, setIsActive] = useState(false);
    const statusList = ['Requested', 'Pre-phase', 'Running', 'Done'];

    const selectColor = (status) => {
        if (status === 'Requested') return '#D9AD42';
        if (status === 'Pre-phase') return '#B14AC2';
        if (status === 'Running') return '#1778B0';
        if (status === 'Done') return '#54A880';
    };

    return (
        <FiltersSelectWrapper>
            <FiltersSelectButton
                style={{
                    color: status ? 'rgba(56, 56, 56, 1)' : 'rgba(56, 56, 56, 0.45)',
                }}
                onClick={() => setIsActive(!isActive)}
            >
                <span>
                    {status && <SelectedColor selectedColor={selectColor(status)}/>}
                    {status ? status : 'Select...'}
                </span>
                <img src={isActive ? arrowUpper : arrowDown} alt="arrowDown"/>
            </FiltersSelectButton>

            {isActive &&
            <FiltersSelectOptions>
                {statusList.map(option => {
                    return (
                        <FiltersSelectOption key={option} onClick={e => {
                            setStatus(e.target.textContent);
                            setIsActive(false);
                        }}
                         firstColor={'#D9AD42'}
                         secondColor={'#B14AC2'}
                         thirdColor={'#1778B0'}
                         fourthColor={'#54A880'}
                        ><div></div>{option}</FiltersSelectOption>
                    )
                })}
            </FiltersSelectOptions>
            }
        </FiltersSelectWrapper>
    );
};

export default StatusSelect;
