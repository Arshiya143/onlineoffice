import Header from "../components/home/header";
import Main from "../components/home/main";
import Sidebar from "../components/home/sidebar";
import Data from "@/data/data.json"


export default function Page() {
  return (<>
        <div className="bg-blue-gradient">
        <Header search={Data.pdfSearch}/>
          <div className="flex" style={{height:"calc(100vh - 80px)"}}>
            <Sidebar sidebar={Data.pptSidebar}/>
            <Main images={Data.pdfImages} list={Data.pdfList} title={Data.pdfTitle} desc={Data.pdfDesc}/>
          </div>
        </div>
  </>
  );
}
