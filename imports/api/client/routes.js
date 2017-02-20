import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

//  Layouts
import App from '../../ui/layouts/App';

//  Pages
import PageNotFound from '../../ui/pages/PageNotFound';
import HomePage from '../../ui/pages/HomePage';


FlowRouter.route('/', {
    name: "Home",
    action(){
        mount(App, {main: <HomePage/>});
    }
});


FlowRouter.notFound = {
    name: "NotFoundPage",
    action(){
        mount(App, {main: <PageNotFound />});
    }
};

