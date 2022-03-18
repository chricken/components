const dom = {
    create({
        content = '',
        type = 'div',
        parent = ausgabe,
        classes = [],
        className = false,
        attr = {},
        listeners = {},
        styles = {},
        append = true,
    } = {}) {
        let el = document.createElement(type);
        if (content) el.innerHTML = content;
        if (className) el.className = className;
        if (classes) el.classList.add(...classes);

        Object.entries(attr).forEach(a => neu.setAttribute(...a));
        Object.entries(listeners).forEach(listener => el.addEventListener(...listener));
        Object.entries(styles).forEach(style => el.style[style[0]] = style[1]);

        if (!append) parent.prepend(el);
        else parent.append(el);

        return el;
    }

}

export default dom;