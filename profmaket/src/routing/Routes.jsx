import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Works from '../pages/Works';
import Contacts from '../pages/Contacts';
import Forms from "../pages/Forms";
import Work from "../pages/Work";


function Header() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/Works" element={<Works />} />
                    <Route path="/Contacts" element={<Contacts />} />
                    <Route path="/Forms" element={<Forms />} />
                    <Route path="/Work/:id" element={<Work />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Header;
