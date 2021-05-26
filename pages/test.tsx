import { useForm } from 'react-hook-form'
import { PickupAPI } from '../lib/api/pickups'

interface FormInputs {
  name: string
  email: string
}

export default function EasyForm(){
  const { register, handleSubmit } = useForm<FormInputs>()
  const onSubmit = async(formValues) => {
    alert(JSON.stringify(formValues))
    await PickupAPI.create(formValues)
  }
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
  )
}

