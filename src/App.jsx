import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter
      basename={import.meta.env.DEV ? '/' : '/prj--vite-react-app/'}
    >
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <h1>Hello World</h1>
              <Link to='about'>About Us</Link>
            </div>
          }
        />
        <Route path='/about' element={<div>About</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App