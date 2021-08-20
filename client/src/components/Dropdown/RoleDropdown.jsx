import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import arrowUpper from '../../assets/dropdown/role-uper.png';
import arrowDown from '../../assets/dropdown/role-down.png';

import {
    RoleSelect,
    RoleDropdownButton,
    RoleDropdownOptions,
    RoleDropdownOption
} from './RoleDropdown.style';

const RoleDropdown = ({selected, setSelected, required}) => {
    const adminAccess = useSelector(({roleReducer: {adminAccess}}) => adminAccess);
    const [isActive, setIsActive] = useState(false);

    let options = ['Admin', 'Manager', 'Employee'];
    if (!adminAccess) {
        options = ['Manager', 'Employee'];
    }

    return (
        <RoleSelect>
            <RoleDropdownButton
                onClick={() => setIsActive(!isActive)}
                style={{
                    color: selected ? 'rgba(56, 56, 56, 1)' : 'rgba(56, 56, 56, 0.45)',
                    border: required ? '1px solid #DA1414' : '1px solid rgba(191, 191, 191, 1)'
                }}
            >
                {selected ? selected : 'Select...'}
                <img src={isActive ? arrowUpper : arrowDown} alt="arrowDown"/>
            </RoleDropdownButton>

            {isActive &&
                <RoleDropdownOptions>
                    {options.map(option => {
                        return (
                            <RoleDropdownOption key={option} onClick={e => {
                                setSelected(e.target.textContent);
                                setIsActive(false);
                            }}>{option}</RoleDropdownOption>
                        )
                    })}
                </RoleDropdownOptions>
            }
        </RoleSelect>
    );
};

export default RoleDropdown;
