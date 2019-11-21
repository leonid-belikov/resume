import React from 'react';

import DataInput from "../DataInput/DataInput";
import Verdict from "../Verdict";

class BoilMultiCalc extends React.Component {
    render() {
        return (
            <div>
                <DataInput inputScale='c'/>
                <DataInput inputScale='f'/>
                <Verdict/>
            </div>
        )
    }
}

export default BoilMultiCalc;
