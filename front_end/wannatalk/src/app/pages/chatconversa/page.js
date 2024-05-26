import { Chat } from "@/components/Chat";

{/*import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home(){
    return(
        <div className="flex min-h-screen bg-slate-50 items-center justify-center">
            <Card className= "w-[800px] h-[600px] grid grid-rows-[min-content_1fr_min-content]">
                <CardHeader>
                    <CardTitle> Chat</CardTitle>
                    <CardDescription> descricao </CardDescription>
                </CardHeader>
                <CardContent className ="space-y-4">
                    <div className="flex gap-3 text-slate-600 text-sm">
                        <Avatar>
                            <AvatarFallback></AvatarFallback>
                            <AvatarImage src=""/>
                        </Avatar>
                        <p className="leading-relaxed">
                            <span className="block font-bold text-slate-800">User:</span>
                            Isso criará uma nova branch com o nome especificado. Lembre-se de substituir nome-da-sua-branch pelo nome que você deseja dar à sua nova branch.

Se você também quiser mudar para essa nova branch imediatamente, você pode usar o seguinte comando:
                        </p>
                    </div>

                    <div>
                        <Avatar>
                            <AvatarFallback> </AvatarFallback>
                            <AvatarImage src=""/>
                        </Avatar>
                        <p className="leading-relaxed">
                            <span className="block font-bold text-slate-800">Chat:</span>
                        </p>

                    </div>
                </CardContent>
                <CardFooter className= " space-x-2">
                    <Input placeholder="Mensagem"/>
                    <Button type = "submit"> Enviar </Button>
                </CardFooter>
            </Card>
        </div>
    )
}*/}

export default function Home (){
    console.log(Chat)
    return(
        <div className="flex min-h-screen bg-slate-50 items-center justify-center">
            <Chat/>
        </div>
    )
}