export const getAgeFromBirthdate = (birthdate) => {
  const birthday = +new Date(birthdate);
  return ~~((Date.now() - birthday) / 31557600000);
};
