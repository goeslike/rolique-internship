import React, {useState} from 'react';

import arrowUpper from "../../assets/dropdown/role-uper.png";
import arrowDown from "../../assets/dropdown/role-down.png";

import {
    FiltersSelectButton,
    FiltersSelectOption,
    FiltersSelectOptions,
    FiltersSelectWrapper
} from "./FiltersSelect.style";

const EffortSelect = ({effort, setEffort}) => {
    const [isActive, setIsActive] = useState(false);
    const effortsList = ['High', 'Medium', 'Low'];

    return (
        <FiltersSelectWrapper>
            <FiltersSelectButton
                style={{
                    color: effort ? 'rgba(56, 56, 56, 1)' : 'rgba(56, 56, 56, 0.45)',
                }}
                onClick={() => setIsActive(!isActive)}
            >
                {effort ? effort : 'Select...'}
                <img src={isActive ? arrowUpper : arrowDown} alt="arrowDown"/>
            </FiltersSelectButton>

            {isActive &&
                <FiltersSelectOptions>
                    {effortsList.map(option => {
                        return (
                            <FiltersSelectOption key={option} onClick={e => {
                                setEffort(e.target.textContent);
                                setIsActive(false);
                            }}>{option}</FiltersSelectOption>
                        )
                    })}
                </FiltersSelectOptions>
            }
        </FiltersSelectWrapper>
    );
};

export default EffortSelect;
