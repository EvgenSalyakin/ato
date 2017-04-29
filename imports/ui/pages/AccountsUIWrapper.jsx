import  React , {Component} from 'react';
import  ReactDom            from 'react-dom';
import {Template}           from 'meteor/templating';
import {Blaze}              from 'meteor/blaze';

export default class AccountsUIWrapper extends Component{
  componentDidMount(){
    this.view=Blaze.render(Template.loginButtons,
      ReactDom.findDOMNode(this.refs.container));
    }
    componentWillUnmount() {
      // Clean up Blaze view
      Blaze.remove(this.view);
    }
    render() {
      // Just render a placeholder container that will be filled in
      return <span ref="container" />;
    }
  }
