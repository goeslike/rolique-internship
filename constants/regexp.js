module.exports = {
    EMAIL_REGEXP: new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$'),
    PASSWORD_REGEXP: new RegExp('^(?=.*?[A-Z])(?=.*?[a-z]).{6,}$'),
    PHONE_REGEXP: new RegExp('^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$')
};
