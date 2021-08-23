import React, {useState} from 'react';
import {Link} from "react-router-dom";

import arrowUpper from '../../assets/dropdown/uper.png';
import arrowDown from '../../assets/dropdown/down.png';

import {
    Create,
    CreateDropdownButton,
    CreateDropdownContent,
    CreateDropdownItem
} from './CreateDropdown.style';

const CreateDropdown = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <Create>
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
                        <Link to={'/compaigns/create'}>Compaign</Link>
                    </CreateDropdownItem>

                    <CreateDropdownItem
                        onClick={() => {
                            setIsActive(false);
                        }}>
                        <Link to={'/influencers/create'}>Influencer</Link>
                    </CreateDropdownItem>

                    <CreateDropdownItem
                        onClick={() => {
                            setIsActive(false);
                        }}>
                        <Link to={'/users/create'}>Internal User</Link>
                    </CreateDropdownItem>
                </CreateDropdownContent>
            )}
        </Create>
    );
};

export default CreateDropdown;
