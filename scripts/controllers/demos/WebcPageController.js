const { WebcController } = WebCardinal.controllers;

class WebcPageController extends WebcController {
    getModel = (_) => ({
        button1: {
            text: this.t("button1")
        },
        button2: {
            text: this.t("button2")
        },
        button3: {
            text: this.t("button3")
        },
        conditionResult: true,
        itemsOne: [
            {
                html: "Item 0",
            },
            {
                html: this.t("Item 1"),
            },
            {
                html: this.t("Item 2"),
            },
            {
                html: this.t("Item 3"),
            },
        ],
        templateInput: {
            type: "text",
            value: 0,
            style: "border: 1px solid #333",
        },
        templateLabel: {
            text: this.t("templateLabel"),
        },
        templateInnerInput: {
            templateInput: {
                type: "text",
                value: 0,
                style: "border: 1px solid red",
            },
            templateLabel: {
                text: this.t("templateLabel"),
            },
        },
    });

    constructor(element, history) {
        super(element, history);

        this.setModel(this.getModel());
    }

    async onReady() {
        let isEven = false;

        this.onTagClick("button1", (model, event) => {
            this.model.button1.text = this.t(isEven ? "button1" : "button2");
            isEven = !isEven;
        });

        setInterval((_) => {
            this.model.conditionResult = !this.model.conditionResult;
            this.model.templateInput.value++;
            this.model.templateInnerInput.templateInput.value += 2;
            this.model.button1.text = this.t(isEven ? "button1" : "button2");
            this.model.button2.text = this.t(isEven ? "button2" : "button3");
            this.model.button3.text = this.t(isEven ? "button3" : "button1");
            isEven = !isEven;
        }, 1000);
    }
}

export default WebcPageController; // used by <webc-controller>, <webc-page> and other components