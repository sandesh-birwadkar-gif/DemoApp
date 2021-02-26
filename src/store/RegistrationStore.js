import {makeAutoObservable} from 'mobx';
import {isNumerOnly, isStringOnly, passwordValidate} from '../utils/Validation';

class RegistrationStore {
  constructor() {
    makeAutoObservable(this);
  }

  userName = '';

  password = '';

  mobileNumber = '';

  userNameError = '';

  passwordError = '';

  mobileNumberError = '';

  isValid = false;

  resetFields = () => {
    this.userName = '';
    this.password = '';
    this.mobileNumber = '';
    this.userNameError = '';
    this.passwordError = '';
    this.mobileNumberError = '';
  };

  registrationValidation = () => {
    var isValid = true;

    if (this.userName === '') {
      isValid = false;
      this.setFields('userNameError', 'Please enter username.');
    } else if (!isStringOnly(this.userName)) {
      isValid = false;
      this.setFields('userNameError', 'username must be string');
    } else {
      this.setFields('userNameError', '');
    }
    if (this.password === '') {
      isValid = false;
      this.setFields('passwordError', 'Please enter password.');
    } else {
      this.setFields('passwordError', '');
      isValid = true;
    }

    if (this.mobileNumber === '') {
      isValid = false;
      this.setFields('mobileNumberError', 'Please enter a mobile number.');
    } else if (this.mobileNumber.length != 10) {
      isValid = false;
      this.setFields('mobileNumberError', 'Mobile number must be ten digits.');
    } else if (!isNumerOnly(this.mobileNumber)) {
      isValid = false;
      this.setFields('mobileNumberError', 'Please enter valid mobile number.');
    } else {
      this.setFields('mobileNumberError', '');
    }
    return isValid;
  };

  onBlurRegistrationFields = eName => {
    if (eName === 'userName') {
      if (this.userName === '') {
        this.setFields('userNameError', 'Please enter username.');
      } else if (!isStringOnly(this.userName)) {
        this.setFields('userNameError', 'username must be string');
      } else {
        this.setFields('userNameError', '');
      }
    }

    if (eName === 'password') {
      if (this.password === '') {
        this.setFields('passwordError', 'Please enter password.');
      } else if (!passwordValidate(this.password)) {
        this.setFields(
          'passwordError',
          'password must be numeric,uppercase,@ character and length should be 7-10 ',
        );
      } else {
        this.setFields('passwordError', '');
      }
    }
    if (eName === 'mobileNumber') {
      if (this.password === '') {
        this.setFields('mobileNumberError', 'Please enter mobileNumber.');
      } else {
        this.setFields('mobileNumberError', '');
      }
    }
  };

  registrationApi = () => {
    this.isValid = this.registrationValidation();
  };

  setFields(eName, data) {
    this[eName] = data;
    console.log(eName, data);
  }
}
export default new RegistrationStore();
