import { useState } from "react";
function HomePage(){ 
    const [ans,setAns] = useState("");
    function answer(e){
        const v = e.target.value
        if(v === "yes"){
            setAns("you lie")
        }
        else{
            setAns("you brutal")
        }
    }

    return (
        <div className="px-6 py-5">
            <h1>Can u feel ma heart</h1>
            <div className="flex gap-3">
            <button value="yes" onClick={answer} className="btn btn-success">yes</button>
            <button value="no" onClick={answer} className="btn btn-error">no</button>
            </div>
            <h2>{ans}</h2>
        </div>
    )
}
export default HomePage;