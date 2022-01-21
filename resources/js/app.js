import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";

const rootElement = document.getElementById( "react-app" );

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                {/* <Route path="expenses" element={<Expenses />} />
                <Route path="invoices" element={<Invoices />} /> */}
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);
