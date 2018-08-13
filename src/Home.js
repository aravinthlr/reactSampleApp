import React from "react";
import {
    Grid,
    GridColumn as Column
} from '@progress/kendo-react-grid';
import axios from 'axios';
import '@progress/kendo-theme-default/dist/all.css';
import './Home.css';
import TableBody from './TableBody';
import UpdateEmployeeDetails from './UpdateEmployeeDetails';


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gridData: [],
            editForm: false,
            activeRecord: {}
        }
    }
    
    hideForm() {
		this.setState({editForm: false});  
    }
    
    saveProfile(activeRecord) {
        let obj1 = this.state.gridData.map(function(record) {
            if(record.empID == activeRecord.empID) {
               record = activeRecord;
            }
            return record;
        });
        this.setState({editForm: false,gridData: obj1});
    }

    componentDidMount() {
        axios('/data/employee.JSON')
            .then((response) => {
                this.setState({
                    gridData: response.data.employees
                });
            })
    }
    
    render() {
        return ( <div><table><thead>
		<tr><th>ID</th>
		<th>NAME</th>
		<th>ROLE</th>
		<th>MAILID</th>
        <th>ACTION</th></tr></thead>
        <tbody><TableBody tableData = {this.state.gridData} loadProfile={(activeRecord) => this.setState({editForm: true,activeRecord: activeRecord})}/></tbody></table>
        <UpdateEmployeeDetails show={this.state.editForm} activeRecord={this.state.activeRecord} save={(activeRecord)=>this.saveProfile(activeRecord)} cancel={() => this.hideForm()}/>
        </div>);
    }
}
