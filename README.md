# react-cancel-submit-group
A React component with a Cancel and a Submit button.

react-cancel-submit-group takes in three possible parameters:

**cancelMethod**

**submitMethod**

**disabled**<br>
If **true**, the Submit button will initially be disabled. Pass a state value that will be set to false when form data is validated.

# Usage

Import react-cancel-submit-group<br>
    import CancelSubmitGroup from "../components/CancelSubmitGroup";

Example:

    <div className="buttons-wrapper">
        <CancelSubmitGroup 
            cancelMethod={(e)=>{that.cancelEditAdd(e)}} 
            submitMethod={(e)=>{that.confirmEditAdd(e)}} 
            disabled={!that.state.newValues}
            language={that.props.language}
        />
    </div>