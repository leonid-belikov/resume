import React from "react";
import css from "./Test.module.css";
import BoilCalc from "./BoilCalc/BoilCalc";

const Test = () => {
    return (
        <div className={css.container}>
            <div className={css.task}>
                <BoilCalc/>
            </div>
        </div>
    )
};

export default Test;
