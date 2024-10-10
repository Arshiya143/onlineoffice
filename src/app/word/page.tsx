import Header from "../components/home/header";
import Main from "../components/home/main";
import Sidebar from "../components/home/sidebar";
import Data from "@/data/data.json"


export default function Page() {
  return (<>
        <div className="bg-blue-gradient">
          <Header search={Data.WordSearch}/>
          <div className="flex" style={{height:"calc(100vh - 80px)"}}>
          <Sidebar sidebar={Data.wordSidebar}/>
          <Main images={Data.wordImages} list={Data.wordList} title={Data.wordTitle} desc={Data.wordDesc}/>
          </div>
        </div>
  </>
  );
}
