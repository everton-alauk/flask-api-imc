import HttpClient from '../http/HttpClient'

export default class ImcService {
    constructor() {
        this.hostname = "http://localhost:5000";
    }

    calculate(person) {
        var path = "/imc/calculate";
    
        return HttpClient
            .post(this.hostname, path, person.toObject())
            .then(p => {
                person.imc = p.imc;
                person.imcDescription = p.imcDescription;
                return person;
            });
    }

    getImcTable(){
        var path = "/imc/table";
    
        return HttpClient
            .get(this.hostname, path)
            .then(table => Object.keys(table).map(key => {
                return {
                    minValue: key,
                    description: table[key]
                }
            })
        )
    }
}