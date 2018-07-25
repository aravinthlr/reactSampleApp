import React from "react";
import { Grid, Column } from '@progress/kendo-react-grid';
import axios from 'axios';

class Home extends React.Component {
    
    constructor(props){
        super(props);
        this.state= {
            gridData : []
        }
    }
    
    componentDidMount() {
       axios('/data/employee.JSON')
        .then((response) => {
           this.setState({gridData:response.data.employees});
       })
    }
    render() {
        return (<div><Grid
                    style={{ height: '400px' }}
                    data={this.state.gridData}
                >
                <Column field="name" title="ID" width="40px" />
                <Column field="role" title="ID" width="40px" />
                <Column field="empID" title="ID" width="40px" />
                </Grid></div>)
    }
}

export default Home;