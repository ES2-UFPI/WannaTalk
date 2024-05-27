import { Pratica } from "../../../components/Pratica"
import roteiros from "../../../data/roteiros"

export default function PraticaRoteiro() {
    return(
        <div className="flex min-h-screen bg-[#F6F6F6] items-center justify-center">
            <Pratica roteiro={roteiros[0]}/>
        </div>
    )
}