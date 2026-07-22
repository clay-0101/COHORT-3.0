import { useContext, useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, Zap } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form"
import { useRef } from "react";
import { MyStore } from "../../Context/MyContext";
import { toast } from "react-toastify";


// REGEX
const reMinLen = /.{8,}/;
const reLower = /[a-z]/;
const reUpper = /[A-Z]/;
const reDigit = /[0-9]/;
const reSpecial = /[^A-Za-z0-9]/;


// For CHECKING PASSWORD STRENGTH
function getPasswordStrength(value) {
  let score = 0;
  if (reMinLen.test(value)) score++;
  if (reLower.test(value)) score++;
  if (reUpper.test(value)) score++;
  if (reDigit.test(value)) score++;
  if (reSpecial.test(value)) score++;

  if (score <= 1) return "weak";
  if (score <= 3) return "medium";
  return "strong";
}

const SignUpForm = () => {
  let navigate = useNavigate()
  let { reset, register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" })
  let { userData, setUserData, setProfile } = useContext(MyStore)


  // For CHECKING PASSWORD STRENGTH
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const confirm = useRef(null)

  

  const level = password.length > 0 ? getPasswordStrength(password) : null;

  const barColor = (index) => {
    if (!level) return "bg-neutral-700";
    if (level === "weak") return index === 0 ? "bg-red-500" : "bg-neutral-700";
    if (level === "medium") return index < 2 ? "bg-yellow-500" : "bg-neutral-700";
    return "bg-green-500";
  };

  const labelColor = () => {
    if (level === "weak") return "text-red-500";
    if (level === "medium") return "text-yellow-500";
    if (level === "strong") return "text-green-500";
    return "text-neutral-500";
  };

  const labelText = () => {
    if (level === "weak") return "Weak";
    if (level === "medium") return "Medium";
    if (level === "strong") return "Strong";
    return "";
  };

  return (
    <div className="w-full max-w-md mx-auto p-9 bg-neutral-900 border border-neutral-800 rounded-2xl">
      <h1 className="text-2xl font-medium text-white mb-1">Create account</h1>
      <p className="text-sm text-neutral-400 mb-6">Join SkyMart and start shopping</p>

      <form
        onSubmit={handleSubmit((data) => {
          if (confirm.current.value !== password) {
            toast.error("Password Not Matched...!")
            return
          }
          let isResgistered = userData.find((val) => {
            return val.email === data.email 
          })
          if(isResgistered){
            toast.error('Email already registered')
            return
          }
          
          toast.success(`${data.name} Logged in..`)
          let newUserData = [...userData, data]
          setUserData(newUserData)
          localStorage.setItem('registeredUser', JSON.stringify(newUserData))
          setProfile(data)
          localStorage.setItem('userProfile',JSON.stringify(data))
          navigate('/home')
          reset()
          setPassword('')
        })}
        className="flex flex-col gap-3.5" >
        <div className="flex items-center gap-2.5 h-12 px-3.5 bg-neutral-800/60 border border-neutral-700 rounded-xl focus-within:border-[#c8f400]">
          <User size={16} className="text-neutral-500 shrink-0" />
          <input
            {...register('name', { required: "Name is required" })}
            type="text"
            placeholder="Full name"
            className="flex-1 bg-transparent outline-none text-sm text-white placeholder-neutral-500"
          />
        </div>
        {errors.name && <p className="text-[12px] text-red-600">{errors.name.message}</p>}

        <div className="flex items-center gap-2.5 h-12 px-3.5 bg-neutral-800/60 border border-neutral-700 rounded-xl focus-within:border-[#c8f400]">
          <Mail size={16} className="text-neutral-500 shrink-0" />
          <input
            {...register('email', {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email not valid"
              }
            })}
            type="email"
            placeholder="Email address"
            className="flex-1 bg-transparent outline-none text-sm text-white placeholder-neutral-500"
          />
        </div>
        {errors.email && <p className="text-[12px] text-red-600">{errors.email.message}</p>}

        <div className="flex items-center gap-2.5 h-12 px-3.5 bg-neutral-800/60 border border-neutral-700 rounded-xl focus-within:border-[#c8f400]">
          <Lock size={16} className="text-neutral-500 shrink-0" />
          <input
            {...register('password', { required: "Password is required" })}
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="flex-1 bg-transparent outline-none text-sm text-white placeholder-neutral-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="text-neutral-500 shrink-0"
            aria-label="Toggle password visibility"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        {errors.password && <p className="text-[12px] text-red-600">{errors.password.message}</p>}

        {level && (
          <div className="flex items-center gap-2.5 -mt-1">
            <div className="flex flex-1 gap-1.5">
              <span className={`h-1 flex-1 rounded-full ${barColor(0)}`} />
              <span className={`h-1 flex-1 rounded-full ${barColor(1)}`} />
              <span className={`h-1 flex-1 rounded-full ${barColor(2)}`} />
            </div>
            <span className={`text-xs min-w-[46px] text-right ${labelColor()}`}>
              {labelText()}
            </span>
          </div>
        )}

        <div className="flex items-center gap-2.5 h-12 px-3.5 bg-neutral-800/60 border border-neutral-700 rounded-xl focus-within:border-[#c8f400]">
          <Lock size={16} className="text-neutral-500 shrink-0" />
          <input
            ref={confirm}
            type="password"
            placeholder="Confirm password"
            className="flex-1 bg-transparent outline-none text-sm text-white placeholder-neutral-500"
          />
        </div>
        {confirm.current?.value && confirm.current.value !== password && <p className="text-[12px] text-red-600">Password not matched!!</p>}
        <button
          className="mt-1.5 h-12 bg-[#c8f400] hover:bg-[#c4e500] rounded-xl text-neutral-900 text-sm font-medium flex items-center justify-center gap-2"
        >
          Create Account
          <ArrowRight size={16} />
        </button>

        <p className="text-center text-xs text-neutral-400 mt-2">
          Already have an account?{" "}
          <NavLink to={'/'} className="text-[#c8f400] font-medium">
            Sign in
          </NavLink>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;