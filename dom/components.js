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

    select({
        selectFrom = {}, // Objekt mit Key-Value-Paaren, welche value und innerHTML darstellen
        onChange = (values) => {}, // Callback bei einer Änderung. An die Callback wird ein Array aus den Values der Selectboxen gegeben
        parent = false, // Parent für die Selectboxen
        classes = false, // Klassen für das Parent-Element
    }) {

    },

    // Komponente zum Erzeugen mehrerer Selectboxen, die den Inhalt aus einer gemeinsamen Quelle bekommen
    multipleSelects({
        selectFrom = {}, // Objekt mit Key-Value-Paaren, welche value und innerHTML darstellen
        onChange = (values) => {}, // Callback bei einer Änderung. An die Callback wird ein Array aus den Values der Selectboxen gegeben
        parent = false, // Parent für die Selectboxen
        numSelects = 1, // Anzahl der Selectboxen
        classes = false, // Klassen für das Parent-Element
        classesSelect = [], // Klassen für die einzelnen Select-Boxen-Parents
        content = false, // Inhalt (z.B. für eine Beschreibung)
    }) {
        const update = ({
            content: localContent = false
        }) => {
            if (localContent) content = localContent;
            el.remove();
            el = create();
        }

        const create = () => {
            let elParent = dom.create({
                parent,
                classes
            })
            for (let i = 0; i < numSelects; i++) {
                let selectParent = dom.create({
                    classes: ['singleSelect', ...classesSelect],
                    parent: elParent
                })
                components.select({ selectFrom, onchange, parent: selectParent })
            }
        }

        let el = create();
        return el;
    }
}

export default components;