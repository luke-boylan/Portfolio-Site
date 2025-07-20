import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import "./ProjectBox.css";
import {useState} from "react";
import { Dialog, DialogPanel} from "@headlessui/react";
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({title, image, description, link}: {title:string, image:string, description:string, link:string}) => {

    const [magnifyingGlass, setVisibility] = useState("magnifyingGlassOff");

    function toggleMagnifyingGlass(){
        if(magnifyingGlass === "magnifyingGlassOff")
        {
            setVisibility("magnifyingGlassOn");
        }
        else{
            setVisibility("magnifyingGlassOff");
        }
    }

    const [imageOpen, setImageOpen] = useState(false);

    return (
        <div className= "w-250 p-6 m-8 bg-white rounded-2xl">
            <p className="font-bold">{title}</p>
            <div className=" grid grid-flow-col">
                    <div id="image border" className="rounded-4xl flex justify-center overflow-hidden w-64 h-64 border cursor-pointer" 
                    onMouseEnter={toggleMagnifyingGlass} onMouseLeave={toggleMagnifyingGlass} onClick={() => setImageOpen(true)}>
                        <Image alt = "" src={image} width={400} height={400} className="object-none"/>
                        <FaMagnifyingGlass size={100} className = {'absolute self-center ' + magnifyingGlass} />
                    </div>
                    <Dialog open={imageOpen} onClose={() => setImageOpen(false)} className="relative z-50">
                        <div className="fixed inset-0 flex items-center justify-center p-4 backdrop-brightness-75 backdrop-blur-md">
                            <DialogPanel className="bg-white ">
                            <Image
                                alt="Expanded"
                                src={image}
                                width={1200}
                                height={1200}
                                className="max-w-full h-auto"
                            />
                            </DialogPanel>
                        </div>
                    </Dialog>
                <div className="w-lg grid">
                    <span className="wrap-normal text-center self-end">{description}</span>
                    <div className = "self-end flex">
                        <a href={link} target="_blank">
                            <div className="flex border border-double border-4 pl-2 pr-2 pt-1 pb-1 gap-2 items-center bg-orange-300">
                                <FaGithub className="self-center"></FaGithub>
                                <span className="">Github Link</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectBox;