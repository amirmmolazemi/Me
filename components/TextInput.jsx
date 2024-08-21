import { Input } from "./ui/input";

const TextInput = ({ name, register, errors, ...rest }) => {
  return (
    <div>
      <Input {...register(name)} name={name} {...rest} className="w-[100%]" />
      {errors[name] && <p className="text-red-500">{errors[name].message}</p>}
    </div>
  );
};

export default TextInput;
