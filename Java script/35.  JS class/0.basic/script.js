class Support {
    name;
    designation = 'support Web Dev';
    address = 'BD';
    constructor(Name){
        this.name = Name;
    }
    
}

const aamir = new Support('aamir khan');
const salman = new Support('salman khan');
console.log(aamir);
console.log(salman);
