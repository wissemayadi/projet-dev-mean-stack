import { Terrains } from './terrains';

export class Centres {
    _id!: string;
    name!: string;
    email!: string;
    location!: string;
    phone!: Number;
    terrain!: [Terrains];
}
