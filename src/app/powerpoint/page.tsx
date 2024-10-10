import Header from "../components/home/header";
import Main from "../components/home/main";
import Sidebar from "../components/home/sidebar";
import Data from "@/data/data.json"
import "../globals.css";

export default function Page() {
  return (<>
        <div className="bg-blue-gradient">
          <Header search={Data.pptSearch}/>
          <div className="flex" style={{height:"calc(100vh - 80px)"}}>
            <Sidebar sidebar={Data.pptSidebar}/>
            <Main images={Data.pptImages} list={Data.pptList} title={Data.pptTitle} desc={Data.pptDesc}/>
          </div>
        </div>
  </>
  );
}
