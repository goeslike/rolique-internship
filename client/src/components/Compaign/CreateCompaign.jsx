import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import checkedImg from '../../assets/Check.png';

import {
    CompaignWrapper,
    CompaignContainer,
    CompaignSection,
    CompaignSectionTitle
} from './Compaign.style';

import {Input, Label, CheckBoxLabel} from "../Inputs/CreateInputs.style";

import CreateHeader from "../Header/CreateHeader";
import StatusSelect from "../Dropdown/StatusSelect";
import EffortSelect from "../Dropdown/EffortSelect";
import {CSSTransition} from "react-transition-group";

const CreateCompaign = () => {
    const [effort, setEffort] = useState('');
    const [status, setStatus] = useState('');

    const {register, watch} = useForm({
        mode: "onBlur"
    });

    const hashtags = watch("hashtags");

    return (
        <CompaignWrapper>
            <CreateHeader title={'Create Compaign'} form={'create-compaign'}/>

            <form id={'create-compaign'}>
                <CompaignContainer>
                    <CompaignSection>
                        <CompaignSectionTitle>Basic Information</CompaignSectionTitle>

                        <Label>Title</Label>
                        <Input />

                        <Label>Status</Label>
                        <StatusSelect status={status} setStatus={setStatus}/>

                        <Label>Effort</Label>
                        <EffortSelect effort={effort} setEffort={setEffort}/>

                        <Label>Hashtags</Label>
                        <CSSTransition in={!hashtags} classNames={'alert'} timeout={100} unmountOnExit>
                            <Input />
                        </CSSTransition>
                        <span>
                            <input style={{display: 'none'}} {...register('hashtags')} type={'checkBox'} id={'hashtags'}/>
                            <CheckBoxLabel htmlFor={'hashtags'} style={{
                                backgroundColor: hashtags ? '#FF650E' : '',
                                border: hashtags ? 'none' : '1px solid #BFBFBF'
                            }}>
                                {hashtags && <img src={checkedImg} alt="checked"/>}
                            </CheckBoxLabel>
                            <label htmlFor={'hashtags'}>Compaign won't have a hashtag</label>
                        </span>

                    </CompaignSection>

                    <CompaignSection>
                        <CompaignSectionTitle>Roles</CompaignSectionTitle>

                    </CompaignSection>
                </CompaignContainer>
            </form>
        </CompaignWrapper>
    );
};

export default CreateCompaign;
