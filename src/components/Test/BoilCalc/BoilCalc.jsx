import React from "react";
import DataInput from "../DataInput/DataInput";
import Verdict from "../Verdict";

class BoilCalc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: 25
        };
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e) {
        this.setState({
            temperature: e.target.value
        })
    }

    render() {
        return (
            <div>
                <DataInput
                    changeHandler={this.changeHandler}
                    temperature={this.state.temperature}
                    scale='c'/>
                <Verdict temperature={this.state.temperature}/>
            </div>
        )
    }
}

export default BoilCalc;
