let lawfirmName: String;
let lawfirmAge: Number;
let lawfirmNumberOfMembers: Number;
let lawfirmValue: Boolean;
let lawfirmMembers: String [] = ["Ntwari","Egide","Mugisha","Jules"]
let lawfirmOthers: any[] = ["cow",2020,"kayonza",false]

// Working with enums
enum ActiveLawfirms {Ishema = '2020-12-03',TrustChamber = '2021-02-20'};

let firstActiveLawfirm = ActiveLawfirms.Ishema;

//Type assertions

let message
message = 'ntwari is ceo and co-founder of Yombi app'


let endWithApp = (<String>message).endsWith('app')
let endWithAppAlternativeWay = (message as String).endsWith('app')

console.log("End with 1: ",endWithApp);
console.log("End with 2: ",endWithAppAlternativeWay);

// INLINE ANNOTATION

// dynamic data types: interfaces
interface Point {
    x: number,
    y: number
}

// let drawFigure = (point: {x: number,y: number}) => {
let drawFigure = (point: Point) => {
    console.log("Line with x: ",point.x);
} 

drawFigure({
    x: 2,
    y: 3
})

// CLASSES IN TYPESCRIPT
class LawFirm {
    name: String
    numberOfMembers: Number
    location: String

    getData = () => {
        console.log(`${this.name} law firm located : ${this.location} with ${this.numberOfMembers} members`);
        
    }
}
 
//memory alocation

// let lawFirm: LawFirm = new LawFirm()
let lawFirm1 = new LawFirm()
lawFirm1.location = 'kayonza'
lawFirm1.name = 'Ishema'
lawFirm1.numberOfMembers = 23

lawFirm1.getLocation()