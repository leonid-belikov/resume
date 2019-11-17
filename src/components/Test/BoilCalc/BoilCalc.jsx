import React from "react";
import css from "./BoilCalc.module.css";
import DataInput from "./DataInput";

class BoilCalc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: 0
        }
    }


    render() {
        return (
            <div className={css.container}>
                <DataInput temperature={this.state.temperature}/>
                {/*<Verdict temperature={this.state.temperature}/>*/}
            </div>
        )
    }
}

export default BoilCalc;
