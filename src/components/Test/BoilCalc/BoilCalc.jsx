import React from "react";
import css from "./BoilCalc.module.css";
import DataInput from "./DataInput";
import Verdict from "./Verdict";

class BoilCalc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: ''
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
            <div className={css.container}>
                <DataInput
                    changeHandler={this.changeHandler}
                    temperature={this.state.temperature}/>
                <Verdict temperature={this.state.temperature}/>
            </div>
        )
    }
}

export default BoilCalc;
