'use strict';

import components from "./components.js";

const init = () => {
    let inputContent = document.querySelector('#inputContent')
    let btnUpdate = document.querySelector('#btnUpdate')

    let el = components.dummy({
        content: inputContent.value,
        parent: document.body,
        classes: ['rot']
    })

    btnUpdate.addEventListener('click', () => {
        el.update({ content: inputContent.value })
    })
}

init();