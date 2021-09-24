interface AddFn {
  (a: number, b: number): number;
}
let add: AddFn;
add = (n1: number, n2: number) => n1 + n2;
console.log(add(1, 6));

interface Named {
  readonly name?: string;
  outPutName?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 21;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hii");
    }
  }
}

let user1: Greetable;
user1 = new Person();

user1.greet("Good Morning");
console.log(user1);
