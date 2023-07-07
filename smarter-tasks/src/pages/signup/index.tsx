import React from "react";
import SignupForm from "./SignupForm";

// Dialogue 1: Let's define the Signup component
const Signup: React.FC = () => {
  return (
    <div>
      {/* Dialogue 2: with a basic h1 tag, Sign up */}
      <h1>Sign up</h1>
      <SignupForm />
    </div>
  );
};

// Dialogue 3: And finally, we've to export the component
export default Signup;
