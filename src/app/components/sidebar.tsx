export default function Sidebar(){
    return(
        <>
        <div className="w-20 ">
            <div>
                <ul>
                    <li className="flex justify-center items-center flex-col p-4 gap-1">
                        <i className="ri-home-5-line ri-xl"></i>                       
                        <p className="text-xs">Home</p>
                    </li>
                    <li className="flex justify-center items-center flex-col p-4 gap-1">
                        <i className="ri-edit-box-line ri-xl"></i>                       
                        <p className="text-xs">Create</p>
                    </li><li className="flex justify-center items-center flex-col p-4 gap-1">
                        <i className="ri-apps-2-line ri-xl"></i>                       
                        <p className="text-xs">Apps</p>
                    </li><li className="flex justify-center items-center flex-col p-4 gap-1">
                        <i className="ri-lightbulb-line ri-xl"></i>                       
                        <p className="text-xs">Learn</p>
                    </li><li className="flex justify-center items-center flex-col p-4 gap-1">
                        <i className="ri-settings-5-line ri-xl"></i>                       
                        <p className="text-xs">Settings</p>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
};