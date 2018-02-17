
export class City {
    coord: Object;
    weather: any;
    base: string;
    main: Main;
    visibility: number;
    wind: any;
    clouds: any;
    dt: number;
    sys: any;
    id: number;
    name: string;
    cod: number;

    constructor(obj?: any) {
        this.coord = obj && obj.coord || null;
        this.weather =  obj && obj.weather || null;
        this.base =  obj && obj.base || "";
        this.main =  obj && new Main(obj.main) || null;
        this.visibility =  obj && obj.visibility || null;
        this.wind = obj && obj.wind || null;
        this.clouds =  obj && obj.clouds || null;
        this.dt = obj && obj.dt || null;
        this.sys =  obj && obj.sys || "";
        this.id =  obj && obj.id || null;
        this.name =  obj && obj.name || "";
        this.cod =  obj && obj.cod || "";
    }

}

class Main {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;

    constructor(obj?: any) {
        this.temp = obj && obj.temp || null;
        this.pressure =  obj && obj.pressure || null;
        this.humidity =  obj && obj.humidity || null;
        this.temp_min =  obj && obj.temp_min || null;
        this.temp_max =  obj && obj.temp_max || null;
    }
}
