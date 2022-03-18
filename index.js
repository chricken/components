'use strict';

import components from "./dom/components.js";

const init = () => {
    let inputContent = document.querySelector('#inputContent')
    let btnUpdate = document.querySelector('#btnUpdate')

    let el1 = components.dummy({
        content: inputContent.value,
        parent: document.body,
        classes: ['rot']
    })
    let el2 = components.dummy({
        content: inputContent.value,
        parent: document.body,
        classes: ['rot']
    })
    let el3 = components.dummy({
        content: inputContent.value,
        parent: document.body,
        classes: ['rot']
    })

    btnUpdate.addEventListener('click', () => {
        el1.update({ content: inputContent.value })
        el2.update({ content: inputContent.value })
        el3.update({ content: inputContent.value })
    })
}

init();