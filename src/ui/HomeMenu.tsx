import { Link } from "react-router-dom"

export const HomeMenu = () => {
    return (
        <div className="container h-dvh mx-auto grid content-center">
            <div className="flex flex-col justify-center gap-2 text-center mx-auto w-2/3">
                <Link to="/tasks" className="bg-btn rounded-md text-white font-bold px-3 py-2">
                    Tasks
                </Link>
                <Link to="/list" className="bg-btn rounded-md text-white font-bold px-3 py-2">
                    List
                </Link>
            </div>
        </div>
    )
}