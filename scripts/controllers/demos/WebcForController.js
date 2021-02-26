const { WebcController } = WebCardinal.controllers;

class WebcForController extends WebcController {
    getModel = (_) => ({
        itemsOne: [
            {
                title: {
                    text: "Title 1",
                    class: "title--bigger",
                    style: "color: red",
                },
                content: {
                    text: "Description 1",
                },
            },
            {
                title: {
                    text: "Title 2",
                },
                content: {
                    text: "Description 2",
                },
            },
            {
                title: {
                    html: 'Title 3 <a href="/more">...read more</a>',
                },
                content: {
                    text: "Description 3",
                },
            },
        ],
        itemsTwo: [
            {
                html: "Item 0",
            },
            {
                html: "Item 1",
            },
            {
                html: "Item 2",
            },
            {
                html: "Item 3",
            },
        ],
        itemsTwoTranslations: [
            {
                html: this.translate("item0"),
            },
            {
                html: this.translate("item1"),
            },
            {
                html: this.translate("item2"),
            },
            {
                html: this.translate("item3"),
            },
        ],
        itemsThree: [
            {
                div: { text: "A" },
                array: [{ text: "a1" }, { text: "a2" }],
            },
            {
                div: { text: "B" },
                array: [{ text: "b1" }, { text: "b2" }, { text: "b3" }],
            },
        ],

        enButton: {
            language: "en",
        },
        roButton: {
            language: "ro",
        },
    });

    constructor(element, history) {
        super(element, history);

        this.setModel(this.getModel());
    }

    async onReady() {
        this.onTagClick("set-language", (model, event) => {
            this.setLanguage(model.language);
        });
    }
}

export default WebcForController; // used by <webc-controller>, <webc-page> and other components
