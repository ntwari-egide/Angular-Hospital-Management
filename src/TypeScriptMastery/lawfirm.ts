// CLASSES IN TYPESCRIPT
export class LawFirm {
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