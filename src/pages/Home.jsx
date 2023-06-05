import ProfilePicture from '../components/ProfilePicture'
import ProfileInput from '../components/ProfileInput'

import 'uno.css'

export default function Home() {
  return (
    <div className="flex flex-col flex-items-center mt-6.2vh">
      <div className="flex flex-col gap-20px">
        <div className="flex flex-col flex-items-center gap-5 p-5 border-solid border-2 border-gray-200 w-[fit-content] rounded-5">
          <ProfilePicture />
          <div className="flex flex-col gap-3.5">
            <ProfileInput label="Full name" placeholder="Input name..." />
            <ProfileInput label="E-mail" placeholder="Input e-mail..." />
            <ProfileInput label="Address" placeholder="Input address..." />
          </div>
        </div>
        <div className="flex flex-col flex-items-center gap-5 p-5 border-solid border-2 border-gray-200 w-[fit-content] rounded-5">
          <div className="flex flex-col gap-3.5">
            <DescriptionInput
              label="Career objective"
              placeholder="What is your career objective?"
            />
            <DescriptionInput label="Skills" placeholder="List your skills..." />
            <DescriptionInput
              label="Experience"
              placeholder="Tell us about your experience"
            />
          </div>
        </div>
        <button className="w-100% py-10px border border-solid border-2 border-gray-200 bg-gray-200 bg-opacity-56 rounded-100 cursor-pointer">
          Download
        </button>
      </div>
    </div>
  )
}

function DescriptionInput({ label, placeholder }) {
  return (
    <div className="flex flex-col gap-2 w-77.5">
      <span className="text-3 font-600 text-dark-400 text-opacity-70">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        className="px-20px py-40px bg-gray-200 bg-opacity-56 border-solid border-2 border-gray-200 rounded-2.5"
      />
    </div>
  )
}
