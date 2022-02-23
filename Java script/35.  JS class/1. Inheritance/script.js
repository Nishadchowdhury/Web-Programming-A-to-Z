class TeamMember{
     name;
    designation = 'Student Care Web Dev';
    address = 'BD';
    constructor(name , address){
        this.name  = name;
        this.address = address;
    }
}
class NeptunDev extends TeamMember{
    codeEditor;
    constructor(name, address, codeEditor){
        super(name , address);
        this.codeEditor = codeEditor;
    }

        releseApp(version){
            console.log(this.name, 'relese app version is ', version);
        }

} // normal class

const Neptun = new NeptunDev('Nishad', 'BanglaDesh', 'Android Studio');
Neptun.releseApp('1.4.3');
console.log(Neptun);
    