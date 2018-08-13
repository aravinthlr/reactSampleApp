import React from "react";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

export default class TableBody extends React.Component {
    
    render() {
        return this.props.tableData.map((rowData) => {
			 return (<tr><td>{rowData.empID}</td>
					 <td>{rowData.name}</td>
					 <td>{rowData.role}</td>
					 <td>{rowData.mailId}</td>
					 <td><Button bsStyle = "secondary" onClick={() => this.props.loadProfile(rowData)}> EDIT < /Button></td></tr>);
        });
    }

}
