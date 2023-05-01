import { Route, Routes, Navigate, BrowserRouter} from "react-router-dom";
import { Home } from "../pages/Home";
import { Tweets } from "../pages/Tweets";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
