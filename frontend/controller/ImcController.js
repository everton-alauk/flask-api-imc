class ImcController {
    constructor() {
        this.service = new ImcService();
    }

    async calculateImc(person) {
        return await this.service.calculate(person);
    }

    async imcTable(person) {
        return await this.service.getImcTable(person);
    }
}