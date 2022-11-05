import { useContext } from "react";
import { PacientesContext } from "../../context/PacientesContext";
import Swal from "sweetalert2";
const Paciente = (props) => {
    const { nombre, propietario, correo, alta, sintomas, id } = props.paciente;
    const { setPaciente, pacientes, setPacientes } = useContext(PacientesContext);
    const handleEliminar = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, elimínalo!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const listaPacientesActualizada = pacientes.filter(pac => pac.id !== id);
                setPacientes(listaPacientesActualizada);
                setPaciente({});
                Swal.fire(
                    'Eliminado!',
                    'La cita se ha eliminado',
                    'success'
                )
            }
        })
    }
    return (
        <div className="bg-white p-8 rounded-md shadow-md">
            <p className="uppercase text-gray-600 font-bold mb-2">Nombre: <span className="font-normal normal-case ">{nombre}</span></p>
            <p className="uppercase text-gray-600 font-bold mb-2">Propietario: <span className="font-normal normal-case ">{propietario}</span></p>
            <p className="uppercase text-gray-600 font-bold mb-2">Correo: <span className="font-normal normal-case ">{correo}</span></p>
            <p className="uppercase text-gray-600 font-bold mb-2">Fecha alta: <span className="font-normal normal-case ">{alta}</span></p>
            <p className="uppercase text-gray-600 font-bold mb-2">Síntomas: <span className="font-normal normal-case ">{sintomas}</span></p>
            <div className=" md:flex md:justify-between mt-10 ">
                <button className="bg-indigo-700 text-white uppercase rounded-md text-center px-10  py-2 font-semibold hover:bg-indigo-500 cursor-pointer max-md:w-full max-md:mb-2" onClick={() => setPaciente(props.paciente)}>Editar</button>
                <button className="bg-red-700 text-white uppercase rounded-md text-center px-10  py-2 font-semibold hover:bg-red-500 cursor-pointer max-md:w-full " onClick={handleEliminar}>Eliminar</button>
            </div>
        </div>
    );
}

export default Paciente;