class ViewComponent {
    constructor(element, controller, initialState={}) {
        if (!element) throw Error('No exists')
        this.element = element
        this.controller = controller
        this.state = initialState
    }

    paint() {
        this.element.innerHTML = this.render();
    }

    setState(newState) {
        this.state = {
            ...this.state,
            ...newState
        }
        this.paint();
    }

    async update() {
        this.paint();
    }
}