import {Team} from "./Team";

export class Player {
  _id?:number;
  firstName: string;
  lastName: string;
  age: number;
  squad?: Team;
  constructor(firstName = '', lastname = "", age = 0) {
    this.age = age;
    this.lastName= lastname;
    this.firstName= firstName;
  }


}
