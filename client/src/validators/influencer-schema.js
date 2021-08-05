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
    profession: yup
        .string()
        .required('Profession is a required field'),

    instagram: yup
        .string()
        .when('instagramFollowers', {
            is: String,
            then: yup.string().required()
        }),
    instagramFollowers: yup
        .string()
        .when('instagram', {
            is: String,
            then: yup.string().required()
        }),

    youtube: yup
        .string()
        .when('youtubeFollowers', {
            is: String,
            then: yup.string().required()
        }),
    youtubeFollowers: yup
        .string()
        .when('youtube', {
            is: String,
            then: yup.string().required()
        }),

    facebook: yup
        .string()
        .when('facebookFollowers', {
            is: String,
            then: yup.string().required()
        }),
    facebookFollowers: yup
        .string()
        .when('facebook', {
            is: String,
            then: yup.string().required()
        }),

    tiktok: yup
        .string()
        .when('tiktokFollowers', {
            is: String,
            then: yup.string().required()
        }),
    tiktokFollowers: yup
        .string()
        .when('tiktok', {
            is: String,
            then: yup.string().required()
        }),

    twitter: yup
        .string()
        .when('twitterFollowers', {
            is: String,
            then: yup.string().required()
        }),
    twitterFollowers: yup
        .string()
        .when('twitter', {
            is: String,
            then: yup.string().required()
        }),

    blog: yup
        .string()
        .when('blogFollowers', {
            is: String,
            then: yup.string().required()
        }),
    blogFollowers: yup
        .string()
        .when('blog', {
            is: String,
            then: yup.string().required().matches(/(\$[0-9.]+(\.[0-9]{2})?)/)
        }),
}, [
    ['instagram', 'instagramFollowers'],
    ['youtube', 'youtubeFollowers'],
    ['facebook', 'facebookFollowers'],
    ['tiktok', 'tiktokFollowers'],
    ['twitter', 'twitterFollowers'],
    ['blog', 'blogFollowers'],
]);

export {
    createSchema
};
