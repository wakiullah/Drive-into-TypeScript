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

function add(a: number, b: number): number {
  console.log(a + b);
  const calcuate = a + b;
  return calcuate;
}

type Func = (a: number, b: number) => number;

function calculator(a: number, b: number, cFunc: Func) {
  cFunc(a, b);
}

calculator(4, 6, add);

interface funcdesign {
  name: string;
  email: string;
}

let myobj: funcdesign;

myobj = {
  name: "wakiullah",
  email: "m.wakiullah@gmail.com",
};
console.log(myobj);

interface user {
  username: string;
}

interface admin {
  role: string[];
}

interface userAdmin extends user, admin {}

let newAdminUser: userAdmin;

newAdminUser = {
  username: "wakiull",
  role: ["admin"],
};

let CalculateData: (a: number, b: number) => number;

CalculateData = (a: number, b: number) => {
  return a + b;
};

const result = CalculateData(2, 3);

console.log(result);

let userDetails: (
  id: number | string,
  user: {
    name: string;
    age: number;
  }
) => void;

userDetails = (
  id: number | string,
  user: {
    name: string;
    age: number;
  }
) => {
  console.log(id, user);
};

userDetails('Two', { name: "wakiullah", age: 23 });
