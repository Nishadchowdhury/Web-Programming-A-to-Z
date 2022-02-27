const kibria = {
    Id: 101,
    money: 5000,
    name:'RJ Kibria',
    treatDey: function(expence , boksis , tax){
        this.money = this.money - expence - boksis , tax;
        console.log("main" , this);
        return this.money;
    }
}
const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}
const normalGolam = {
    id: 102,
    money: 3000,
    name: 'Noremal Golam'
}
kibria.treatDey.apply(heroBalam , [500 , 100 , 50]);