export default function ProfileInput({ label, placeholder }) {
  return (
    <div className="flex flex-col gap-2 w-77.5">
      <span className="text-3 font-600 text-dark-400 text-opacity-70">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        className="px-20px py-10px bg-gray-200 bg-opacity-56 border-solid border-2 border-gray-200 rounded-100"
      />
    </div>
  )
}
