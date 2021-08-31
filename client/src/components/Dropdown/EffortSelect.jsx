import React, {useState} from 'react';

import arrowUpper from "../../assets/dropdown/role-uper.png";
import arrowDown from "../../assets/dropdown/role-down.png";

import {
    FiltersSelectButton,
    FiltersSelectOption,
    FiltersSelectOptions,
    FiltersSelectWrapper,
    SelectedColor
} from "./FiltersSelect.style";

const EffortSelect = ({effort, setEffort}) => {
    const [isActive, setIsActive] = useState(false);
    const effortsList = ['Not set', 'Low', 'Medium', 'High'];

    const selectColor = (effort) => {
        if (effort === 'Not set') return '#FFFFFF';
        if (effort === 'Low') return '#5DC983';
        if (effort === 'Medium') return '#FBA63C';
        if (effort === 'High') return '#ED6B3E';
    };

    return (
        <FiltersSelectWrapper>
            <FiltersSelectButton
                style={{
                    color: effort ? 'rgba(56, 56, 56, 1)' : 'rgba(56, 56, 56, 0.45)',
                }}
                onClick={() => {setIsActive(!isActive)}}
            >
                <span>
                    {effort && <SelectedColor
                        style={{border: effort === 'Not set' ? '1px solid #cccccc' : ''}}
                        selectedColor={selectColor(effort)}
                    />}
                    {effort ? effort : 'Select...'}
                </span>
                <img src={isActive ? arrowUpper : arrowDown} alt="arrowDown"/>
            </FiltersSelectButton>

            {isActive &&
                <FiltersSelectOptions>
                    {effortsList.map(option => {
                        return (
                            <FiltersSelectOption key={option} onClick={e => {
                                setEffort(e.target.textContent);
                                setIsActive(false);
                            }}
                             firstColor={'#FFFFFF'}
                             secondColor={'#5DC983'}
                             thirdColor={'#FBA63C'}
                             fourthColor={'#ED6B3E'}
                             border={'1px solid #cccccc'}
                            ><div/>{option}</FiltersSelectOption>
                        )
                    })}
                </FiltersSelectOptions>
            }
        </FiltersSelectWrapper>
    );
};

export default EffortSelect;
