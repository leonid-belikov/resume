import React from 'react';

const Verdict = (props) => {
    const temp = props.temperature;
    if (temp >= 100) {
        return <p>Водица закипит.</p>
    }
    return <p>Водица не закипит.</p>
};

export default Verdict;
