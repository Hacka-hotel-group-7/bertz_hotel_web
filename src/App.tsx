import { ToastContainer } from 'react-toastify'
import { ResetStyled } from './styles/GlobalReset'
import { GlobalStyled } from './styles/GlobalStyled'

const App = () => {
  return (
    <>
      <GlobalStyled/>
      <ResetStyled/>
      <ToastContainer 
              position='top-right'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='dark'
            />
    </>
  )
}

export default App