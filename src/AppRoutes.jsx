import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import GetStarted from './pages/GetStarted'
import ExplorePage from './pages/ExplorePage'
import NotFound from './pages/NotFound'

function AppRoutes() {

  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/get-started' element={<GetStarted />} />
      <Route path='/explore/:topic' element={<ExplorePage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
