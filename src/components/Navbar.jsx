import { useEffect, useRef } from 'react'
import { Outlet, Link } from 'react-router-dom'
import gsap from 'gsap'
import 'uno.css'

export default function Navbar() {
  const highlight = useRef(null)
  const buttons = useRef(null)

  function getMap() {
    if (!buttons.current) {
      buttons.current = new Map()
    }
    return buttons.current
  }

  function animate(e) {
    const buttonsArray = Array.from(buttons.current.values())
    const button = e.target

    gsap.killTweensOf(highlight.current)

    if (buttonsArray.includes(e.relatedTarget) === true) {
      gsap.set(highlight.current, { opacity: 0.05, height: button.offsetHeight })

      gsap.to(highlight.current, {
        width: button.offsetWidth,
        x: button.offsetLeft,
        y: button.offsetTop,
        duration: 0.15
      })

      return
    }

    gsap.set(highlight.current, {
      opacity: 0.05,
      width: button.offsetWidth,
      height: button.offsetHeight - 2,
      x: button.offsetLeft,
      y: button.offsetTop
    })
  }

  function kill(e) {
    const buttonsArray = Array.from(buttons.current.values())

    if (buttonsArray.includes(e.relatedTarget) === false) {
      gsap.to(highlight.current, { opacity: 0, duration: 0.15 })
    }
  }

  useEffect(() => {
    console.log(Array.from(buttons.current.values()))
  }, [])

  return (
    <>
      <div className="flex flex-justify-center mt-20px">
        <div className="flex flex-row flex-items-center px-20px py-10px rounded-100 border-solid border-2 border-gray-200 bg-gray-200 bg-opacity-56 w-[fit-content]">
          <img
            src="/placeholder.jpg"
            alt="profile picture"
            className="w-40px rounded-50% mr-20px"
          />

          <div className="relative">
            <div
              ref={highlight}
              className="absolute l-0 bg-dark-400 rounded-100 opacity-5 pointer-events-none"
            ></div>

            <Link
              to="/"
              ref={(node) => {
                const map = getMap()
                if (node) map.set(0, node)
                else map.delete(0)
              }}
              className="px-20px py-10px font-500 text-dark-400"
              onMouseEnter={(e) => animate(e)}
              onMouseLeave={(e) => kill(e)}
            >
              Home
            </Link>

            <Link
              to="/login"
              ref={(node) => {
                const map = getMap()
                if (node) map.set(1, node)
                else map.delete(1)
              }}
              className="px-20px py-10px font-500 text-dark-400"
              onMouseEnter={(e) => animate(e)}
              onMouseLeave={(e) => kill(e)}
            >
              Login
            </Link>

            <Link
              to="/register"
              ref={(node) => {
                const map = getMap()
                if (node) map.set(2, node)
                else map.delete(2)
              }}
              className="px-20px py-10px font-500 text-dark-400"
              onMouseEnter={(e) => animate(e)}
              onMouseLeave={(e) => kill(e)}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}
