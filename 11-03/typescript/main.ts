function sayHello(name: String): String {
  console.log(`Hello ${name!}`);
  return `Hello ${name}!`;
}

sayHello('Peter');

interface Dog {
  name: String,
  age: number
}

const buddy: Dog = {
  name: 'Buddy',
  age: 12
};

const cookie: Dog = {
  name: 'Cookie',
  age: 3
};

class Classroom {
  private roomNumber: number;

  constructor(roomNumber: number) {
    this.roomNumber = roomNumber;
  }

  getRoomNumber(): number {
    return this.roomNumber;
  }
}

const atlas104 = new Classroom(104);
console.log(atlas104.getRoomNumber());
