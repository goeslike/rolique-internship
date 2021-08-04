import React, { useState } from 'react';
import { SelectDropdow, SelectItems, SelectItem } from './SelectDropdown.style';

import arrowUpper from '../../assets/select/upper.png';
import arrowDown from '../../assets/select/down.png';

const SelectDropdown = ({selected, setSelected, required}) => {
    const [isActive, setIsActive] = useState(false);
    const roles = ['Admin', 'Manager', 'Employee']

    return (
        <SelectDropdow
            onClick={() => setIsActive(!isActive)}
            style={{borderColor: required ? '#DA1414' : 'rgba(191, 191, 191, 1)'}}
        >
            {selected ? selected : <span>Select...</span>}
            <img src={isActive ? arrowUpper : arrowDown} alt="arrow-icon"/>

            {isActive && (
                <SelectItems>
                    {roles.map(role => (
                        <SelectItem onClick={(e) => {
                            setSelected(role);
                            setIsActive(false)
                        }}>{role}</SelectItem>
                    ))}

                </SelectItems>
            )}
        </SelectDropdow>
    );
};

export default SelectDropdown;
