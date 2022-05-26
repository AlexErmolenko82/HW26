import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Firstname:{" "}
          <input type="text" {...register("firstname", { required: true })} />
          {errors.firstname && (
            <span className="error">Firstname is a required field</span>
          )}
        </label>
      </div>
      <div>
        <label>
          Lastname:{" "}
          <input type="text" {...register("lastname", { required: true })} />
          {errors.lastname && (
            <span className="error">Lastname is a required field</span>
          )}
        </label>
      </div>
      <div>
        <select
          defaultValue={"Japan"}
          {...register("country", { required: true })}
        >
          <option value="Ukraine">Ukraine</option>
          <option value="Poland">Poland</option>
          <option value="Germany">Germany</option>
          <option value="Spain">Spain</option>
          <option value="Turkey">Turkey</option>
          <option value="Japan">Japan</option>
        </select>
      </div>
      <div>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
