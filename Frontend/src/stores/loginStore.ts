import { makeAutoObservable } from "mobx";

class LoginStore {
  email = "";
  password = "";
  error = "";
  disableLoginButton = true;

  constructor() {
    makeAutoObservable(this);
  }

  /* Never Use regular function in store again, use arrow function instead.
  Because the regular function caused "this.email" to become undefined,
  and it took 1 day to solve it*/

  setEmail = (takenEmail: string) => {
    this.email = takenEmail;
  };

  setPassword = (takenPassword: string) => {
    this.password = takenPassword;
  };

  setError = (takenError: string) => {
    this.error = takenError;
  };

  clearError = () => {
    this.error = "";
  };

  setLoginButtonDisabled = (takenButtonStatus: boolean) => {
    this.disableLoginButton = takenButtonStatus;
  };

  validateForm = () => {
    const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
    if (!emailRegex.test(this.email)) {
      this.setLoginButtonDisabled(true);
      this.setError(
        "Invalid email format, only letters (a-z), numbers(0-9), and periods(.) are allowed."
      );
      return false;
    }
    if (this.password.trim() === "") {
      this.setLoginButtonDisabled(true);
      this.setError("Password cannot be empty");
      return false;
    }

    this.clearError();
    return true;
  };
}

export const loginStore = new LoginStore();
