// CLASSES IN TYPESCRIPT
class LawFirm {
    private name: String
    private numberOfMembers: Number
    private location: String

    //constractors
        // constructor(name: String,num: Number,location: String){
    
    // making parameters optional (?)
    constructor(name?: String,num?: Number,location?: String){
        this.name = name
        this.numberOfMembers = num
        this.location = location
    }

    getData = () => {
        console.log(`${this.name} law firm located : ${this.location} with ${this.numberOfMembers} members`);
        
    }
}
 
//memory alocation

// let lawFirm: LawFirm = new LawFirm()
let lawFirm1 = new LawFirm("Trust Chamber",23,"Kayonza")
let lawFirm2 = new LawFirm('Ishema')
// lawFirm1.location = 'kayonza'
// lawFirm1.name = 'Ishema'
// lawFirm1.numberOfMembers = 23

lawFirm1.getData()
lawFirm2.getData()

// We use _x : to avoid the commel case issues that arise