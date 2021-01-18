import CardinalController from "/webcardinal/base/controllers/ContainerController.js";

class AboutController extends CardinalController {
    getModel = _ => ({ number: 0 })

    constructor(element, history) {
        super(element, history);

        console.log('Hello World!');

        this.model = this.setModel(this.getModel());

        setInterval(_ => {
            this.model.number++;
        }, 1000);
    }
}

export default AboutController; // used by <wcc-controller> and other components