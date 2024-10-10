import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"
import appData from "@/data/data.json"
import Link from "next/link";

export default function Home() {
  return (<>
      <main className="bg-blue-gradient">
        <header className="flex items-center justify-between px-8 h-20">
            <div className="flex items-center">
                <span className="text-xl font-semibold">Logo</span>
            </div>
        </header>
        <div className="flex" style={{height:"calc(100vh - 80px)"}}>
          <div className="w-20">
          </div>
          <div className="bg-lightwhite rounded-tl-3xl w-full flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-center mb-2 mt-8">Create with Confidence, Effortlessly</h1>
            <p className="text-xl text-center text-gray-600 mb-12 mt-3">Stay on top of every project, built to inspire and deliver.</p>
            <section className="mb-12 px-4 flex gap-8 justify-center">
            {appData.apps.map((item, index) => ( 
              <div className="flex flex-col justify-center items-center">  
                <Card key={index} className="group relative overflow-hidden">
                  <CardContent className="p-0">
                    <img src={item.image} alt={item.title} className="w-72 h-48 object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity p-4">
                      <Link href={item.url} className="rounded-full bg-black text-white hover:bg-gray-300 p-1">
                        <i className="ri-add-line ri-xl"></i>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <p className=" text-black font-semibold mt-2">{item.title}</p>
              </div>
              ))}
            </section>
          </div>
        </div>
      </main>
  </>
  );
}
