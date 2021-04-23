"use strict";
exports.__esModule = true;
exports.LawFirm = void 0;
// CLASSES IN TYPESCRIPT
var LawFirm = /** @class */ (function () {
    //constractors
    // constructor(name: String,num: Number,location: String){
    // making parameters optional (?)
    function LawFirm(name, num, location) {
        var _this = this;
        this.getData = function () {
            console.log(_this.name + " law firm located : " + _this.location + " with " + _this.numberOfMembers + " members");
        };
        this.name = name;
        this.numberOfMembers = num;
        this.location = location;
    }
    return LawFirm;
}());
exports.LawFirm = LawFirm;
//memory alocation
