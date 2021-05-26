import { useForm } from "react-hook-form";
import axios from "axios";
// import { PickupAPI } from '../lib/api/pickups'

interface FormInputs {
  name: string;
  email: string;
}

export default function Index() {
  const { register, handleSubmit } = useForm<FormInputs>();

  const onSubmit = async (form) => {
    alert(JSON.stringify({user:form}));
    const { data } = await axios.post(
      `https://leafy-worthy-limpkin.gigalixirapp.com/api/users`,
      JSON.stringify({user:form}),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return {
      data,
    };
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} placeholder="なまえ" />
          <input {...register("email")} placeholder="メール" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
