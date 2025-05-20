 export const validateSignIn = (email,password) =>{

    const isEmailVaild =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordVaild =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailVaild) return "Email Id is not valid";
    if(!isPasswordVaild) return "password is not valid";

    return null ;

 };

 // Sign Up Validation
export const validateSignUp = (name, email, password) => {
  const isNameValid = /^[a-zA-ZÀ-ÿ ,.'-]{2,}$/.test(name);
  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordVaild =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email ID is not valid";
  if(!isPasswordVaild) return "password is not valid";

  return null;
};