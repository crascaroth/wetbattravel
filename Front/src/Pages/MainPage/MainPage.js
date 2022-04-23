import { useContext } from "react";
import Context from "../../GlobalState/Context";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import Dashboard from "../../Components/Dashboard/Dashboard";

import {
  BodyContainer,
  SideBarContainer,
  DashboardContainer,
} from "./MainPage_styled.js";

const MainPage = () => {
  const { states, setters, requests } = useContext(Context);

  return (
    <div>
      <Header />
      <BodyContainer>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>
        <DashboardContainer>
          <Dashboard />
        </DashboardContainer>
      </BodyContainer>
    </div>
  );
};

export default MainPage;
