const components = {
    dummy({
        content = false,
        classes = false,
        parent = false
    } = {}) {
        let zufall = ~~(Math.random() * 100);

        const update = ({
            content: localContent
        }) => {
            console.log(content, localContent);
            if (localContent) content = localContent;
            el.remove();
            el = create();
        }

        const create = () => {
            const el = document.createElement('div');
            if (content) el.innerHTML = content;
            if (classes) el.className = classes.join(' ');
            if (parent) parent.append(el);
            el.update = update;

            let elZ = document.createElement('div');
            elZ.innerHTML = zufall;
            el.append(elZ);

            return el;
        }

        let el = create();


        return el;
    }
}

export default components;