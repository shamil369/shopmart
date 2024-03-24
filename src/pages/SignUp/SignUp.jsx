import React,{useState} from 'react'

function SignUp() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
  <div className='h-[80vh] flex justify-center items-center'>
      <div className="bg-white w-[25%] p-2 shadow-lg rounded-lg">
      <div className="flex  relative flex-col justify-center items-center text-7xl p-1">
        <i className='fas fa-user shadow-md absolute -top-20 w-40 h-40 rounded-full flex justify-center items-center bg-orange-300 text-blue-950'></i>
        <label className="text-4xl font-semibold mt-20 text-blue-900">Sign Up</label>
      </div>
      <div className=" flex flex-col justify-center items-center gap-3 p-5">
        <div className=" w-full  relative flex flex-col justify-center ">
          <label className="absolute -top-3 left-1 bg-white font-medium px-1 text-blue-700">Firstname</label>
          <input
            className="border-2 border-gray-400 rounded-md p-2 outline-orange-500"
            placeholder="Enter Firstname"
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
        </div>
        <div className=" w-full  relative flex flex-col justify-center">
          <label className="absolute -top-3 left-1 bg-white font-medium px-1 text-blue-700">Lastname</label>
          <input
            className="border-2 border-gray-400 rounded-md p-2 outline-orange-500"
            placeholder="Enter Lastname"
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
        </div>
        <div className=" w-full  relative flex flex-col justify-center">
          <label className="absolute -top-3 left-1 bg-white font-medium px-1 text-blue-700">Email address</label>
          <input
            className="border-2 border-gray-400 rounded-md p-2 outline-orange-500"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className=" w-full  relative flex flex-col justify-center">
          <label className="absolute -top-3 left-1 bg-white font-medium px-1 text-blue-700">Password</label>
          <input
            className="border-2 border-gray-400 rounded-md p-2 outline-orange-500"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="bg-orange-400  rounded-md px-3 py-2 m-3 text-white fot-medium">
          <input className="text-blue-950 font-medium" type="submit" value="Register" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUp