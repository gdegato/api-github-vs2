import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import HomeBody from "./routes/Home/HomeBody"
import NotFound from "./routes/Home/NotFound"
import Git from "./routes/Home/Git"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Navigate to='/home' />} />
            <Route path='/home' element={<HomeBody />} />
            <Route path='/git' element={<Git />}>
              <Route path='/git/notfound' element={<NotFound />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
