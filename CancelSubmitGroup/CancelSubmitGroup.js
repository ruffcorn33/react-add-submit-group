  
import React, {Component} from "react";
import './CancelSubmitGroup.css';

let translate = getTranslation("default");

class CancelSubmitGroup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cs-button-wrapper">
                <div className="cs-button-group"> 
                    <button type="reset" className="cancel-button" onClick={this.props.cancelMethod}>Cancel</button>
                    <button type="submit" className="submit-button" onClick={this.props.submitMethod} disabled={this.props.disabled} style={{opacity:this.props.disabled?.5:1}}>Submit</button>
                </div>
            </div>
        )
    }

}

export default CancelSubmitGroup;
