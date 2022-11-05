const Error = ({mensaje}) => {
  return (
    <div className="bg-red-700 px-2 py-3 text-center mb-1 text-white font-bold uppercase rounded">
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
