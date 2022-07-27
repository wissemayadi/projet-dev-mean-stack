

export class Team {
  _id?: number;
  name: string;
  numberOfMembers?: number;
  logo?:string;
  maxSize:number;
  createdAt:Date
  constructor(name = '', numberOfMembers = 0, createdAt = new Date(), maxSize =  5) {
    this.name = name;
    this.numberOfMembers = numberOfMembers;
    this.maxSize =maxSize;
    this.createdAt = createdAt;
  }
}
