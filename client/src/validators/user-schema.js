import * as yup from "yup";

const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email("Email should have correct format")
        .required("Email is a required field"),

    password: yup
        .string()
        .required('Password is a required field'),
});

const createSchema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should not contain numbers")
        .required("First name is a required field"),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
        .required("Last name is a required field"),
    email: yup
        .string()
        .email("Email should have correct format")
        .required("Email is a required field"),
    password: yup
        .string()
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        .required('Password is a required field'),
});

export {
    loginSchema,
    createSchema
};