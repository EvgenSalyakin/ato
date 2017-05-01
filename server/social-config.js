ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '1468682329844776',
    secret: 'dea85b5252559890091f4f02f763829e',
    //loginStyle: 'redirect'
});

ServiceConfiguration.configurations.update(
    { service: "facebook" },
    { $set: {
        "appId": "1468682329844776",
        "secret": "dea85b5252559890091f4f02f763829e",
        //"loginStyle": "redirect"
        }
    },
    { upsert: true }
);