import { useNavigate } from "react-router";
import useAuth from "../../hooks/authHooks";

const Login = () => {
  let {navigate} = useAuth()
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 rounded-2xl shadow-2xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-red-600">
            Welcome Back
          </h1>
          <p className="text-gray-400 mt-2">
            Login to continue
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-gray-300 mb-2">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-700"></div>
          <span className="mx-4 text-gray-400 text-sm">OR</span>
          <div className="flex-1 border-t border-gray-700"></div>
        </div>

        {/* Register */}
        <p className="text-center text-gray-400">
          Don't have an account?{" "}
          <button
          onClick={()=> navigate('/register')}
            type="button"
            className="text-red-500 hover:text-red-400 font-semibold"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;