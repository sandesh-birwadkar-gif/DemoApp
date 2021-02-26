export const isStringOnly = value => {
  let reg = /^[A-Za-z]+$/;
  return reg.test(value);
};

export const isNumerOnly = sText => {
  const ValidChars = '0123456789';
  let IsNumber = true;
  let Char;
  let i;

  for (i = 0; i < sText.length && IsNumber == true; i++) {
    Char = sText.charAt(i);
    if (ValidChars.indexOf(Char) == -1) {
      IsNumber = false;
    }
  }
  return IsNumber;
};

export const passwordValidate = value => {
  let reg = /^[A-Z0-9@]{7,10}$/gm;
  return reg.test(value);
};
