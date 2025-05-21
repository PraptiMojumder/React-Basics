import { Link } from "react-router-dom";

function Nav() {
    return(
        <nav className="bg-gray-500 text-white shadow-md">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                
                    <div className="space-x-4">
                        <Link to="/">My Portfolio</Link>
                    </div>
                    <div className="space-x-5 ">
                       <Link to="/">Home</Link>
                       <Link to="about">About</Link>
                       <Link to="skills">Skills</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Nav;