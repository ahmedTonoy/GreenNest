const isValidEmail = (emailString) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(emailString);
};

export default isValidEmail;
