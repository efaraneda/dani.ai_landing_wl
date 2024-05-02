import { useContext, useState } from "react";

import { useIsMobile } from "../functions/isMobile";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import invocarLambda from './register';

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

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (IdColegio === "SPCHICL2") {
      try {
        const response = await invocarLambda(usuario, contraseña,IdColegio); // Invoca la función Lambda
        
        console.log(response)
        if (!response.includes('ya existe!')) {
          localStorage.setItem('Olivia-user', usuario);
          alert('Usuario creado exitosamente!');
          window.location.href = '/form';
        } else {
          setMensaje(response);
         } 
      } catch (error) {
        console.error('Error:', error);
        setMensaje('Error creando el usuario. Por favor intenta de nuevo.');
      }
    } else {
      setMensaje("*Código incorrecto, verifica con tu profesor");
    }
  }
  
    
    

    
  

  


  return (
    <div>
      <div className="text-white text-3xl mb-8">Regístrate para comenzar</div>


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
      float: "left"

    }}
    onChange={(e) => setIdColegio(e.target.value)}
  />
        
        <Button
          type="submit"
          style={{
            width: isMobile ? "100%" : "calc(50% - 6px)",
            float: "right",
            backgroundColor: "black"
          }}
        >
          COMENZAR
        </Button>
      </form>{mensaje && (
          <div className="flex w-full" style={{ color: "red", marginTop: "5px" }}>{mensaje}</div>
        )}
    </div>
  );
};

export default SignUpForm;
