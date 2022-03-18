import dom from './dom.js';

const components = {
    // Dummy-Element, um die Update-Funktion zu testen
    dummy({
        content = false,
        classes = false,
        parent = false
    } = {}) {
        let zufall = ~~(Math.random() * 100);

        // Inhalt updaten
        const update = ({
            content: localContent = false
        }) => {
            if (localContent) content = localContent;
            el.remove();
            el = create();
        }

        const create = () => {
            const el = dom.create({ content, classes, parent });
            el.update = update;

            // Zum Beweis, dass die Inhalt nur upgedatet wird und sich sonst nchts ändert
            let elZ = dom.create({
                content: zufall,
                parent: el
            })

            return el;
        }

        let el = create();
        return el;
    },


}

export default components;