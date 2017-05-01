import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL',
    sendResetPasswordEmail: false,
    sendVerificationEmail: false,

});
