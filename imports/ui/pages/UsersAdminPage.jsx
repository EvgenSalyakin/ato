import React from 'react';
import {Meteor} from 'meteor/meteor';
import { Well, ButtonToolbar, Button, DropdownButton, FormControl, Modal, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap'
import {Tracker} from 'meteor/tracker';
import {compose} from 'react-komposer';
import {AgGridReact} from 'ag-grid-react';

export class UsersAdminPage extends React.Component {
    constructor(props){
        super(props);

        this.rowHeight = 30;
        this.state = {
            showModal: false,
            showUpModal: false,
            username:'',
            name:'',
            surname:'',
            email:'',
            role:'',
            choseId:'',
            status:'',
            password:'',
            quickFilterText: null,
            showToolPanel: false,
            columnDefs: this.createColDefs(),
            icons: {
                columnRemoveFromGroup: '<i class="fa fa-remove"/>',
                filter: '<i class="fa fa-filter"/>',
                sortAscending: '<i class="fa fa-long-arrow-down"/>',
                sortDescending: '<i class="fa fa-long-arrow-up"/>',
                groupExpanded: '<i class="fa fa-minus-square-o"/>',
                groupContracted: '<i class="fa fa-plus-square-o"/>',
                columnGroupOpened: '<i class="fa fa-minus-square-o"/>',
                columnGroupClosed: '<i class="fa fa-plus-square-o"/>'
            }
        };
        this.gridOptions = {
            rowBuffer: 10
        };

        this.addUser = this.addUser.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.removeHandle = this.removeHandle.bind(this);
        this.openUpd = this.openUpd.bind(this);
        this.closeUpd = this.closeUpd.bind(this);
        this.updateUser = this.updateUser.bind(this);

    }

    createColDefs() {
        var columnDefs = [
            {headerName: "username", field: 'username', width: 70},
            {headerName: "name", field: 'profile.name', cellClass: 'text-info-link', width: 150},
            {headerName: "surname", field: 'profile.firstName', cellClass: 'text-info-link', width: 150},
            {headerName: "email", field: 'email', width: 150},
            {headerName: "role", field: 'profile.role', width: 130},
            {headerName: "status", field: 'status', width: 130},
        ];

        return columnDefs;
    };

    getNodeChildDetails(rowItem) {

        if (rowItem.Snapshot) {
            return {
                group: true,
                children: rowItem.Snapshot,
                field: 'Name',
                key: rowItem.Name
            };
        } else {
            return null;
        }
    }

    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
        params.api.sizeColumnsToFit();
        this.responsiveGrid = () => {
            this.api.sizeColumnsToFit();
        };
        window.addEventListener('resize', this.responsiveGrid)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.responsiveGrid);
    }
    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    removeHandle(){
        let val = {
            "_id" : this.state.choseId

        };
        Meteor.call('removePerson', val, (err, res) => {
            if(err) {
                throw new Meteor.Error('Error');
            }
            else {
                this.setState({"errorMessage": <p className="text-danger"><i className="fa fa-exclamation-triangle"> </i> <span>{strings.accessingVineyardYourVineyardWasNotFoundTextError}</span></p>});
            }
        });
    }

    getId(row){
        this.setState({
            choseId: row.data._id
        });

    }

    closeUpd() {
        this.setState({ showUpModal: false });
    }

    openUpd() {
        this.setState({ showUpModal: true });
    }

    updateUser(){
        let val = {
            "_id" : this.state.choseId,
            "username" : this.state.username,
            "email" : this.state.email,
            "password": this.state.password,
            profile: {
                "name" : this.state.name,
                "firstName" : this.state.surname,
                "role" : this.state.role,
            },
            "status" : this.state.status
        };
        Meteor.call('updatePerson', val, (err, res) => {
            if(err) {
                throw new Meteor.Error('Error');
            }
            else {
                this.setState({"errorMessage": <p className="text-danger"><i className="fa fa-exclamation-triangle"> </i> </p>});
            }
        });
        this.closeUpd();
    }

    addUser(e) {
        e.preventDefault();

        let val = {
            "username" : this.state.username,
            "email" : this.state.email,
            "password": this.state.password,
            profile: {
                "name" : this.state.name,
                "firstName" : this.state.surname,
                "role" : this.state.role,
            },
            "status" : this.state.status
        };

        Meteor.call('createPerson', val, (err, res) => {
            if(err) {
                throw new Meteor.Error('Error');
            }
            else {
                this.setState({"errorMessage": <p className="text-danger"><i className="fa fa-exclamation-triangle"> </i> <span>{strings.accessingVineyardYourVineyardWasNotFoundTextError}</span></p>});
            }
            console.log(res);
        });
    }

    render() {
        return (
            <div className="page admin">
                <header>
                    <h2><i className="fa fa-users" aria-hidden="true"> </i> Users</h2>
                </header>
                <Well>
                    <Button bsStyle="primary" onClick={this.open} >Create user</Button>
                </Well>
                <div
                    style={{height:  '640px'}}
                    className="ag-material">
                    <Button onClick={this.removeHandle.bind(this)}>Remove</Button>
                    <Button onClick={this.openUpd.bind(this)}>Update</Button>
                    <AgGridReact
                        gridOptions={this.gridOptions}
                        onRowClicked={this.getId.bind(this)}
                        onGridReady={this.onGridReady.bind(this)}
                        getNodeChildDetails={this.getNodeChildDetails.bind(this)}
                        showToolPanel={this.state.showToolPanel}
                        quickFilterText={this.state.quickFilterText}
                        icons={this.state.icons}
                        columnDefs={this.state.columnDefs}
                        rowData={this.props.data}
                        rowHeight={this.rowHeight}
                    />
                </div>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Outlet</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup controlId="formBasicText">
                                <ControlLabel>username</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="username"
                                    value={this.state.username}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <ControlLabel>Name</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="name"
                                    value={this.state.name}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <ControlLabel>surname</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="surname"
                                    value={this.state.surname}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <ControlLabel>email</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="email"
                                    value={this.state.email}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <ControlLabel>Password</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="password"
                                    value={this.state.password}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <ControlLabel>Role</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="role"
                                    value={this.state.role}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <ControlLabel>Status</ControlLabel>
                                <FormControl componentClass="select" placeholder="select" name="status" onChange={this.handleChange}  value={this.state.status}>
                                    <option value="active">active</option>
                                    <option value="inactive">inactive</option>
                                </FormControl>

                                <FormControl.Feedback />
                            </FormGroup>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                        <Button onClick={this.addUser}>Add</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showUpModal} onHide={this.closeUpd}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Outlet</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup controlId="formBasicText">
                                <ControlLabel>username</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="username"
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <ControlLabel>Name</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="name"
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <ControlLabel>surname</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="surname"
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <ControlLabel>email</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="email"
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <ControlLabel>Password</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="password"
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <ControlLabel>Role</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="role"
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <ControlLabel>Status</ControlLabel>
                                <FormControl componentClass="select" placeholder="select" name="status" onChange={this.handleChange}  value={this.state.status}>
                                    <option value="active">active</option>
                                    <option value="inactive">inactive</option>
                                </FormControl>

                                <FormControl.Feedback />
                            </FormGroup>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeUpd}>Close</Button>
                        <Button onClick={this.updateUser}>Add</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}

function getTrackerLoader(reactiveMapper) {
    return (props, onData, env) => {
        let trackerCleanup = null;
        const handler = Tracker.nonreactive(() => {
            return Tracker.autorun(() => {
                // assign the custom clean-up function.
                trackerCleanup = reactiveMapper(props, onData, env);
            });
        });

        return () => {
            if (typeof trackerCleanup === 'function') trackerCleanup();
            return handler.stop();
        };
    };
}

function reactiveMapper(props, onData) {
    if (Meteor.subscribe('users').ready()) {
        let data = Meteor.users.find().fetch();
        onData(null, { data });
    };
}

export default compose(getTrackerLoader(reactiveMapper))(UsersAdminPage);
