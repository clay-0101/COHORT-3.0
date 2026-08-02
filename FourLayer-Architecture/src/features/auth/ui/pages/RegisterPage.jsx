import useAuth from "../../hooks/authHooks";

const Registration = () => {

  let { navigate,
    register,
    handleSubmit,
    reset,
    errors ,registerSubmit} = useAuth()

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 rounded-2xl shadow-2xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-red-600">
            Create Account
          </h1>
          <p className="text-gray-400 mt-2">
            Register to get started
          </p>
        </div>

        {/* Form */}
        <form
        onSubmit={handleSubmit(registerSubmit)}
         className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-gray-300 mb-2">
              Username
            </label>
            <input
            {...register('name',{
              required : 'Username is required'
            })}
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
            />
            
          </div>
          {errors.name && <p className="text-red-500 text-[12px]">{errors.name.message}</p>}

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">
              Email
            </label>
            <input
            {...register('email',{
              required : "Email is required",
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
              required : 'Password is required',
              minLength : {
                value : 6 ,
                message : 'Minimum 6 letter required'
              }
            })}
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
            />
             
          </div>
          {errors.password && <p className="text-red-500 text-[12px]">{errors.password.message}</p>}

          {/* Register Button */}
          <button
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-700"></div>
          <span className="mx-4 text-gray-400 text-sm">OR</span>
          <div className="flex-1 border-t border-gray-700"></div>
        </div>

        {/* Login Link */}
        <p className="text-center text-gray-400">
          Already have an account?{" "}
          <button
            onClick={() => navigate('/')}
            className="text-red-500 hover:text-red-400 font-semibold"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Registration;