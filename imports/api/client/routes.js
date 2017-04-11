import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

//  Layouts
import App from '../../ui/App';
import AppLanding from '../../ui/AppLanding';

//  Pages
import PageNotFound from '../../ui/pages/PageNotFound';
import LandingPage from '../../ui/pages/LandingPage';
import AdminPage from '../../ui/pages/AdminPage';
import CardsAdminPage from '../../ui/pages/CardsAdminPage';
import OutletsAdminPage from '../../ui/pages/OutletsAdminPage';
import UsersAdminPage from '../../ui/pages/UsersAdminPage';
import SingleCardPage from '../../ui/pages/SingleCardPage';

FlowRouter.route('/', {
    name: "Landing page",
    action(){
        mount(AppLanding, {main: <LandingPage />});
    }
});

FlowRouter.route('/admin', {
    name: "Admin page",
    action(){
        mount(App, {main: <AdminPage />});
    }
});

FlowRouter.route('/admin-cards', {
    name: "Cards",
    action(){
        mount(App, {main: <CardsAdminPage />});
    }
});

FlowRouter.route('/admin-outlets', {
    name: "Outlets",
    action(){
        mount(App, {main: <OutletsAdminPage />});
    }
});

FlowRouter.route('/admin-users', {
    name: "Users",
    action(){
        mount(App, {main: <UsersAdminPage />});
    }
});


FlowRouter.route('/card-id', {
    name: "Card",
    action(){
        mount(AppLanding, {main: <SingleCardPage />});
    }
});


FlowRouter.notFound = {
    name: "NotFoundPage",
    action(){
        mount(App, {main: <PageNotFound />});
    }
};

