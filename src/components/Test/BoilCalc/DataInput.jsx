import React from "react";

class DataInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>">Введите температуру нагрева:
                    <input type="text" value={this.props.temperature}/>
                </label>
            </div>
        )
    }
}

export default DataInput;
