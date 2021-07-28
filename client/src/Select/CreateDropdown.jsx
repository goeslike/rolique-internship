import React, {useState} from 'react';
import {Link} from "react-router-dom";

import arrowUpper from '../assets/dropdown/uper.png';
import arrowDown from '../assets/dropdown/down.png';

import {
    CreateDropdow,
    CreateDropdownButton,
    CreateDropdownContent,
    CreateDropdownItem
} from './CreateDropdown.style';

const CreateDropdown = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <CreateDropdow>
            <CreateDropdownButton onClick={() => setIsActive(!isActive)}>
                <img src={isActive ? arrowDown : arrowUpper} alt="arrow-icon"/>
                Create New
            </CreateDropdownButton>

            {isActive && (
                <CreateDropdownContent>
                    <CreateDropdownItem
                        onClick={() => {
                            setIsActive(false);
                        }}>
                        <Link>Compaign</Link>
                    </CreateDropdownItem>

                    <CreateDropdownItem
                        onClick={() => {
                            setIsActive(false);
                        }}>
                        <Link>Influencer</Link>
                    </CreateDropdownItem>

                    <CreateDropdownItem
                        onClick={() => {
                            setIsActive(false);
                        }}>
                        <Link to={'/users/create'}>Internal User</Link>
                    </CreateDropdownItem>
                </CreateDropdownContent>
            )}
        </CreateDropdow>
    );
};

export default CreateDropdown;