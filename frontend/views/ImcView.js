class ImcView extends ViewComponent {
    constructor() {
        super(document.getElementById('imc-view'), new ImcController(), { person: null })
    }

    render() {
        if (this.state.person)
            return `<strong>${this.state.person.imc} - ${this.state.person.imcDescription}</strong>`;
        return 'N/A';
    }

    update(person) {
        this.controller.calculateImc(person).then(person => this.setState({person}))
    }
    
}