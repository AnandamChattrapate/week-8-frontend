import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

const AddUser = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const handleForm = async (data) => {
        console.log(data)
        try {
            // https://week-8-backend.onrender.com/
            let res = await fetch("https://week-8-backend.onrender.com/user-api/users", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data)
            })
            if (res.ok) {
                navigate('/user-list')
            }
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <form 
    onSubmit={handleSubmit(handleForm)}
    className="bg-white p-6 rounded-lg shadow-md w-80 flex flex-col gap-4">
    <h2 className="text-xl font-semibold text-center">Add User</h2>
    <input
      type="text"
      {...register("name")}
      placeholder="Name"
      className="border p-2 rounded"
    />
    <input
      type="text"
      {...register("email")}
      placeholder="Email"
      className="border p-2 rounded"
    />
    <input
      type="text"
      {...register("mobileNumber")}
      placeholder="Mobile Number"
      className="border p-2 rounded"/>
    <input
      type="date"
      {...register("dateOfBirth")}
      className="border p-2 rounded"/>
    <button
      type="submit"
      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
      Submit
    </button>
  </form>
            
</div>
        
    );
}

export default AddUser
