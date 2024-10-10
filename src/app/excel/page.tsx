import Header from "../components/home/header";
import Main from "../components/home/main";
import Sidebar from "../components/home/sidebar";
import Data from "@/data/data.json"


export default function Page() {
  return (<>
        <div className="bg-blue-gradient">
        <Header search={Data.excelSearch}/>
          <div className="flex" style={{height:"calc(100vh - 80px)"}}>
            <Sidebar sidebar={Data.excelSidebar}/>
            <Main images={Data.excelImages} list={Data.excelList} title={Data.excelTitle} desc={Data.excelDesc}/>
          </div>
        </div>
  </>
  );
}
