export default class Validator {
    static isEmailValid(email) {
       let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       return reg.test(email);
  }
  static isNameValidate(name) {
    //var reg = /^[A-Za-z_]+$/;
    var reg = /^[a-zA-Z_ ]*$/;
    return reg.test(name);
}  static isMobileValidate(mobile) {
  const reg = /^[0-9\b]+$/;
    return reg.test(mobile);
}
}