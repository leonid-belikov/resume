import React from "react";
import css from "./Test.module.css";
// import BoilCalc from "./BoilCalc/BoilCalc";
import BoilMultiCalc from "./BoilMultiCalc/BoilMultiCalc";

const Test = () => {
    return (
        <div className={css.container}>
            {/*<div className={css.task}>*/}
            {/*    <h3>Синхронизация поля ввода и абзаца с текстом</h3>*/}
            {/*    <BoilCalc/>*/}
            {/*</div>*/}
            <div className={css.task}>
                <h3>Синхронизация нескольких полей ввода и абзаца с текстом</h3>
                <BoilMultiCalc/>
            </div>
        </div>
    )
};

export default Test;
