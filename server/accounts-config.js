// import { Accounts } from 'meteor/accounts-base';
//
// Accounts.ui.config({
//     passwordSignupFields: 'USERNAME_AND_EMAIL'
//     // sendResetPasswordEmail: false,
//     // sendVerificationEmail: false,
//
// });

import { Accounts } from 'meteor/std:accounts-ui';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL',
    loginPath: '/'
    // sendResetPasswordEmail: false,
    // sendVerificationEmail: false,
    // onSignedInHook: () => FlowRouter.go('/'),
    // onSignedOutHook: () => FlowRouter.go('/')
});