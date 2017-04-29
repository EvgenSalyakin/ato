import React from 'react';
import { Well, ButtonToolbar, Button, DropdownButton, FormControl, Modal, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap'

import {Outlets} from '../../api/lib/collections'
import {Tracker} from 'meteor/tracker';
import {compose} from 'react-komposer';
import {AgGridReact} from 'ag-grid-react';

export class OutletsAdminPage extends React.Component {
    constructor(props) {
        super(props);
        this.rowHeight = 30;

        this.state = {
            showModal: false,
            showUpModal: false,
            owner: '',
            address: '',
            status: 'active',
            choseId:'',
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
            rowBuffer: 10,
            rowSelection: 'single',
            onSelectionChanged: this.onSelectionChanged
        };
    }

    onSelectionChanged() {

        var selectedRows = this.api.getSelectedRows();
        var selectedRowsString = '';
        selectedRows.forEach( function(selectedRow, index) {
            if (index!=0) {
                selectedRowsString += ', ';
            }
            selectedRowsString += selectedRow.athlete;
        });
        console.log(selectedRowsString)
    }

    createColDefs() {
        var columnDefs = [
            {headerName: "Owner", field: 'Owner', cellClass: 'text-info-link', width: 150},
            {headerName: "Address", field: 'Address', width: 150},
            {headerName: "Status", field: 'Status', width: 130},
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

    closeUpd() {
        this.setState({ showUpModal: false });
    }

    openUpd() {
        this.setState({ showUpModal: true });
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

    updateOutlet(){
        let val = {
            "_id" : this.state.choseId,
            "Owner" : this.state.owner,
            "Address" : this.state.address,
            "Status" : this.state.status
        };
        Meteor.call('updateOutlets', val, (err, res) => {
            if(err) {
                throw new Meteor.Error('Error');
            }
            else {
                this.setState({"errorMessage": <p className="text-danger"><i className="fa fa-exclamation-triangle"> </i> </p>});
            }
        });
        this.closeUpd();
    }

    removeHandle(){
        let val = {
            "_id" : this.state.choseId

        };
        Meteor.call('removeOutlets', val, (err, res) => {
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

    addOutlet(e) {
        e.preventDefault();
        let val = {
            "Owner" : this.state.owner,
            "Address" : this.state.address,
            "Status" : this.state.status
        };

        Meteor.call('createOutlets', val, (err, res) => {
            if(err) {
                throw new Meteor.Error('Error');
            }
            else {
                this.setState({"errorMessage": <p className="text-danger"><i className="fa fa-exclamation-triangle"> </i> <span>{strings.accessingVineyardYourVineyardWasNotFoundTextError}</span></p>});
            }
        });
    }

    render() {
        return (
            <div className="page outlets">
                <header>
                    <h2><i className="fa fa-building-o" aria-hidden="true"> </i> Outlets</h2>
                </header>
                <Well>
                    <Button
                        bsStyle="primary"
                        bsSize="large"
                        onClick={this.open.bind(this)}
                    >
                        Add outlet
                    </Button>
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

                <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Outlet</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup controlId="formBasicText">
                                <ControlLabel>Owner</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="owner"
                                    value={this.state.owner}
                                    placeholder="Enter text"
                                    onChange={this.handleChange.bind(this)}
                                />
                                <ControlLabel>Address</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="address"
                                    value={this.state.address}
                                    placeholder="Enter text"
                                    onChange={this.handleChange.bind(this)}
                                />
                                <ControlLabel>Status</ControlLabel>
                                <FormControl componentClass="select" placeholder="select" name="status" onChange={this.handleChange.bind(this)}  value={this.state.Status}>
                                    <option value="active">active</option>
                                    <option value="inactive">inactive</option>
                                </FormControl>

                                <FormControl.Feedback />
                            </FormGroup>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close.bind(this)}>Close</Button>
                        <Button onClick={this.addOutlet.bind(this)}>Add</Button>
                    </Modal.Footer>
                </Modal>


                <Modal show={this.state.showUpModal} onHide={this.closeUpd.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Outlet</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup controlId="formBasicText">
                                <ControlLabel>Owner</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="owner"
                                    placeholder="Enter text"
                                    onChange={this.handleChange.bind(this)}
                                />
                                <ControlLabel>Address</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="address"
                                    placeholder="Enter text"
                                    onChange={this.handleChange.bind(this)}
                                />
                                <ControlLabel>Status</ControlLabel>
                                <FormControl componentClass="select" placeholder="select" name="status" onChange={this.handleChange.bind(this)}  value={this.state.Status}>
                                    <option value="active">active</option>
                                    <option value="inactive">inactive</option>
                                </FormControl>

                                <FormControl.Feedback />
                            </FormGroup>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeUpd.bind(this)}>Close</Button>
                        <Button onClick={this.updateOutlet.bind(this)}>Update</Button>
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
    if (Meteor.subscribe('Outlets').ready()) {
        let data = Outlets.find().fetch();
        onData(null, { data });
    };
}

export default compose(getTrackerLoader(reactiveMapper))(OutletsAdminPage);
