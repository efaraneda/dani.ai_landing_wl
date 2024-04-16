import { useContext, useState } from "react";

import { useIsMobile } from "../functions/isMobile";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import axios from 'axios';

interface SignUpFormProps {
  onHasAccount: () => void;
}

const SignUpForm = (props: SignUpFormProps) => {
  // State  
  const [usuario, setUsuario] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [IdColegio, setIdColegio] = useState("");
  const [contraseña, setContraseña] = useState("");
  // Hooks

  const isMobile: boolean = useIsMobile();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (IdColegio === "SPCHICL"){
      try {
        const response = axios.get(`https://4r767aocla64zt774ccf447n6q0bgmxj.lambda-url.us-east-1.on.aws/?usuario=${usuario}&colegio=${IdColegio}&password=${contraseña}`);

        alert('Username created successfully!');
      } catch (error) {
          console.error('Error:', error);
          setMensaje('Error creating username. Please try again.');
      }
      window.location.href = '/chat';
    } else{
      setMensaje("*Código incorrecto, verifica con tu profesor")

    }

    
    

    
  

  }


  return (
    <div>
      <div className="form-title">Regístrate para comenzar</div>


      <form onSubmit={onSubmit}>
        
        <TextInput
          label="Usuario"
          name="username"
          placeholder="Ejemplo: Pepe77"
          style={{
            width: isMobile ? "100%" : "calc(50% - 6px)",
            float: "left",
          }}
          onChange={(e) => setUsuario(e.target.value)}
        /><TextInput
      label="Contraseña"
      name="password"
      placeholder="*********"
      type="password"
      style={{
        width: isMobile ? "100%" : "calc(50% - 6px)",
        float: "right",
      }}
      onChange={(e) => setContraseña(e.target.value)}
    /><TextInput
    label="ID Colegio"
    name="IdColegio"
    placeholder="Pídelo a tu profesor"
    style={{
      width: isMobile ? "100%" : "calc(50% - 6px)",
      float: "left",
    }}
    onChange={(e) => setIdColegio(e.target.value)}
  />
        
        <Button
          type="submit"
          style={{
            width: isMobile ? "100%" : "calc(50% - 6px)",
            float: "right",
            backgroundColor: "#3353C3"
          }}
        >
          COMENZAR!
        </Button>
      </form>{mensaje && (
          <div className="flex w-full" style={{ color: "red", marginTop: "5px" }}>{mensaje}</div>
        )}
    </div>
  );
};

export default SignUpForm;
