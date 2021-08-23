import React, {useState} from 'react';

import arrowUpper from "../../assets/dropdown/role-uper.png";
import arrowDown from "../../assets/dropdown/role-down.png";

import {
    FiltersSelectButton,
    FiltersSelectOption,
    FiltersSelectOptions,
    FiltersSelectWrapper
} from "./FiltersSelect.style";

const StatusSelect = ({status, setStatus}) => {
    const [isActive, setIsActive] = useState(false);
    const statusList = ['Done', 'Running', 'Requested', 'Pre-phase'];

    return (
        <FiltersSelectWrapper>
            <FiltersSelectButton
                style={{
                    color: status ? 'rgba(56, 56, 56, 1)' : 'rgba(56, 56, 56, 0.45)',
                }}
                onClick={() => setIsActive(!isActive)}
            >
                {status ? status : 'Select...'}
                <img src={isActive ? arrowUpper : arrowDown} alt="arrowDown"/>
            </FiltersSelectButton>

            {isActive &&
            <FiltersSelectOptions>
                {statusList.map(option => {
                    return (
                        <FiltersSelectOption key={option} onClick={e => {
                            setStatus(e.target.textContent);
                            setIsActive(false);
                        }}>{option}</FiltersSelectOption>
                    )
                })}
            </FiltersSelectOptions>
            }
        </FiltersSelectWrapper>
    );
};

export default StatusSelect;
