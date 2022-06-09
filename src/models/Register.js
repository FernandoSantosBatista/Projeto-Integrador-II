export default class RegisterAPLV {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.name= obj.name;
        this.district = obj.district;
        this.city = obj.city;
        this.email = obj.email
    }

    modelValidForRegistration(){
        return !!this.name;
    }

    modelValidToUpdate(){
        return !! (this.id && this.name)
    }
}