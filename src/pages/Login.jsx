import ProfilePicture from '../components/ProfilePicture'
import ProfileInput from '../components/ProfileInput'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="flex flex-col flex-items-center mt-6.2vh">
      <div className="flex flex-col gap-20px">
        <div className="flex flex-col flex-items-center gap-5 p-5 border-solid border-2 border-gray-200 w-[fit-content] rounded-5">
          <ProfilePicture />
          <div className="flex flex-col gap-3.5">
            <ProfileInput label="E-mail" placeholder="Input e-mail..." />
            <ProfileInput label="Password" placeholder="Input password..." />
          </div>
        </div>
        <Link
          to="/"
          className="flex justify-center text-3.5 w-100% py-10px border border-solid border-2 border-gray-200 bg-gray-200 bg-opacity-56 rounded-100 cursor-pointer text-dark-400"
        >
          Login
        </Link>
      </div>
    </div>
  )
}
