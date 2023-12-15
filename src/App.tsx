import React from 'react';
import { HeaderUi } from "./widgets/loyaout/ui/HeaderUi";
import { FooterUi } from "./widgets/loyaout/ui/FooterUi";
import { AuctionPage } from "./pages/AuctionPage";
import { AuthPage } from "./pages/AuthPage";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <HeaderUi />
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<AuctionPage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Router>
        </div>
        <FooterUi />
    </div>
  );
}

export default App;
