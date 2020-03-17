import React, { Component } from "react";

import SignIn from "../../components/sign-in/sign-in.component.js";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
