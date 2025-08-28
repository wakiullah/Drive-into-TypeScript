// const a = (b:string , c:string,d?:number)=>{
//     console.log(b+c)
//     console.log(d)
// }
// a('afdf',"43")
// const b = (c:string, d:string, e:number=45)=>{
//     console.log(c+d)
//     console.log(e)
// }
// b('afdf', "43")
// const object:{name:string,email:string}={
//     name:'wakiullah',
//     email:"m.wakiullah1212@gmail.com"
// }
// for (const key:string in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element:string = object[key];
//     }
// }
function add(a, b) {
    console.log(a + b);
    const calcuate = a + b;
    return calcuate;
}
function calculator(a, b, cFunc) {
    cFunc(a, b);
}
calculator(4, 6, add);
let myobj;
myobj = {
    name: "wakiullah",
    email: "m.wakiullah@gmail.com",
};
console.log(myobj);
let newAdminUser;
newAdminUser = {
    username: "wakiull",
    role: ["admin"],
};
let CalculateData;
CalculateData = (a, b) => {
    return a + b;
};
const result = CalculateData(2, 3);
console.log(result);
let userDetails;
userDetails = (id, user) => {
    console.log(id, user);
};
userDetails('Two', { name: "wakiullah", age: 23 });
export {};
//# sourceMappingURL=script.js.map