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
        hasErrors: false
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


        this.element.querySelector('button[name="modal"]').addEventListener("click", () => {
            this.showModal("Sample content");
        });
        this.element.querySelector('button[name="modal-error"]').addEventListener("click", () => {
            this.showErrorModal("Error message", "Error");
        });
        this.element.querySelector('button[name="modal-redirect"]').addEventListener("click", () => {
            this.showErrorModalAndRedirect("Error message", "contact", 3000);
        });
    }
}

export default AboutController; // used by <wcc-controller>, <wcc-bindable> and other components
