export const validateLoginForm = (email, password) =>{

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValid && isPasswordValid) return "Email ID is not valid";
    if (isEmailValid && !isPasswordValid) return "Password is not valid";
    if (!isEmailValid && !isPasswordValid) return "Email ID and Password does not match";

    return null;

}