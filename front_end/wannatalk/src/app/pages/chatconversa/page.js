
import { Chat } from "../../../components/Chat";
import NavBar from "../../../components/NavBar";


export default function Home (){
    console.log(Chat)
    return(
        <div className="bg-[#F6F6F6]">
  

        <NavBar/>
        <div className="flex min-h-screen bg-slate-50 items-center justify-center">
            <Chat/>
        </div>
        </div>
    )
}