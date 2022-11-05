import FormularioPacientes from "./FormularioPacientes";
import ListaPacientes from "./ListaPacientes";
const Pacientes = () => {
  return (
    <div className="container my-0 mx-auto grid md:grid-cols-[1fr,1.4fr] gap-10 mt-10">
      <FormularioPacientes />
      <ListaPacientes />
    </div>
  );
};

export default Pacientes;
