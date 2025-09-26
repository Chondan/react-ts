import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path='/' element={<App />} />
            {/* Add more routes here */}
        </Routes>
    </Router>
);

export default AppRouter;
