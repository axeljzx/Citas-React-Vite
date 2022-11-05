import { useState, useContext, useEffect } from "react";
import { PacientesContext } from "../../context/PacientesContext";
import Error from "./Error";
const FormularioPacientes = () => {
    const { pacientes, setPacientes,paciente,setPaciente} = useContext(PacientesContext);
    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [correo, setCorreo] = useState("");
    const [alta, setAlta] = useState("");
    const [sintomas, setSintomas] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(paciente).length !== 0) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setCorreo(paciente.correo);
            setAlta(paciente.alta);
            setSintomas(paciente.sintomas);
        }
    }, [paciente]);

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);
        return random + fecha;
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        if ([nombre, propietario, correo, alta, sintomas].includes("")) {
            setError(true);
            return;
        }
        setError(false);
        const objetoPaciente = {
            nombre,
            propietario,
            correo,
            alta,
            sintomas
        }
        if(!paciente.id){
            //Nuevo registro
            objetoPaciente.id= generarId(),
            setPacientes([
                ...pacientes, objetoPaciente
            ])
        }else{
            //Editar registro
            objetoPaciente.id=paciente.id;
            const listaPacientesActualizada=pacientes.map(pac=>pac.id===objetoPaciente.id? objetoPaciente:pac)
            setPacientes(listaPacientesActualizada);
            setPaciente({});
        }
    
       
        
        setNombre("");
        setPropietario("");
        setCorreo("");
        setAlta("");
        setSintomas("");
    }


    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-extrabold text-2xl text-center">Seguimiento Pacientes</h2>
            <p className="text-center text-1xl">Añade Pacientes y <span className="text-indigo-700 font-bold ">Administralos</span> </p>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md">
                {
                    error && <Error mensaje="Todos los campos son obligatorios" />
                }
                <div>
                    <label htmlFor="nombre" className="uppercase text-gray-600 font-bold">Nombre mascota</label>
                    <input name="nombre" id="nombre" className="my-3 border rounded w-full px-1 py-2" type="text" placeholder="Nombre de la mascota" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                </div>

                <div>
                    <label htmlFor="propietario" className="uppercase text-gray-600 font-bold">Nombre propietario</label>
                    <input name="propietario" id="propietario" className="my-3 border rounded w-full px-1 py-2" type="text" placeholder="Nombre del Propietario" onChange={(e) => setPropietario(e.target.value)} value={propietario} />
                </div>

                <div>
                    <label htmlFor="correo" className="uppercase text-gray-600 font-bold">Correo</label>
                    <input name="correo" id="correo" className="my-3 border rounded w-full px-1 py-2" type="email" placeholder="Correo Contacto Propietario" onChange={(e) => setCorreo(e.target.value)} value={correo} />
                </div>
                <div>
                    <label htmlFor="alta" className="uppercase text-gray-600 font-bold">Alta</label>
                    <input name="alta" id="alta" className="my-3 border rounded w-full px-1 py-2" type="date" onChange={(e) => setAlta(e.target.value)} value={alta} />
                </div>
                <div>
                    <label htmlFor="sintomas" className="uppercase text-gray-600 font-bold">Síntomas</label>
                    <textarea name="sintomas" id="sintomas" className="my-3 border rounded w-full px-1 py-2" placeholder="Describe los Síntomas" onChange={(e) => setSintomas(e.target.value)} value={sintomas} />
                </div>
                <input type="submit" value={paciente.id?'Editar Paciente' : 'Agregar Paciente'} className="bg-indigo-700 text-white uppercase w-full py-2 font-semibold hover:bg-indigo-500 cursor-pointer" />
            </form>
        </div>
    );
}

export default FormularioPacientes;