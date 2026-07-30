import React from 'react';
import useAuthHooks from '../Hooks/AuthHooks';

const LoginCard = () => {
  let { register,
    handleSubmit,
    reset,
    errors,
    loginSubmit
  } = useAuthHooks()
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4 font-sans">
      {/* Card Container */}
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl">

        {/* Title */}
        <h2 className="mb-6 text-xl font-bold text-slate-700">
          Sign In
        </h2>

        {/* Form */}
        <form
        onSubmit={handleSubmit(loginSubmit)}
        className="space-y-4">
          
          {/* Email Input */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-blue-500 font-semibold select-none">
              @
            </span>
            <input
              {...register('email', {
                required: 'Email is required'
              })}
              type="email"
              placeholder="Email"
              required
              className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm text-slate-700 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            {errors.email && <p className='text-[12px] text-red-600'>{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-blue-500 select-none">
              {/* Simple Lock SVG Icon */}
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
            <input
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Minimum 6 letter required'
                }
              })}
              type="password"
              placeholder="Password"
              required
              className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm text-slate-700 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            {errors.password && <p className='text-[12px] text-red-600'>{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>

        {/* Bottom Register Link */}
        <p className="mt-8 text-center text-xs text-slate-500">
          Don&apos;t have an account yet?{' '}
          <a
            href="#register"
            className="font-medium text-blue-600 underline hover:text-blue-700"
          >
            Register
          </a>
        </p>

      </div>
    </div>
  );
};

export default LoginCard;