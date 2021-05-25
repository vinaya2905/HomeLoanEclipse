export class Country {
    confirmed: {
        value:number;
    };
    recovered:{
        value:number;
    };
    deaths :{
        value:number;
    }
    constructor(){
        this.confirmed={'value':0}
        this.recovered={'value':0}
        this.deaths={'value':0}
    };
}