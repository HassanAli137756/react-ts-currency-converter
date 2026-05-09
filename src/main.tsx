
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import ProtectedLayout from './Routing/ProtectedLayout'
import { Converter } from './components/Converter'
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import Logout from './AutherService/Logout'
import Login from './AutherService/Login'
import History from './components/History'



const router = createBrowserRouter(
createRoutesFromElements(
<Route path='' element={<ProtectedLayout />}>
    <Route path='/' element={<Converter />} />
    <Route path='/history' element={<History />} />
    <Route path='/logout' element={<Logout />} />
    <Route path='/login' element={<Login />} />
</Route>
)
)



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store} >
        <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
