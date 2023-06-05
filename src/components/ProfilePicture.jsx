import { useRef } from 'react'

export default function ProfilePicture() {
  const image = useRef(null)

  function setPicture(e) {
    const input = document.createElement('input')
    input.type = 'file'
    input.onchange = () => {
      function blobToDataURL(blob, callback) {
        const a = new FileReader()
        a.onload = (e) => {
          callback(e.target.result)
        }
        a.readAsDataURL(blob)
      }

      blobToDataURL(input.files[0], (data) => {
        image.current.src = data
        input.remove()
      })
    }
    input.click()
  }

  return (
    <div>
      <img
        src="/placeholder.jpg"
        ref={image}
        onClick={() => setPicture()}
        className="w-25 h-25 rounded-50% cursor-pointer"
      />
    </div>
  )
}
