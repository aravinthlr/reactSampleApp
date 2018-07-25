import React from "react";

class ErrorDisplay extends React.Component {
render() {
    console.log(this.props,"props")
    return this.props.error ? (<h4>{this.props.message}</h4>) : null;
    
}
}
            
            export default ErrorDisplay;