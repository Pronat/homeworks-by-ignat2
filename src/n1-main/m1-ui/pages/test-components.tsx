import React from 'react';
import SuperButton from "../common/c2-SuperButton/SuperButton";
import SuperInputText from "../common/c1-SuperInputText/SuperInputText";
import SuperCheckbox from "../common/c3-SuperCheckbox/SuperCheckbox";

const TestComponents = () => {
    return (
        <div>
            TestComponents
            <div><SuperButton>test button</SuperButton></div>
            <div><SuperInputText></SuperInputText></div>
            <div><SuperCheckbox></SuperCheckbox></div>
        </div>
    );
};

export default TestComponents;