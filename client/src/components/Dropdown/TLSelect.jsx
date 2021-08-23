import React, {useState} from 'react';

import arrowUpper from "../../assets/dropdown/role-uper.png";
import arrowDown from "../../assets/dropdown/role-down.png";

import {
    FiltersSelectButton,
    FiltersSelectOption,
    FiltersSelectOptions,
    FiltersSelectWrapper
} from "./FiltersSelect.style";

const TlSelect = ({TL, setTL}) => {
    const [isActive, setIsActive] = useState(false);
    const tlList = ['TL 1', 'TL 2', 'TL 3'];

    return (
        <FiltersSelectWrapper>
            <FiltersSelectButton
                style={{
                    color: TL ? 'rgba(56, 56, 56, 1)' : 'rgba(56, 56, 56, 0.45)',
                }}
                onClick={() => setIsActive(!isActive)}
            >
                {TL ? TL : 'Select...'}
                <img src={isActive ? arrowUpper : arrowDown} alt="arrowDown"/>
            </FiltersSelectButton>

            {isActive &&
            <FiltersSelectOptions>
                {tlList.map(option => {
                    return (
                        <FiltersSelectOption key={option} onClick={e => {
                            setTL(e.target.textContent);
                            setIsActive(false);
                        }}>{option}</FiltersSelectOption>
                    )
                })}
            </FiltersSelectOptions>
            }
        </FiltersSelectWrapper>
    );
};

export default TlSelect;
