import React from 'react';
import {Cards} from '../../api/lib/collections'
import { Well, Button } from 'react-bootstrap'
import {Tracker} from 'meteor/tracker';
import {compose} from 'react-komposer';
import {AgGridReact} from 'ag-grid-react';

class CardsAdminPage extends React.Component {
    constructor(props){
        super(props);

        this.rowHeight = 30;
        this.state = {
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

    addCard(e) {
        e.preventDefault();

        let val = { "Number" : "22222",
                    "OwnerName" : "Petrov",
                    "OwnerID" : "124",
                    "DateIssued" : "01.04.17",
                    "Status" : "Active"};

        Meteor.call('createCard', val, (err, res) => {
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
            <div className="page admin">
                <header>
                    <h2><i className="fa fa-building-o" aria-hidden="true"> </i> Admin</h2>
                </header>
                <Well>
                    <Button bsStyle="primary" onClick={this.addCard} >Create card</Button>
                </Well>
                    <div
                        style={{height:  '640px'}}
                        className="ag-material">

                        <AgGridReact
                            gridOptions={this.gridOptions}
                            //onRowClicked={this.onRowClicked.bind(this)}
                            onGridReady={this.onGridReady.bind(this)}
                            getNodeChildDetails={this.getNodeChildDetails.bind(this)}

                            showToolPanel={this.state.showToolPanel}
                            quickFilterText={this.state.quickFilterText}
                            icons={this.state.icons}
                            columnDefs={this.state.columnDefs}
                            rowData={this.props.data}

                            // enableSorting="true"
                            // enableFilter="true"
                            // enableColResize="true"
                            rowHeight={this.rowHeight}
                        />
                    </div>

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
    /*Meteor.call('getCompanies', props.search,  (err, data) => {
     if (err) {
     throw new Meteor.Error('error');
     } else {
     onData(null, {data});
     }
     });*/

    if (Meteor.subscribe('Cards').ready()) {
        let data = Cards.find().fetch();
        onData(null, { data });
    };
}

export default compose(getTrackerLoader(reactiveMapper))(CardsAdminPage);
