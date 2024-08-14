import { Route,Routes } from "react-router-dom"
import { Home } from "./pages/home/home"
import { MainLayout } from "./layout/main-layout"
import { PhonesCatalog } from "./pages/home/phones-catalog"
function App() {

  return (
    <>
    <Routes >
      <Route path="/" element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="phones-catalog/:name" element={<PhonesCatalog/>} />
      </Route >
    </Routes>
    </>
  )
}

export default App
