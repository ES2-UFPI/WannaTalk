
import ListaRoteiros from "../../../components/ListaRoteiros";
import NavBar from "../../../components/NavBar";

import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";

//import NavBar from "../components/NavBar";
export default function Home() {
  return (
    <main>
      <div className="bg-[#F6F6F6]">
        <NavBar/>

            <div className="flex min-h-screen bg-white items-center justify-center max-h-[700px] rounded-md">
            <Card className="w-[800px] bg-[#F6F6F6] text-white m-[100px]">
                    <CardHeader>
                        <CardTitle></CardTitle>
                    </CardHeader>
                    <CardContent>
                    <ListaRoteiros/>
                    </CardContent>
                </Card>
             
            </div>
    
      </div>
    </main>
  );
}
