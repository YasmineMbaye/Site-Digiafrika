import { Form, useActionData, useLoaderData } from "react-router";
import { NavLink } from "react-router";
import { loginAction as action } from "~/services/back-office/loginService.server";
export {action}

//import {loginLoader as loader}  from "~/services/back-office/dashboardService.server"
//export {loader}

import { logineLoader as loader } from "~/services/back-office/dashboardService.server";
export {loader}


export default function Login() {
    const {error}= useLoaderData<typeof loader>()
  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="bg-gray-100 p-8 shadow-xl rounded-xl">
        <div className="text-2xl mb-4 text-gray-600 font-bold">Login</div>
        <div className="   ">

          {error && <p style={{ color: "red" }}>{error}</p>} {/* message flash */}
          <Form
            className="flex flex-col gap-3"
            method="post"
            
          >
            <input
              type="text "
              placeholder="Name"
              className="bg-white w-100 border border-gray-400 rounded-xl p-2"
              name="name"
            />
            <input
              placeholder="mot de passe "
              name="mdp"
              type="password"
              className="bg-white w-100 border border-gray-400 rounded-xl p-2"
            />
            <div className=" text-center mt-4">
              {" "}
              <button
                className="bg-blue-500 p-2 rounded text-white"
                type="submit"
              >
                Se connecter
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
