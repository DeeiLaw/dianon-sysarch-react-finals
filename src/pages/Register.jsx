import ProfilePicture from '../components/ProfilePicture'
import ProfileInput from '../components/ProfileInput'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="flex flex-col flex-items-center mt-6.2vh">
      <div className="flex flex-col gap-20px">
        <div className="flex flex-col flex-items-center gap-5 p-5 border-solid border-2 border-gray-200 w-[fit-content] rounded-5">
          <ProfilePicture />
          <div className="flex flex-col gap-3.5">
            <ProfileInput label="Full name" placeholder="Input name..." />
            <ProfileInput label="E-mail" placeholder="Input e-mail..." />
            <ProfileInput label="Password" placeholder="Input password..." />
            <NumberInput label="Age" placeholder="Input age..." />
            <NumberInput label="No. of children" placeholder="Input no. of children..." />
          </div>
        </div>
        <Link
          to="/"
          className="flex justify-center text-3.5 w-100% py-10px border border-solid border-2 border-gray-200 bg-gray-200 bg-opacity-56 rounded-100 cursor-pointer text-dark-400"
        >
          Register
        </Link>
      </div>
    </div>
  )
}

function NumberInput({ label, placeholder }) {
  function onlyNumberKey(e) {
    const ASCIICode = e.which ? e.which : e.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) e.preventDefault()
  }

  return (
    <div className="flex flex-col gap-2 w-77.5">
      <span className="text-3 font-600 text-dark-400 text-opacity-70">{label}</span>
      <input
        type="number"
        placeholder={placeholder}
        className="px-20px py-10px bg-gray-200 bg-opacity-56 border-solid border-2 border-gray-200 rounded-100 appearance-none"
        onKeyDown={(e) => onlyNumberKey(e)}
      />
    </div>
  )
}
