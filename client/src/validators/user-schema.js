import * as yup from 'yup';

const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email('Email should have correct format')
        .required('Email is a required field'),

    password: yup
        .string()
        .required('Password is a required field'),
});

const createSchema = yup.object().shape({
    firstname: yup
        .string()
        .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
        .required('First name is a required field'),
    lastname: yup
        .string()
        .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
        .required('Last name is a required field'),
    email: yup
        .string()
        .email('Email should have correct format')
        .required('Email is a required field'),
    password: yup
        .string()
        .required('Password is a required field')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        .min(8, 'Password is too short - should be 8 chars minimum.'),
    phone: yup
        .string()
        .matches(/^([+]?[0-9\s-]{3,25})*$/i, 'Phone can only contain numbers and special characters'),
    avatar: yup.mixed().test('File size', 'File is too large', (value) => {
        return value
    })
});

const updateSchema = yup.object().shape({
    firstname: yup
        .string()
        .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
        .required('First name is a required field'),
    lastname: yup
        .string()
        .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
        .required('Last name is a required field'),
    email: yup
        .string()
        .email('Email should have correct format')
        .required('Email is a required field'),
    password: yup
        .string()
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .notRequired(),

    phone: yup
        .string()
        .matches(/^([+]?[0-9\s-]{3,25})*$/i, 'Phone can only contain numbers and special characters'),
    avatar: yup.mixed().test('File size', 'File is too large', (value) => {
        return value
    })
});

export {
    loginSchema,
    createSchema,
    updateSchema
};
