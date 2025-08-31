import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

const Header = () => {
    return (
        <div className="grid w-full h-18 justify-end content-center gap-8 pr-8 pt-8">
            <div className="flex gap-8">
                <a href="mailto:lukeybob2@gmail.com"><MdMailOutline className="size-14"></MdMailOutline></a>
                <a href="https://github.com/luke-boylan" target="_blank"><FaGithub className="size-12"></FaGithub></a>
                <a href="https://www.linkedin.com/in/luke-boylan-13724b271/" target="_blank"><GrLinkedin className="size-12 text-blue-900"></GrLinkedin></a>
            </div>
        </div>
    )
}

export default Header;