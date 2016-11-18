/**
 * Created by admin on 2016/11/16.
 */
export class Hero {
    id:number;
    name:string;
    power:string;
    alterEgo?:string;

    constructor(
        private id_in: number,
        private name_in: string,
        private power_in: string,
        private alterEgo_in?: string
    ) {
        this.id=id_in;
        this.name=name_in;
        this.power=power_in;
        this.alterEgo=alterEgo_in;
    }
}
