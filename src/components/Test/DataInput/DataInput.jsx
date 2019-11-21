import React from "react";
import { connect } from 'react-redux';

import { tryConvert, toCelsius, toFahrenheit } from './../commonFunctions'
import css from './DataInput.module.css'

const scaleNames = {
    'c': 'Цельсия',
    'f': 'Фаренгейта'
};

class DataInput extends React.Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(e) {
        switch (this.props.inputScale) {
            case 'c':
                this.props.onChangeCelsius(e.target.value);
                break;
            case 'f':
                this.props.onChangeFahrenheit(e.target.value);
                break;
            default:
                console.error(`Wrong scale: ${this.props.state.scale}`)
        }
    }

    render() {
        const temp = this.props.state.temperature;
        const scale = this.props.state.scale;
        const celsiusTemp = scale === 'c' ? temp : tryConvert(temp, toCelsius);
        const fahrenheitTemp = scale === 'f' ? temp : tryConvert(temp, toFahrenheit);
        return (
            <label className={css.container}>
                <span>Введите температуру нагрева в градусах {scaleNames[this.props.inputScale]}:</span>
                <input
                    value={this.props.inputScale === 'c' ? celsiusTemp : fahrenheitTemp}
                    onChange={this.changeHandler}/>
            </label>
        )
    }
}

export default connect(
    state => ({
        state: state.testPage
    }),
    dispatch => ({
        onChangeCelsius: (temperature) => {
            dispatch({type: 'CHANGE_CELSIUS', temperature})
        },
        onChangeFahrenheit: (temperature) => {
            dispatch({type: 'CHANGE_FAHRENHEIT', temperature})
        }
    })
)(DataInput);
