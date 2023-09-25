import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"

function App() {

  return (
    <>
      <h1>React Donation Campaign</h1>
      <Header />
      <Outlet />
    </>
  )
}

export default App
