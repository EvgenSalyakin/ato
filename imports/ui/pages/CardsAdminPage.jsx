import React from 'react';
import {Cards} from '../../api/lib/collections'
import { Well, ButtonToolbar, Button, DropdownButton, FormControl, Modal, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap'
import {Tracker} from 'meteor/tracker';
import {compose} from 'react-komposer';
import {AgGridReact} from 'ag-grid-react';

class CardsAdminPage extends React.Component {
    constructor(props){
        super(props);

        this.rowHeight = 30;
        this.state = {
            showModal: false,
            Number:'',
            OwnerName:'',
            OwnerID:'',
            DateIssued:'',
            Status:'',
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

        this.addCard = this.addCard.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    createColDefs() {
        var columnDefs = [
            {headerName: "Number", field: 'Number', width: 70},
            {headerName: "OwnerName", field: 'OwnerName', cellClass: 'text-info-link', width: 150},
            {headerName: "OwnerID", field: 'OwnerID', cellClass: 'text-info-link', width: 150},
            {headerName: "Date issued", field: 'DateIssued', width: 150},
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

    addCard(e) {
        e.preventDefault();

        let val = { "Number" : this.state.Number,
                    "OwnerName" : this.state.OwnerName,
                    "OwnerID" : this.state.OwnerID,
                    "DateIssued" : this.state.DateIssued,
                    "Status" : this.state.Status
        };

        Meteor.call('createCard', val, (err, res) => {
            if(err) {
                throw new Meteor.Error('Error');
            }
        });
    }

    render() {
        return (
            <div className="page admin">
                <header>
                    <h2><i className="fa fa-building-o" aria-hidden="true"> </i> Admin</h2>
                </header>
                <Well>
                    <Button bsStyle="primary" onClick={this.open} >Create card</Button>
                </Well>
                    <div
                        style={{height:  '640px'}}
                        className="ag-material">

                        <AgGridReact
                            gridOptions={this.gridOptions}
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
                                <ControlLabel>Number</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="Number"
                                    value={this.state.Number}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <ControlLabel>Owner Name</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="OwnerName"
                                    value={this.state.OwnerName}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <ControlLabel>OwnerID</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="OwnerID"
                                    value={this.state.OwnerID}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <ControlLabel>DateIssued</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="DateIssued"
                                    value={this.state.DateIssued}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <ControlLabel>Status</ControlLabel>
                                <FormControl componentClass="select"
                                             placeholder="select"
                                             name="Status"
                                             onChange={this.handleChange}
                                             value={this.state.Status}>
                                    <option value="active">active</option>
                                    <option value="inactive">inactive</option>
                                </FormControl>

                                <FormControl.Feedback />
                            </FormGroup>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                        <Button onClick={this.addCard}>Add</Button>
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

    if (Meteor.subscribe('Cards').ready()) {
        let data = Cards.find().fetch();
        onData(null, { data });
    };
}

export default compose(getTrackerLoader(reactiveMapper))(CardsAdminPage);
