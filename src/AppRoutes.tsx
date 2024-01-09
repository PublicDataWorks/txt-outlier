import { createRoutesFromElements, Route } from 'react-router-dom'
import Home from './pages/Home'
import PrivateRoute from './components/PrivateRoute'
import GoogleCallback from './components/GoogleCallback'


const AppRoutes = createRoutesFromElements(
  <>
    <Route path="/" element={<GoogleCallback />} />
    <Route path="*" element={
      <PrivateRoute>
        <Home />
      </ PrivateRoute>
    } />
  </>
)

export default AppRoutes
