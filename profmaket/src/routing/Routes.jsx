import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Works from '../pages/Works';


function Header() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/Works" element={<Works />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Header;