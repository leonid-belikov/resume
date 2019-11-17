import React from "react";

class DataInput extends React.Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(e) {
        this.props.changeHandler(e);
    }

    render() {
        return (
            <div>
                <label>
                    <span>Введите температуру нагрева: </span>
                    <input
                        value={this.props.temperature}
                        onChange={this.changeHandler}/>
                </label>
            </div>
        )
    }
}

export default DataInput;
