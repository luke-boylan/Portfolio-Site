import Image from "next/image";

const ProjectBox = ({title, image, description}: {title:string, image:string, description:string}) => {
    return (
        <div className= "w-250 p-6 m-8 bg-white rounded-2xl">
            <p className="font-bold">{title}</p>
            <div className=" grid grid-flow-col">
                <div id="image border" className="rounded-4xl flex overflow-hidden w-64 h-64">
                    <Image alt = "" src={image} width={400} height={400} className="object-none"></Image>
                </div>
                <div className="w-lg content-center">
                    <span className="wrap-normal text-center">{description}</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectBox;