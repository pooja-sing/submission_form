import { useForm } from "react-hook-form";
import './App.css';


export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => console.log(data)


  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input placeholder="Name"
        {...register("firstName", { required: true })}
        aria-invalid={errors.firstName ? "true" : "false"}
      />
      {errors.firstName?.type === "required" && (
        <p role="alert">First name is required</p>
      )}


      <input placeholder="Email"
        {...register("mail", {
          required: "Email Address is required", pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Entered value does not match email format'
          }
        })}
        aria-invalid={errors.mail ? "true" : "false"}
      />
      {errors.mail && <p role="alert">{errors.mail.message}</p>}

      <input placeholder="Password"
        {...register("Password", { required: "Password  is required", minLength: { value: 3, message: "min length is 3" }, maxLength: { value: 8, message: "max lenght is 8" } })}
        aria-invalid={errors.Password ? "true" : "false"}
      />
      {errors.Password && <p role="alert">{errors.Password.message}</p>}

      <select id="selectOption" name="selectOption" {...register('selectOption', { required: 'Selection is required' })}>
        <option value="">Select...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>

        aria-invalid={errors.selectOption ? "true" : "false"}
      </select>
      {errors.selectOption && <p role="alert">{errors.selectOption.message}</p>}

      <textarea
        id="textarea"
        name="textarea"
        placeholder="...."
        {...register('textarea', { required: 'Text area is required' })}
        aria-invalid={errors.textarea ? "true" : "false"}
      />
      {errors.textarea && <p role="alert">{errors.textarea.message}</p>}

      <input type="submit" />
    </form>
  )
}