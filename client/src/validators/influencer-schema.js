import * as yup from 'yup';

const createSchema = yup.object().shape({
    firstname: yup
        .string()
        // .string.min(2, 'First name must be longer than 2 characters')
        // .string.max(30, 'First name must be shorter than 30 characters')
        .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
        .required('First name is a required field'),
    lastname: yup
        .string()
        // .string.min(2, 'First name must be longer than 2 characters')
        // .string.max(30, 'First name must be shorter than 30 characters')
        .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
        .required('Last name is a required field'),
    birthdate: yup.date()
});

export {
    createSchema
};