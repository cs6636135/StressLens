import {t} from "../components/text";
import { Send } from "lucide-react";
import { useState } from "react";
function WritePage(){
    const [topicContent, setTopicContent] = useState("")
    const [content, setContent] = useState("")
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(null)
    const [error, setError] = useState("")


    async function handleSubmit(e){
         e.preventDefault();
         try{
            setLoading(true);
            setError("");
            const response = await fetch("/api/note",{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({topicContent, content})
            });
            if(!response.ok){
                throw new Error("Something wrong");
            }
            const data = await response.json();

            setResult(data);
            setContent("");
         }
         catch(err){
            setError(err.message);
         }finally{
            setLoading(false);
         }
    };
   return (
    <main className="min-h-screen w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        <header className="flex flex-col mb-6 my-6 gap-2 p-2">
            <h1 className="text-3xl font-bold">{t.Writting.title}</h1>
            <p className="text-[hsl(var(--muted-foreground))]">{t.Writting.paragraph}</p>
        </header>
        <section className="shadow-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] rounded-xl my-6 p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mx-2">
                <header className="flex flex-col gap-2">
                    <label className="text-[hsl(var(--secondary-foreground))] text-sm">{t.Writting.boxTitle}</label>
                    <input value={topicContent} onChange={(e) => setTopicContent(e.target.value)} className="focus:ring-[hsl(var(--ring))] focus:ring-offset-1 focus:ring-2 focus:outline-none p-2 text-sm rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--input))]/30" placeholder={t.Writting.inputBoxTitle}></input> 
                </header>
                <section className="flex flex-col gap-2">
                    <label className="text-[hsl(var(--secondary-foreground))] text-sm">{t.Writting.boxh2}</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} maxLength={500} className="focus:ring-[hsl(var(--ring))] focus:ring-offset-1 focus:ring-2 focus:outline-none  p-2 text-sm h-40 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--input))]/30 " placeholder={t.Writting.inputBoxh2}></textarea>
                    <p className="text-[hsl(var(--muted-foreground))] text-xs">{content.length}{t.Writting.text}</p>
                </section>
                <section className="flex justify-center items-center my-5">
                <button type="submit" disabled={!content.trim() || !topicContent.trim() || loading} className="btn bg-[hsl(var(--primary))] border-none hover:bg-[hsl(var(--primary))]/90 rounded-3xl w-full sm:w-auto text-[hsl(var(--primary-foreground))] gap-2 p-5 px-8">
                <Send className="w-4 h-4 text-[hsl(var(--primary-foreground))]" />
                {loading? t.Writting.buttonLoad :t.Writting.button}</button>
                </section>
        </form>
        {error && (
        <p className="text-red-500 text-sm mt-2">
            {error}
        </p>
        )}
        {result && (
        <div className="mt-6 p-4 border rounded-lg">
            <h3 className="font-bold">Result</h3>
            <p><strong>Topic:</strong> {result.topic}</p>
            <p><strong>Stress Level:</strong>{result.stress_level}</p>
             
        </div>
        )}
        </section>
    </main>
   );
}
export default WritePage; 
//คะแนน 1/10 
//level 
//อารมณ์ที่ detect ได้ 
//กล่องเดิมแต่ render ชิ้นส่วนใหม่ 
