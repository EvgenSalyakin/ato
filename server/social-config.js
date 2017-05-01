ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '1241349759297161',
    secret: 'effcf06d33a5066c6b8a7465a7c07973',
    //loginStyle: 'redirect'
});

ServiceConfiguration.configurations.update(
    { service: "facebook" },
    { $set: {
        "appId": "1241349759297161",
        "secret": "effcf06d33a5066c6b8a7465a7c07973",
        //"loginStyle": "redirect"
        }
    },
    { upsert: true }
);