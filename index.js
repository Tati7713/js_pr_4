// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)\

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let clients = [
    new Client(10, 'Darth', 'Vader', 'Vader@gmail.com', 7744854, ['lemon', 'orange', 'banana', 'pineapple', 'mango']),
    new Client(2, 'Luke', 'Skywalker', 'Skywalker@gmail.com', 7755477, ['orange', 'banana', 'pineapple', 'mango']),
    new Client(3, 'Leia', 'Organa', 'Organa@gmail.com', 7758745, ['blueberry', 'blackberry']),
    new Client(4, 'Han', 'Solo', 'Solo@gmail.com', 7735264, ['orange', 'banana', 'pineapple', 'mango']),
    new Client(1, 'Obi-Wan', 'Kenobi', 'Kenobi@gmail.com', 7798564, ['apple', 'pear', 'plum']),
    new Client(6, 'C-3PO', '-', 'C-3PO@gmail.com', 7741257, ['blueberry', 'blackberry']),
    new Client(7, 'R2-D2', '-', 'R2-D2@gmail.com', 7778454, ['lemon', 'orange', 'banana', 'pineapple', 'mango', 'kiwi']),
    new Client(5, 'Chewbacca', '-', 'Chewie@gmail.com', 7796584, ['strawberry']),
    new Client(9, 'Yoda', '-', 'Yoda@gmail.com', 7710245, ['blueberry', 'strawberry', 'pear', 'banana']),
    new Client(8, 'Padmé', 'Amidala', 'Amidala@gmail.com', 7700215, ['orange', 'apple', 'lemon']),
]

// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let orderSort = clients.sort(function (a, b) {
    return a.order.length - b.order.length;
});
console.log(...orderSort);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function Car(model, manufacture, yearOfManufacture, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacture = manufacture;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function () {
        return `їдемо зі швидкістю ${this.maxSpeed} км на годину`;
    }

    this.info = function () {
        return this.driver
            ? ` Модель - ${this.model}\n Виробник - ${this.manufacture}\n Рік випуску - ${this.yearOfManufacture}\n Максимальна швидкість (км/год) - ${this.maxSpeed}\n Об'єм двигуна (л) - ${this.engineCapacity}\n Водій:\n Ім'я - ${this.driver.name}\n Років - ${this.driver.age}\n Досвід - ${this.driver.experience}`
            : ` Модель - ${this.model}\n Виробник - ${this.manufacture}\n Рік випуску - ${this.yearOfManufacture}\n Максимальна швидкість (км/год) - ${this.maxSpeed}\n Об'єм двигуна (л) - ${this.engineCapacity}`
    }

    this.increaseMaxSpeed = function newSpeed(a) {
        return this.maxSpeed + a;
    }

    this.changeYear = function newValue(newValue) {
        return this.yearOfManufacture = newValue;
    }

    this.addDriver = function driver(driver) {
        this.driver = driver;

    }
}

let car = new Car('BMW 324', 'Germany', 1986, 130, 2.4);

console.log(car);
console.log(car.drive());
console.log(car.info());
console.log(car.increaseMaxSpeed(30));
console.log(car.changeYear(1989));
car.addDriver({name: 'Vasyl', age: 46, experience: 28});
console.log(car.info());

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class Car1 {

    constructor(model, manufacture, yearOfManufacture, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacture = manufacture;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        return `їдемо зі швидкістю ${(this.maxSpeed)} км на годину`;
    }

    info() {
        return this.driver
            ? ` Модель - ${this.model}\n Виробник - ${this.manufacture}\n Рік випуску - ${this.yearOfManufacture}\n Максимальна швидкість (км/год) - ${this.maxSpeed}\n Об'єм двигуна (л) - ${this.engineCapacity}\n Водій:\n Ім'я - ${this.driver.name}\n Років - ${this.driver.age}\n Досвід - ${this.driver.experience}`
            : ` Модель - ${this.model}\n Виробник - ${this.manufacture}\n Рік випуску - ${this.yearOfManufacture}\n Максимальна швидкість (км/год) - ${this.maxSpeed}\n Об'єм двигуна (л) - ${this.engineCapacity}`
    }

    increaseMaxSpeed(newSpeed) {
        return this.maxSpeed + newSpeed;
    }

    changeYear(newValue) {
        return this.yearOfManufacture = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let car1 = new Car1('Ford Mustang Cobra Shelby Jet', 'USA', 1971, 370, 8.5);

console.log(car1);
console.log(car1.drive());
console.log(car1.info());
console.log(car1.increaseMaxSpeed(30));
console.log(car1.changeYear(1989));
car1.addDriver({name: 'Oleksandr', age: 29, experience: 9});
console.log(car1.info());


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }


}

let cinderella = [
    new Cinderella('Mira', 19, 37),
    new Cinderella('Anna', 24, 39),
    new Cinderella('Lisa', 17, 34),
    new Cinderella('Inna', 22, 42),
    new Cinderella('Dina', 14, 31),
    new Cinderella('Olesya', 27, 34),
    new Cinderella('Adda', 20, 27),
    new Cinderella('Anna', 25, 37),
    new Cinderella('Viktoria', 26, 41),
    new Cinderella('Aglaya', 18, 40)
];

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }

    findLove = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].footSize === prince.foundShoe) {
                return arr[i];
            }

        }
    }

}

let prince = new Prince('Richard', 28, 27);

console.log(prince.findLove(cinderella));


let find = cinderella.find(item => item.footSize === prince.foundShoe);
console.log(find);













