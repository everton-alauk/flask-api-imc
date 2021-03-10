import ImcController from '../controller/ImcController'
import ViewComponent from '../framework/ViewComponent'

export default class ImcTableView extends ViewComponent {
    constructor() {
        super(document.getElementById('imc-table'), new ImcController(), { data: [] })
        this.controller.imcTable().then(data => this.setState({data}))
    }

    render() {
        if (this.state.data)
            return `<table>${this.renderTable()}</table>`;
        return `<table><tbody></tbody></table>`;
    }

    renderTable() {
        if (this.state.data) {
            return this.state.data
                .map(item => {
                    return `<tr><td>${item.minValue}</td><td>${item.description}</td></tr>`
            }).join('');
        }
        return '';
    }
    
}