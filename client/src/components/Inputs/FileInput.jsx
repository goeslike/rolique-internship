import React from 'react';
import {Controller} from 'react-hook-form';
import Dropzone from 'react-dropzone'
import {FileLabel, Input, Label} from "./CreateInputs.style";

const FileInput = ({control, name}) => {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={({ onChange, onBlur, value }) => (
                <>
                    <Dropzone onDrop={onChange}>
                        {({ getRootProps, getInputProps }) => (
                            <div
                                {...getRootProps()}
                            >
                                <Input accept='image/*' {...getInputProps()} name={name} onBlur={onBlur} />
                                <p>Drag 'n' drop files here, or click to select files</p>
                            </div>
                        )}
                    </Dropzone>
                    <div>
                        {/*{value.map((f, index) => (*/}
                        {/*    <div key={index}>*/}
                        {/*        <h3>*/}
                        {/*            icon*/}
                        {/*        </h3>*/}
                        {/*        <div>{f.name}</div>*/}
                        {/*    </div>*/}
                        {/*))}*/}
                    </div>
                </>
            )}
        />
    );
};

export default FileInput;