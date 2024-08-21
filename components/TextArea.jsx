import { Textarea } from "./ui/textarea";

const TextArea = ({ name, register, errors, ...rest }) => {
  return (
    <div>
      <Textarea
        {...register(name)}
        name={name}
        className="h-[200px]"
        {...rest}
      />
      {errors[name] && <p className="text-red-500">{errors[name].message}</p>}
    </div>
  );
};

export default TextArea;
