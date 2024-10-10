import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function Main(props:any){
    return(
        <>
        <ScrollArea className="bg-lightwhite rounded-tl-3xl w-full">
            <div className="max-w-full mx-auto px-4 py-8">
                <main>
                <div className="text-sm space-x-4 text-center mb-12">
                    <a href="#" className="text-gray-600 hover:text-gray-900">Discover</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Collaborate</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Help & Support</a>
                </div>
                <h1 className="text-4xl font-bold text-center mb-2 mt-3">{props.title}</h1>
                <p className="text-xl text-center text-gray-600 mb-12 mt-3">{props.desc}</p>  
                <section className="mb-12 px-4">
                    <h2 className="text-2xl font-semibold mb-4">Create New</h2>
                    <Carousel opts={{ align: "start" }} className="w-full">
                    <CarouselContent>
                    {props.images.map((item:any, index:any) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                            <Card key={index} className="group relative overflow-hidden">
                                <CardContent className="p-0">
                                <img src={item.image} alt={item.title} className=" w-full h-48 object-cover" />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity p-4">
                                    <Button size="icon" variant="secondary" className="rounded-full bg-black text-white">
                                    <i className="ri-add-line ri-xl"></i>
                                    </Button>
                                    </div>
                                </CardContent>
                            </Card>
                            <p className=" text-black font-semibold mt-1">{item.title}</p>
                            </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                    </Carousel>
                </section>
                <section className="px-4">
                    <h2 className="text-2xl font-semibold mb-4">Recent Work</h2>
                    <Table className="min-w-full bg-white">
                        <TableBody>
                        {props.list.map((item:any,index:any) =>  (
                            <TableRow key={index} className="border-b">
                                <TableCell className="py-2">
                                    <div className={`w-32 h-16 rounded-lg flex items-center justify-center text-white font-semibold`} style={{ backgroundColor: item.color }}>
                                        {item.title}
                                    </div>
                                </TableCell>
                                <TableCell className="px-4 py-2">{item.project}</TableCell>
                                <TableCell className="px-4 py-2">{item.owner}</TableCell>
                                <TableCell className="px-4 py-2">{item.time}</TableCell>
                                <TableCell className="px-4 py-2"><i className="ri-more-fill ri-xl"></i></TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </section>
                </main>
            </div>
        <ScrollBar orientation="vertical" />
        </ScrollArea>
    </>
    )
}