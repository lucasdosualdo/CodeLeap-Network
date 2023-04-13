import GlobalStyle from "./GlobalStyle";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
