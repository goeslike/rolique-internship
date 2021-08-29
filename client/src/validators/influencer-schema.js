import * as yup from 'yup';

const createSchema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
        .required('First name is a required field'),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
        .required('Last name is a required field'),
    birthdate: yup
        .date()
        .notRequired(),
    profession: yup
        .string()
        .required('Profession is a required field'),

    instagram: yup
        .string()
        .notRequired()
        .when('instagramFollowers', {
            is: Number,
            then: yup.string().required()
        }),
    instagramFollowers: yup
        .string()
        .notRequired()
        .when('instagram', {
            is: String,
            then: yup.string().required()
        }),

    youTube: yup
        .string()
        .notRequired()
        .when('youTubeFollowers', {
            is: String,
            then: yup.string().required()
        }),
    youTubeFollowers: yup
        .string()
        .notRequired()
        .when('youTube', {
            is: String,
            then: yup.string().required()
        }),

    facebook: yup
        .string()
        .notRequired()
        .when('facebookFollowers', {
            is: Number,
            then: yup.string().required()
        }),
    facebookFollowers: yup
        .string()
        .notRequired()
        .when('facebook', {
            is: String,
            then: yup.string().required()
        }),

    tikTok: yup
        .string()
        .notRequired()
        .when('tikTokFollowers', {
            is: Number,
            then: yup.string().required()
        }),
    tikTokFollowers: yup
        .string()
        .notRequired()
        .when('tikTok', {
            is: String,
            then: yup.string().required()
        }),

    twitter: yup
        .string()
        .notRequired()
        .when('twitterFollowers', {
            is: Number,
            then: yup.string().required()
        }),
    twitterFollowers: yup
        .string()
        .notRequired()
        .when('twitter', {
            is: String,
            then: yup.string().required()
        }),

    blog: yup
        .string()
        .notRequired()
        .when('blogFollowers', {
            is: Number,
            then: yup.string().required()
        }),
    blogFollowers: yup
        .string()
        .notRequired()
        .when('blog', {
            is: String,
            then: yup.string().required().matches(/(\$[0-9.]+(\.[0-9]{2})?)/)
        }),
}, [
    ['instagram', 'instagramFollowers'],
    ['youTube', 'youTubeFollowers'],
    ['facebook', 'facebookFollowers'],
    ['tikTok', 'tikTokFollowers'],
    ['twitter', 'twitterFollowers'],
    ['blog', 'blogFollowers'],
]);

export {
    createSchema
};
