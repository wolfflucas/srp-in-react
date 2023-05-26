export const openCallPhoneNumber = (phoneNumber) => {
  window.open(`tel:${phoneNumber}`);
};

export const openSendEmail = (email) => {
  window.open(`mailto:${email}`);
};
