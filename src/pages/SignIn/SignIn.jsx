/*global google*/
import React,{useState,useEffect} from 'react'
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import {Link} from 'react-router-dom'

function SignIn() {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const dispatch = useDispatch();

  function handleCallbackResponse(response) {
    console.log("encoded jwt", response.credential);
    var userObject = jwtDecode(response.credential);
    console.log("decode jwt", userObject);
    const uservalue = {
      name: userObject.name,
      image: userObject.picture,
    };
    // dispatch(signIn(uservalue));
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "529555787512-7qjj885khmf24kem6t00m4nin7lfanof.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("g-sign"), {
      theme: "filled_blue",
      size: "large",
      width: "260px",
    });
  }, []);


  return (
    <div className='h-[70vh] flex justify-center items-center'>
    <div className=" w-[40%] bg-white shadow-md flex flex-col items-center rounded-md py-5">
      <div className="flex w-[50%] flex-col justify-center items-center text-7xl p-2 ">
        <div>
          <i className="fas fa-users w-40 h-40 rounded-full flex justify-center items-center bg-slate-400"></i>
         </div>
      <label className="text-center block text-3xl my-2 font-medium">Sign In</label>
      </div>
      <div className="flex flex-col w-full items-center">
        <div className="w-full lg:px-24 ">
          <label className="block text-lg font-medium">Email address</label>
          <input
            onChange={(e) => setEmailLogin(e.target.value)}
            className="border-b-2 w-full outline-none p-2 border-b-orange-400 "
            placeholder="Enter Email"
          />
        </div>
        <div className="w-full lg:px-24 py-1 ">
          <label className="block text-lg font-medium">Password</label>
          <input
            onChange={(e) => {
              setPasswordLogin(e.target.value);
            }}
            className="border-b-2 w-full outline-none p-2 border-b-orange-400 "
            placeholder="Enter Password"
          />
        </div>
        <div className="bg-orange-500 rounded-md px-3 py-2 mt-2">
          <input type="submit" value="Sign In" />
        </div>
        <div className="">
          <Link className="text-blue-700" to="/Signup">
            Create Account&nbsp;
          </Link>
          |<Link className="text-blue-700">&nbsp;Forgot Password?</Link>
        </div>
        <div className="g-sign mt-3" id="g-sign"></div>
      </div>
    </div>
    </div>
  )
}

export default SignIn