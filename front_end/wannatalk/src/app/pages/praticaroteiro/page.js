import { Pratica } from "../../../components/Pratica"
import roteiros from "../../../data/roteiros"
import NavBar from "../../../components/NavBar";

export default function PraticaRoteiro() {
    return(
        <div>
            <NavBar />
            <div className="flex min-h-screen bg-[#F6F6F6] items-center justify-center">
                <Pratica roteiro={roteiros[0]}/>
            </div>
        </div>
    )
}