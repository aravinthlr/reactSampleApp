import React from 'React';
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

export default class UpdateEmployeeDetails extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
           activeRecord: props.activeRecord 
        };
    }
    
    updatestate(event, key){
        let obj = {};
        Object.assign(obj, this.state.activeRecord);
        obj[key] = event.target.value;
        this.setState({activeRecord: obj});
    }
    
    componentWillReceiveProps(nextProps){
       this.setState({activeRecord: nextProps.activeRecord }); 
    }
	
    render () {
    if(!this.props.show) return null;    
    return (<form>
				<div className="form-group col-md-3">
                  <label htmlFor="Name">Name:</label>
                  <input type="text" className="form-control" id="Name" value={this.state.activeRecord.name} onChange={(event) => this.updatestate(event, "name")}/>
                </div>

                <div className="form-group  col-md-3">
                  <label htmlFor="MailID">MailID:</label>
                  <input type="text" className="form-control" id="MailID" value={this.state.activeRecord.mailId} onChange={(event) => this.updatestate(event, "mailId")}/>
                </div>
                <div className="form-group row col-md-3">
					<div className="col-md-6">
						<Button bsStyle = "primary" onClick = {() => this.props.save(this.state.activeRecord)} > SAVE < /Button>
					</div>
					<div className="col-md-6"> 
						<Button bsStyle = "primary" onClick = {this.props.cancel} > CANCEL </Button>
					</div>
				</div>
            </form>);
    }
}