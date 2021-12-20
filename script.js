// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)



class Movie {

    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        if (rating == null) return this.rating = "PG"

    }
    getPG(arr) {

        let value = arr.filter(val => val.rating === "PG")
        let value1 = arr.filter(val => val.rating !== "PG")
        let result = [...value1, ...value]
        return result;
    }
}

let movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
let movie2 = new Movie("Jai Bhim", "2D Entertainment", "PG12");
let movie3 = new Movie("Doctor", "KJR studios");
let movie4 = new Movie("Baahubali", "Arka Media", "R");
const arr = [movie1, movie2, movie3, movie4];
let result = movie1.getPG(arr);
console.log(result);






// Write a “person” class to hold all the details.

class Person {
    constructor(name, age, place) {
        this.name = name;
        this.age = age;
        this.place = place;
    }

    get userName() {
        return this.name;
    }

    set userName(updateName) {
        this.name = updateName;
    }
}

const newUser = new Person('Mike', '22', 'Kashmir');

console.log(newUser.name);
console.log(newUser.place);
console.log(newUser.age);

newUser.name = 'Steve';
console.log(newUser.name);

console.log("Hello ! My name is " + newUser.name + ". I'm " + newUser.age + " years old and live in " + newUser.place);


// write a class to calculate uber price.

class Uber {
    constructor(pickup, destination, TotalKms) {
        this.pickup = pickup;
        this.destination = destination;
        this.TotalKms = TotalKms;
    }

    cost() {
        let price = Customer.TotalKms * 12;
        return price;
    }
}
const Customer = new Uber("International Park", "Fort", 15);

console.log("The Price of Uber for " + Customer.TotalKms + " Kms is " + Customer.cost() + " rupees");
