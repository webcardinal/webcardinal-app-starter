const { Controller } = WebCardinal.controllers;

class AboutController extends Controller {
    getModel = _ => ({ 
        input: {
            label: 'Seconds',
            type: 'text',
            value: '0'
        }
     })

    constructor(element) {
        super(element);

        console.log('Hello World!');

        this.setModel(this.getModel());

        console.log(this.model);
    }

    async onReady() {
        setInterval(_ => {
            this.model.input.value++;
        }, 1000);
    }
}

export default AboutController; // used by <wcc-controller> and other components