class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(bool) {
        this._isCheckedOut = false;
    }

    toggleCheckedOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating() {
        let ratingSum = this.ratings.reduce((acc, rating) => acc + rating,0);
        let ratingsArrayLength = this.ratings.length;
        const averageRating = ratingSum/ratingsArrayLength;
        return averageRating.toFixed(2);
    }

    addRating(num) {
        this.ratings.push(num);
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author
    }
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}


const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everthing', 544);
console.log(historyOfEverything.title);
historyOfEverything.toggleCheckedOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);
const Bambi = new Movie('Bambi', 'Jaohn Saint', 200);


console.log('-------')
console.log(Bambi.title);
Bambi.toggleCheckedOutStatus();
console.log(Bambi.isCheckedOut);
console.log(Bambi.director);
console.log(Bambi.runTime);
Bambi.addRating(3);
Bambi.addRating(10);
Bambi.addRating(7);
console.log(Bambi.getAverageRating());