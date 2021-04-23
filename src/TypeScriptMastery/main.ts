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

