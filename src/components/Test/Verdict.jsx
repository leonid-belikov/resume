import React from 'react';
import { connect } from 'react-redux';

import { toCelsius } from './commonFunctions'

class Verdict extends React.Component {
    render() {
        const scale = this.props.data.scale;
        const temp = scale === 'c' ? this.props.data.temperature : toCelsius(this.props.data.temperature);
        const text = `Водица ${temp < 100 ? 'не ' : ''}закипит`;
        return <p>{text}</p>
    }
}

export default connect (
    state => ({
        data: state.testPage
    })
)(Verdict);
