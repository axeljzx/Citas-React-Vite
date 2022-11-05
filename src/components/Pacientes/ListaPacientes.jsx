import Paciente from "./Paciente";
import { PacientesContext } from "../../context/PacientesContext";
import { useContext } from "react";
const ListaPacientes = () => {
  const {pacientes} = useContext(PacientesContext);
 
  return (
    <div className="flex flex-col gap-4 md:h-screen">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-extrabold text-2xl text-center">
           Listado de Pacientes
          </h2>
          <p className="text-center text-1xl">
            Administra tus {" "}
            <span className="text-indigo-700 font-bold">Pacientes y Citas</span>{" "}
          </p>
          <div className=" md:overflow-y-scroll flex flex-col gap-4">
            {
              pacientes.map((paciente) => <Paciente key={`ListaPaciente${paciente.id}`} paciente={paciente} />)
            }

          </div>
        </>
      ) : (<>
        <h2 className="font-extrabold text-2xl text-center">
          No hay pacientes
        </h2>
        <p className="text-center text-1xl">
          Comienza agregando pacientes {" "}
          <span className="text-indigo-700 font-bold">y aparecerán en este lugar</span>{" "}
        </p>
      </>)}


    </div>
  );
};

export default ListaPacientes;
