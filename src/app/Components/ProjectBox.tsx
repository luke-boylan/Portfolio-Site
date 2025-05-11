import Image from "next/image"

const ProjectBox = ({image, description}: {image:string, description:string}) => {
    return (
        <div className= "flex-row ">
            <Image alt = "" src={image}></Image>
            <span className="wrap-normal">{description}</span>
        </div>
    )
}

export default ProjectBox;