import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

import checkedImg from '../../assets/Check.png';
import plusIcon from '../../assets/plus.png';

import {
    CompaignWrapper,
    CompaignContainer,
    CompaignSection,
    CompaignSectionTitle,
    CheckSpan,
    NewBrand,
    ModalTitle,
    Cancel,
    CreateBrand,
    Buttons,
    ModalWrapper,
    Line,
    ToggleSection,
    Description
} from './Compaign.style';

import {
    Input,
    Label,
    CheckBoxLabel,
    FileLabel,
    Switch,
    SwitchCheckbox,
    SwitchSlider
} from "../Inputs/CreateInputs.style";

import CreateHeader from "../Header/CreateHeader";
import StatusSelect from "../Dropdown/StatusSelect";
import EffortSelect from "../Dropdown/EffortSelect";
import {CSSTransition} from "react-transition-group";
import BrandSelect from "../Dropdown/BrandSelect";
import BrandModal from "../Modal/BrandModal";
import TlSelect from "../Dropdown/TLSelect";

const CreateCompaign = () => {
    const [effort, setEffort] = useState('');
    const [status, setStatus] = useState('');
    const [brand, setBrand] = useState('');
    const [TL, setTL] = useState('');

    const [modalActive, setModalActive] = useState(false);

    const [preview, setPreview] = useState();
    const [image, setImage] = useState();

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            }
            reader.readAsDataURL(image);
        } else {
            setPreview(null);
        }
    }, [image]);

    const {register, watch} = useForm({
        mode: "onBlur"
    });

    const hashtags = watch("hashtags");
    const budget = watch("budget");

    const influencerBudget = watch('influencerBudget');
    const socialBudget = watch('socialBudget');
    const productionBudget = watch('productionBudget');
    const travelBudget = watch('travelBudget');
    const handlingBudget = watch('handlingBudget');
    const otherBudget = watch('otherBudget');

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
                        <CheckSpan>
                            <input style={{display: 'none'}} {...register('hashtags')} type={'checkBox'} id={'hashtags'}/>
                            <CheckBoxLabel htmlFor={'hashtags'} style={{
                                backgroundColor: hashtags ? '#FF650E' : '',
                                border: hashtags ? 'none' : '1px solid #BFBFBF'
                            }}>
                                {hashtags && <img src={checkedImg} alt="checked"/>}
                            </CheckBoxLabel>
                            <div>Compaign won't have a hashtag</div>
                        </CheckSpan>

                        <CompaignSectionTitle>Client</CompaignSectionTitle>
                        <Label>Brand</Label>
                        <BrandSelect brand={brand} setBrands={setBrand}/>

                        <NewBrand onClick={() => setModalActive(true)}>
                            <img src={plusIcon} alt="plus"/>
                            <div>Add New Brand</div>
                        </NewBrand>

                    </CompaignSection>

                    <CompaignSection>
                        <CompaignSectionTitle>Roles</CompaignSectionTitle>

                        <Label>Team Lead</Label>
                        <TlSelect TL={TL} setTL={setTL}/>

                        <CompaignSectionTitle style={{marginTop: '39px'}}>Misc.</CompaignSectionTitle>

                        <Label>Compaign Logo</Label>
                        <FileLabel />

                        <Label>Compaign Description</Label>
                        <Description />

                        <Label>Internal Notes</Label>
                        <Description />

                    </CompaignSection>
                </CompaignContainer>

                <Line />

                <CompaignContainer>
                    <CompaignSection>
                        <CompaignSectionTitle>Budgets & Targets</CompaignSectionTitle>
                        <CheckSpan>
                            <input style={{display: 'none'}} {...register('budget')} type={'checkBox'} id={'budget'}/>
                            <CheckBoxLabel htmlFor={'budget'} style={{
                                backgroundColor: budget ? '#FF650E' : '',
                                border: budget ? 'none' : '1px solid #BFBFBF'
                            }}>
                                {budget && <img src={checkedImg} alt="checked"/>}
                            </CheckBoxLabel>
                            <div>Compaign won't have a budget</div>
                        </CheckSpan>

                        <CSSTransition in={!budget} classNames={'alert'} timeout={100} unmountOnExit>
                            <>
                                <Label>Total Budget</Label>
                                <Input defaultValue={'$ '} />

                                <ToggleSection>
                                    <Switch>
                                        <SwitchCheckbox type="checkBox" {...register('influencerBudget')}/>
                                        <SwitchSlider />
                                    </Switch>
                                    <div>
                                        <Label style={{color: influencerBudget ? '' : 'rgba(0, 0, 0, 0.3)'}}>Influencer Budget</Label>
                                        <Input
                                            style={{color: influencerBudget ? '' : 'rgba(0, 0, 0, 0.3)'}}
                                            defaultValue={'$ '}
                                            readOnly={!influencerBudget}
                                        />
                                    </div>
                                </ToggleSection>

                                <ToggleSection>
                                    <Switch>
                                        <SwitchCheckbox type="checkBox" {...register('socialBudget')}/>
                                        <SwitchSlider />
                                    </Switch>
                                    <div>
                                        <Label style={{color: socialBudget ? '' : 'rgba(0, 0, 0, 0.3)'}}>Social Ads Media Budget</Label>
                                        <Input
                                            style={{color: socialBudget ? '' : 'rgba(0, 0, 0, 0.3)'}}
                                            defaultValue={'$ '}
                                            readOnly={!socialBudget}
                                        />
                                    </div>
                                </ToggleSection>

                                <ToggleSection>
                                    <Switch>
                                        <SwitchCheckbox type="checkBox" {...register('productionBudget')}/>
                                        <SwitchSlider />
                                    </Switch>
                                    <div>
                                        <Label style={{color: productionBudget ? '' : 'rgba(0, 0, 0, 0.3)'}}>Production Budget</Label>
                                        <Input
                                            style={{color: productionBudget ? '' : 'rgba(0, 0, 0, 0.3)'}}
                                            defaultValue={'$ '}
                                            readOnly={!productionBudget}
                                        />
                                    </div>
                                </ToggleSection>

                                <ToggleSection>
                                    <Switch>
                                        <SwitchCheckbox type="checkBox" {...register('travelBudget')}/>
                                        <SwitchSlider />
                                    </Switch>
                                    <div>
                                        <Label style={{color: travelBudget ? '' : 'rgba(0, 0, 0, 0.3)'}}>Travel Budget</Label>
                                        <Input
                                            style={{color: travelBudget ? '' : 'rgba(0, 0, 0, 0.3)'}}
                                            defaultValue={'$ '}
                                            readOnly={!travelBudget}
                                        />
                                    </div>
                                </ToggleSection>

                                <ToggleSection>
                                    <Switch>
                                        <SwitchCheckbox type="checkBox" {...register('handlingBudget')}/>
                                        <SwitchSlider />
                                    </Switch>
                                    <div>
                                        <Label style={{color: handlingBudget ? '' : 'rgba(0, 0, 0, 0.3)'}}>Handling Free</Label>
                                        <Input
                                            style={{color: handlingBudget ? '' : 'rgba(0, 0, 0, 0.3)'}}
                                            defaultValue={'$ '}
                                            readOnly={!handlingBudget}
                                        />
                                    </div>
                                </ToggleSection>

                                <ToggleSection>
                                    <Switch>
                                        <SwitchCheckbox type="checkBox" {...register('otherBudget')}/>
                                        <SwitchSlider />
                                    </Switch>
                                    <div>
                                        <Label style={{color: otherBudget ? '' : 'rgba(0, 0, 0, 0.3)'}}>Other Budget</Label>
                                        <Input
                                            style={{color: otherBudget ? '' : 'rgba(0, 0, 0, 0.3)'}}
                                            defaultValue={'$ '}
                                            readOnly={!otherBudget}
                                        />
                                    </div>
                                </ToggleSection>
                            </>
                        </CSSTransition>
                    </CompaignSection>
                </CompaignContainer>
            </form>


            <BrandModal active={modalActive} setModalActive={setModalActive}>
                <ModalWrapper>
                    <ModalTitle>Add new Brand</ModalTitle>

                    <Label>Name</Label>
                    <Input />

                    <Label>Logo</Label>
                    <Input
                        style={{display: 'none'}}
                        id='avatar'
                        type='file'
                        accept='image/*'
                        onInput={(event) => {
                            const file = event.target.files[0];
                            if (file) {
                                setImage(file);
                            } else {
                                setImage(null);
                            }
                        }}
                    />
                    <FileLabel style={{backgroundImage: `url(${preview})`}} htmlFor='avatar'/>

                    <Buttons>
                        <CreateBrand>Create Brand</CreateBrand>
                        <Cancel onClick={() => setModalActive(false)}>Cancel</Cancel>
                    </Buttons>
                </ModalWrapper>
            </BrandModal>
        </CompaignWrapper>
    );
};

export default CreateCompaign;
