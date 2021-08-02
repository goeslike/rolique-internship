import * as yup from 'yup';

const createSchema = yup.object().shape({
    firstname: yup
        .string()
        .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
        .required('First name is a required field'),
    lastname: yup
        .string()
        .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
        .required('Last name is a required field'),
    instagram: yup
        .string()
        .matches( /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct url!'),
    instagramFollowers: yup
        .string()
        .when('instagram', {
            is: String,
            then: yup.string().required()
        })
});

export {
    createSchema
};