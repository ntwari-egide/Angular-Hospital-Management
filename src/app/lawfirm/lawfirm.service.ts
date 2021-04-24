export class LawfirmsService{
    listOfLawfirms;

    getLawfirms(){
        this.listOfLawfirms = ["Ishema ","Trust Chamber","Care Chamber"]
        return this.listOfLawfirms
    }

    addLawfirm(lawfirmName : String){
        this.listOfLawfirms.push(lawfirmName)
    }
}