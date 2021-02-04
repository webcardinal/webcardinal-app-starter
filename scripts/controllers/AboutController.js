const { WccController } = WebCardinal.controllers;

class AboutController extends WccController {
    getModel = (_) => ({
        input: {
            label: "Seconds",
            type: "text",
            value: "0",
            style: "border: 1px solid #333",
        },
        conditionResult: true,
        wasSubmitted: false,
        hasErrors: false,
        itemsOne: [
            {
                innerHTML: "Item 0",
            },
            {
                innerHTML: "Item 1",
            },
            {
                innerHTML: "Item 2",
            },
            {
                innerHTML: "Item 3",
            },
        ],
        itemsTwo: [
            {
                title: {
                    innerText: "Title 1",
                    class: "title--bigger",
                    style: "color: red",
                },
                content: {
                    innerText: "Description 1",
                },
            },
            {
                title: {
                    innerText: "Title 2",
                },
                content: {
                    innerText: "Description 2",
                },
            },
            {
                title: {
                    innerHTML: 'Title 3 <a href="/more">...read more</a>',
                },
                content: {
                    innerText: "Description 3",
                },
            },
        ],
        itemsThree: [
            {
                div: { innerText: "A" },
                array: [{ innerText: "a1" }, { innerText: "a2" }],
            },
            {
                div: { innerText: "B" },
                array: [{ innerText: "b1" }, { innerText: "b2" }, { innerText: "b3" }],
            },
        ],
        addItem: {
            innerText: "Add +",
            element: true,
        },
        removeItem: {
            innerText: "Remove -",
            element: true,
        },
        modifyItem: {
            innerText: `What's your lucky number?`,
            element: true,
        },
        reverse: {
            innerText: `Reverse ↻`,
            element: true,
        },
        button1: {
            innerText: "Button 1",
            data: "button1 data",
        },
        button2: {
            innerText: "Button 1",
            data: "button2 data"
        },
    });

    constructor(element, history) {
        super(element, history);

        console.log("Hello World!");

        this.setModel(this.getModel());

        console.log({
            proxy: this.model,
            model: JSON.stringify(this.model),
        });
    }

    async onReady() {
        setInterval((_) => {
            this.model.input.value++;
            this.model.conditionResult = !this.model.conditionResult;
            // console.warn("test", "test2");
            // console.log(test);
        }, 1000);

        // testing various conditions update
        const updateSubmittedInfo = () => {
            setTimeout(() => {
                this.model.wasSubmitted = true;
        
                setTimeout(() => {
                    this.model.hasErrors = true;
        
                    setTimeout(() => {
                        this.model.wasSubmitted = false;
                        this.model.hasErrors = false;
        
                        updateSubmittedInfo();
                    }, 1000)
                }, 1000);
            }, 1000);
        };
        updateSubmittedInfo();

        this.onTagClick('showModal', (model, event) => {
            this.showModal("Sample content");
        });
        this.onTagClick('showModalError', (model, event) => {
            this.showErrorModal("Error message", "Error");
        });
        this.onTagClick('showModalRedirect', (model, event) => {
            this.showErrorModalAndRedirect("Error message", "Redirecting to contact", "contact", 3000);
        });

        this.model.addItem.element.addEventListener("click", () => {
            let index = this.model.itemsTwo.length + 1;
            this.model.itemsTwo.push({
                title: { innerText: `Title ${index}` },
                content: { innerText: `Span ${index}` },
            });
        });

        this.model.removeItem.element.addEventListener("click", () => {
            this.model.itemsTwo.splice(-1, 1);
        });

        this.model.modifyItem.element.addEventListener("click", () => {           
            this.model.itemsTwo[0] = {
                innerText: `My lucky number is ${Math.round(Math.random() * 100)}!`
            };
        });

        this.model.reverse.element.addEventListener("click", () => {
            this.model.itemsTwo.reverse();
        });

        const sample1TagSecondListener = (model, event) => {
            console.log(`2) Tag sample1`, model, event);
        };

        this.onTag('sample1', 'click', (model, event) => {
            console.log(`1) Tag sample1`, model, event);
        });
        this.onTagClick('sample1', sample1TagSecondListener);
        this.onTagClick('sample1', (model, event) => {
            console.log(`3) Tag sample1`, model, event);
        });

        this.onTagClick('button1', (model, event) => {
            console.log(`Tag button1 click`, model, event);
            alert(`Tag button1 click with data: ${model.data}`);
        });
        this.onTagClick('button2', (model, event) => {
            console.log(`Tag button2 click`, model, event);
            alert(`Tag button2 click with data: ${model.data}`);
        });

        setTimeout(() => {
            this.offTagClick('sample1', sample1TagSecondListener);
        }, 2000)
    }
}

export default AboutController; // used by <wcc-controller>, <wcc-bindable> and other components
