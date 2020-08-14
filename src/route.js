import React from "react";

const SignUp1 = React.lazy(() =>
  import("./Pages/Authentication/SignUp/SignUp1")
);
const Signin1 = React.lazy(() =>
  import("./Pages/Authentication/SignIn/SignIn1")
);

const route = [
  { path: "/auth/signup", exact: true, name: "Signup 1", component: SignUp1 },
  { path: "/auth/login", exact: true, name: "Signin 1", component: Signin1 },
];

export default route;
