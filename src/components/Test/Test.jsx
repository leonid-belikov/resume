import React from "react";
import css from "./Test.module.css";
import BoilCalc from "./BoilCalc/BoilCalc";

const Test = () => {
    return (
        <div className={css.container}>
            test
            <BoilCalc/>
        </div>
    )
};

export default Test;
