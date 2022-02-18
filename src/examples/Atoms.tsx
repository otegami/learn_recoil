import { useState } from "react"

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <input
      type="checkbox"
      checked={darkMode}
      onChange={(event) =>
        setDarkMode(event.currentTarget.checked)}
    />
  )
}

const Button = () => {
  const [darkMode, setDarkMode] = useState(false)

  return <button style={{
    backGroundColor: darkMode ? 'black' : 'white',
    color: darkMode ? 'white' : black
  }}> My UI Button</button >
}

export const Atoms = () => {

  return (
    <div>
      <div>
        <DarkModeSwitch />
      </div>
      <div>
        <Button />
      </div>
    </div>
  )
}
