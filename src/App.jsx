import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarCustom from "./components/NavbarCustom"
import Main from "./components/Main"
import { Provider } from 'react-redux'
import store from "./store/store"

function App() {
 
  return (
    <>
      <Provider store={store}>
        <NavbarCustom />
        <Main />
      </Provider>
    </>
  )
}

export default App
