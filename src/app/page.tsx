import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Main from "./components/main";

export default function Home() {
  return (<>
  <div className="bg-blue-gradient">
        <Header/>
        <div className="flex" style={{height:"calc(100vh - 80px)"}}>
          <Sidebar />
          <Main/>
        </div></div>
  </>
  );
}
