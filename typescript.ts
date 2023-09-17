// first lines of TS

const sum = (a: number, b: number) => {
  return a + b;
};

const answer = sum(2, 3);

console.log(answer);

// -- TYPES

// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = "brown";
let favouriteQuote: string = `I'am not old, i'am only ${age}.`;

// Array
let pets: string[] = ["cat", "dog", "pig"];
let pets2: Array<string> = ["lion", "dragon", "lizard"];

// Object
let wizard: object = {
  a: "John",
};

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// -- Types JS does not have but TS does allow for them

// Tuple
let basket: [string, number];
basket = ["basketball", 5];

// Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let sizeName: String = Size[2];
console.log(sizeName);
let sizeValue: number = Size.Small;
console.log(sizeValue);

// Any - !!! BE CAREFUL
let whatever: any = "kasdlfj aslkdfj laksjdf";
whatever = 5;
whatever = Size.Small;

// void
let sing = (): void => console.log("lalalala");
let sing2 = (): string => "lalalala";

// never
let error = (): never => {
  // return "hello";
  throw Error("oops");
};

// interface (recomended) or type alias
interface RobotArmy {
  count: number;
  type: string;
  magic: string;
}

type RobotArmy2 = {
  count: number;
  type: string;
  magic?: string; // ? - make the property optional
};

let fightRobotArmy = (robots: RobotArmy) => {
  console.log("FIGHT!");
};
let fightRobotArmy2 = (robots: { count: number; type: string; magic: string }) => {
  console.log("FIGHT!");
};

// Type Assertion
interface CatArmy {
  count: number;
  type: string;
  magic: string;
}

let dog = {} as CatArmy;
dog.count;

// Function
let fightRobotArmy3 = (robots: RobotArmy): void => console.log("FIGHT!");

// Classes
class Animal {
  private sing: string = "alalalalala";

  constructor(sound: string) {
    this.sing = sound;
  }

  greet(): string {
    return `Hello ${this.sing}`;
  }
}

let lion = new Animal("RAAAWWR");
console.log(lion.greet());
// console.log(lion.sing);

// Union
let confused: string | number = "hello";
confused = 5;
// confused = true;

// type inference
let x = 4;
// x = "hello";
