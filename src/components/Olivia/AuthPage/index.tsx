import { CSSProperties, useState } from "react";


import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";

const AuthPage = () => {
  const [hasAccount, setHasAccount] = useState(false);

  
  return (
    <div className="background-image" >
      <div className="background-gradient-dark">
        <div style={styles.formContainerStyle}>
          <div style={styles.titleStyle}>Olivia es tu asistente de convivencia escolar ;)</div>

          {hasAccount ? (
            <LogInForm onHasNoAccount={() => setHasAccount(false)} />
          ) : (
            <SignUpForm onHasAccount={() => setHasAccount(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  formContainerStyle: {
    width: "100%",
    maxWidth: "650px",
    padding: "36px 72px",
  } as CSSProperties,
  titleStyle: {
    fontSize: "24px",
    fontFamily: "VisbyRoundCF-Heavy",
    letterSpacing: "0.5px",
    color: "white",
    paddingBottom: "11vw",
  } as CSSProperties,
};

export default AuthPage;
