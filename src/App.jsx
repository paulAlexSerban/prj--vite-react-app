import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const { VITE_BASENAME } = import.meta.env;

function App() {
    return (
        <BrowserRouter basename={VITE_BASENAME}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <h1>Hello World</h1>
                            <Link to="about">About Us</Link>
                        </div>
                    }
                />
                <Route path="/about" element={<div>About</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
