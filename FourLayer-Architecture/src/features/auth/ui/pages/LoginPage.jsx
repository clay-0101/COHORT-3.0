import { useNavigate } from "react-router";
import useAuth from "../../hooks/authHooks";

const Login = () => {
  let { navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginSubmit } = useAuth()

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
        <form 
        onSubmit={handleSubmit(loginSubmit)}
        className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-gray-300 mb-2">
              Username
            </label>

            <input
            {...register('email',{
              required : 'Email is required',
              pattern : {
                value : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message : 'Invalid Email'
              }
            })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
            />
            
          </div>
          {errors.email && <p className="text-red-500 text-[12px]">{errors.email.message}</p>}

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2">
              Password
            </label>

            <input
            {...register('password',{
              message : 'Password is required',
              minLength : {
                value : 6,
                message : 'Minumum 6 letter required'
              }
            })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
            />
          </div>
          {errors.password && <p className="text-red-500 text-[12px]">{errors.password.message}</p>}

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
            onClick={() => navigate('/register')}
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