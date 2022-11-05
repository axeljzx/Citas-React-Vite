import { createContext, useState, useEffect } from "react";

export const PacientesContext=createContext();

export const PacientesContextProvider = (props) => {
    const [pacientes,setPacientes]=useState(()=>JSON.parse(localStorage.getItem('pacientes')) || []);
    const [paciente,setPaciente]=useState({});
    
    useEffect(()=>{
        localStorage.setItem('pacientes',JSON.stringify(pacientes));
    },[pacientes]);
    return ( 
        <PacientesContext.Provider value={{pacientes,setPacientes,paciente,setPaciente}}>
            {props.children}
        </PacientesContext.Provider>
       
     );
}
 
