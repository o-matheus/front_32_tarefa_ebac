import { createBrowserRouter, RouterProvider } from "react-router-dom"

import EstiloGlobal, { Container } from "./styles"
import Home from "./pages/Home"
import { Provider } from "react-redux"
import store from "./store"
import Form from "./pages/Form"

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/form',
    element: <Form/>
  },

])

function App() {

  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
          <RouterProvider router={rotas}/>
      </Container>
      
    </Provider>
  )
}

export default App
