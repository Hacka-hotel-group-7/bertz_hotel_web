import { ToastContainer } from 'react-toastify'
import { ResetStyled } from './styles/GlobalReset'
import { GlobalStyled } from './styles/GlobalStyled'
import Home from './pages/Home/Home.tsx'
import { GlobalProvider } from './providers/GlobalContext/GlobalContext.tsx'

const App = () => {
  return (
    <>
      <GlobalProvider>
        <GlobalStyled/>
        <ResetStyled/>
        <Home/>
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
      </GlobalProvider>
    </>
  )
}

export default App