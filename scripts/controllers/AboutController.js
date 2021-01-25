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

    constructor(element) {
        super(element);

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
        }, 1000);

        this.element.querySelector('button[name="modal"]').addEventListener("click", () => {
            const modal = Object.assign(document.createElement("wcc-modal"), {
                modalName: "demo-modal",
                modalTitle: "test",
            });
            this.element.appendChild(modal);

            modal.addEventListener("initialised", (e) => {
                const modalElement = e.detail;
                modalElement.querySelector(".btn-confirm").addEventListener("click", () => {
                    console.log("Custom confirm button pressed");
                    modal.remove();
                });
                modalElement.querySelector(".btn-close").addEventListener("click", () => {
                    console.log("Custom close button pressed");
                    modal.remove();
                });
            });
            modal.addEventListener("confirmed", () => {
                modal.remove();
            });
            modal.addEventListener("closed", () => {
                modal.remove();
            });
        });
    }
}

export default AboutController; // used by <wcc-controller>, <wcc-bindable> and other components
