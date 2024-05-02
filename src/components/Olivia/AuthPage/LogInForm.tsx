import { useState, useContext } from "react";

import { useIsMobile } from "../functions/isMobile";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import Link from "./components/Link";


interface LogInFormProps {
  onHasNoAccount: () => void;
}

const LogInForm = (props: LogInFormProps) => {
  // State
  const [username, setUsername] = useState("");
  const [IdColegio, setIdColegio] = useState("");
  const [mensaje, setMensaje] = useState("");

  const isMobile: boolean = useIsMobile();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (IdColegio === "SPCHICL2"){
      localStorage.setItem('nickname_ol',username)
      window.location.href = '/form';
    } else{
      setMensaje("*Código de Colegio o Usuario incorrecto, verifica con tu profesor")

    }
  };
  

  return (
    <div>
      <div className="form-title">¡Hola!</div>

      <div className="form-subtitle">
        ¿Te evaluas desde cero? <Link onClick={() => props.onHasNoAccount()}>Click aquí</Link>
      </div>

      <form onSubmit={onSubmit}>
        <TextInput
          label="Usuario"
          name="username"
          placeholder="Identificador"
          style={{
            width: isMobile ? "100%" : "calc(50% - 6px)",
            float: "left",
          }}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextInput
          label="ID Colegio"
          name="IdColegio"
          placeholder="Pídelo a tu profesor"
          style={{
            width: isMobile ? "100%" : "calc(50% - 6px)",
            float: "right",
          }}
          onChange={(e) => setIdColegio(e.target.value)}
        />


        <Button type="submit">RETOMAR AHORA</Button>
      </form>{mensaje && (
          <div className="flex w-full" style={{ color: "red", marginTop: "5px" }}>{mensaje}</div>
        )}
    </div>
  );
};

export default LogInForm;
