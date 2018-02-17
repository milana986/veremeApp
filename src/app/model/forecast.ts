

export class Forecast {
    cod: string;
    message: number;
    cnt: number;
    list: any[];

    constructor(obj?: any) {
        this.cod = obj && obj.cod || '';
        this.message = obj && obj.message || null;
        this.cnt = obj && obj.cnt || null;
        this.list = obj && new Array(obj.list) || null;
    }
}


