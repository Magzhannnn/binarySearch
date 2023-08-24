export interface IAddress {
  street: string;
  city: string;
  zip: string;
}

export interface IScore {
  math: number;
  english: number;
  history: number;
}

export interface IUser {
  id: number;
  name: string;
  age: number;
  address: IAddress;
  hobbies: string[];
  scores: IScore;
}
