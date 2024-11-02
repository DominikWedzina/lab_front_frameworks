import { FC } from "react";
import TopBar from "../common/TopBar";
import { Outlet } from "react-router-dom";

interface MainPageProps {}

const MainPage: FC<MainPageProps> = ({}) => {
  return (
    <div>
      <TopBar />
      MainPage
      <Outlet/>
    </div>
  );
};

export default MainPage;
