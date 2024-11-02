import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./routes/MainPage";
import Bookings from "./routes/Bookings";
import Settings from "./routes/Settings";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
