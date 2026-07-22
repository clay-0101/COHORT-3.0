import { Zap, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { useRef } from "react";
import { MyStore } from "../../../Context/MyContext";
import { toast } from "react-toastify";


export default function SignInForm() {
  let { userData, setProfile } = useContext(MyStore)
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const myRef = useRef({})


  function getCredentials(e) {
    if (e) {
      myRef.current[e.name] = e
    }
  }
  return (
    <div className="flex-1 flex items-center justify-center px-6 py-16 lg:border-l border-[#e4e1e171]">
      <div className="w-full max-w-md rounded-2xl border-[0.2px] border-[#e4e1e12f] bg-neutral-950 p-10">
        <h2 className="text-3xl font-medium text-white mb-2">Sign in</h2>
        <p className="text-gray-500 text-[15px] mb-8">Enter your credentials to continue</p>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            let user = userData.find((u) => {
              return (u.email === myRef.current.email.value && u.password === myRef.current.password.value)
            })

            if (user) {
              setProfile(user)
              localStorage.setItem('userProfile',JSON.stringify(user))
              toast.success('Used logged in..')
              navigate('/home')
            } else {
              alert('User Not Registerd')
              navigate('/sign-up')
            }


          }}
          className="flex flex-col gap-4"
        >
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              ref={getCredentials}
              type="email"
              required
              name="email"
              placeholder="Email address"
              className="w-full rounded-xl bg-black border border-[#c8f400]/60 focus:border-[#c8f400] outline-none pl-12 pr-4 py-4 text-white placeholder-gray-500 transition-colors"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              ref={getCredentials}
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="Password"
              className="w-full rounded-xl bg-black border border-gray-700 focus:border-[#c8f400] outline-none pl-12 pr-12 py-4 text-white placeholder-gray-500 transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Sign in button */}
          <button

            className="mt-2 w-full flex items-center justify-center gap-2 rounded-xl bg-[#c8f400] hover:bg-lime-300 transition-colors py-4 font-medium text-black"
          >
            Sign in
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>

        <p className="text-center text-[15px] text-gray-400 mt-6">
          Don&apos;t have an account?{" "}
          <button
            onClick={() => {
              navigate('/sign-up')
            }}
            className="text-[#c8f400] hover:underline">
            Create one
          </button>
        </p>
      </div>
    </div >
  );
}