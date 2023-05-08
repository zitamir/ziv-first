// spread operator
//includ
//ternari operator3

// let sales: number = 123_456_789;
// let course: string = 'typescript'
// let is_published: boolean = true;
// let level;

// function render(document: any){
//     console.log(document)
// }

// let numbers: number[] = []

// let user: [number , string] = [1 , 'mosh']
// user.push(1);

// const enum Size { Small, Medium, Large }
// let mySize: Size = Size.Medium;
// hey my name is my name is idan
function calculateTax(income: number ,taxYear?: number): number{
    if(taxYear < 2022)
    return income * 1.2;
    return income * 1.3;
}
calculateTax(10_000) 