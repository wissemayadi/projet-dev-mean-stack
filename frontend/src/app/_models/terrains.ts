import { Centres } from './centres';

export class Terrains {
    _id!: string;
    name!: string;
    email!: string;
    location!: string;
    state!: string;
    type!: string;
    surface!: string;
    capacity!: Number;
    phone!: Number;
    balances!: Number;
    centre!: [Centres];
}
