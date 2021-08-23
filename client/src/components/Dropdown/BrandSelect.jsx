import React, {useState} from 'react';

import arrowUpper from "../../assets/dropdown/role-uper.png";
import arrowDown from "../../assets/dropdown/role-down.png";

import {
    FiltersSelectButton,
    FiltersSelectOption,
    FiltersSelectOptions,
    FiltersSelectWrapper
} from "./FiltersSelect.style";

const BrandSelect = ({brand, setBrands}) => {
    const [isActive, setIsActive] = useState(false);
    const brandsList = ['Brand 1', 'Brand 2', 'Brand 3'];

    return (
        <FiltersSelectWrapper>
            <FiltersSelectButton
                style={{
                    color: brand ? 'rgba(56, 56, 56, 1)' : 'rgba(56, 56, 56, 0.45)',
                }}
                onClick={() => setIsActive(!isActive)}
            >
                {brand ? brand : 'Select...'}
                <img src={isActive ? arrowUpper : arrowDown} alt="arrowDown"/>
            </FiltersSelectButton>

            {isActive &&
                <FiltersSelectOptions>
                    {brandsList.map(option => {
                        return (
                            <FiltersSelectOption key={option} onClick={e => {
                                setBrands(e.target.textContent);
                                setIsActive(false);
                            }}>{option}</FiltersSelectOption>
                        )
                    })}
                </FiltersSelectOptions>
            }
        </FiltersSelectWrapper>
    );
};

export default BrandSelect;
