interface Car{
    name: string;
    age: number;
    brand: boolean | number;

}
let car1: Car = {
    name: "toyota",
    age: 13,
    brand: 14
   
}

interface User{
    readonly id: number;
    name: string;
    age?: number;
}
let user1: User = {
    id: 15,
    name: 'kaki',
    age: 55,
}

user1['age'] = 16

interface library{
    auther: string;
    authertz: number;
    bookname: string;
    date: number;
}

let book1: library = {
    auther: 'pikaso',
    authertz: 213207897,
    bookname: 'harry poter',
    date: 2222
}

let book2: library = {
    auther: 'shlomo',
    authertz: 1111111,
    bookname: 'lord of the rings',
    date: 1234
}
let book3: library = {
    auther: 'pabolo',
    authertz: 1564897,
    bookname: 'the hobitt',
    date: 485
}


