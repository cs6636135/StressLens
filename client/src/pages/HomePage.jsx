import {useNavigate} from "react-router-dom";
import {t} from "../components/text";
function HomePage(){ 
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/WritePage");
    }
   
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold mb-4">{t.Home.title}</h1>
             <h2 className="text-xl text-grey-800">{t.Home.context}</h2>
             <div className="flex my-10">
             <button className="text-lg rounded-3xl text-white btn btn-lg btn-success"onClick={handleClick}>{t.Home.button}</button>
             </div>
        </div>
    )
}
export default HomePage;