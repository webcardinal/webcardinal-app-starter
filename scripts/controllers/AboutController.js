const { Controller } = WebCardinal.controllers;

class AboutController extends Controller {
    getModel = (_) => ({
        input: {
            label: "Seconds",
            type: "text",
            value: "0",
            style: "border: 1px solid #333",
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
            // console.warn("test", "test2");
            // console.log(test);
        }, 1000);

        this.element.querySelector('button[name="modal"]').addEventListener("click", () => {
            this.showModal("Sample content");            
        });
        this.element.querySelector('button[name="modal-redirect"]').addEventListener("click", () => {
            this.showErrorModalAndRedirect("Error message", "contact", 3000);            
        });
    }
}

export default AboutController; // used by <wcc-controller>, <wcc-bindable> and other components
