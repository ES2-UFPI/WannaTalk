'use client';

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card,CardHeader,CardContent,CardTitle,CardDescription, CardFooter} from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

export function Pratica({ roteiro }) {
    const { messages, input, handleInputChange, handleSubmit } = useChat()    

    return(
        <div className="flex min-h-screen bg-[#1E56A0] items-center justify-center max-h-[700px] rounded-md">
            <Card className="w-[800px] bg-[#1E56A0] text-white m-[100px]">
                <CardHeader>
                    <CardTitle className="justify-center">Praticar: {roteiro.titulo}</CardTitle>
                    <CardDescription className="text-white"> {roteiro.resumo} </CardDescription>
                </CardHeader>

                <CardContent>
                    <ScrollArea className="w-full h-[400px]  pr-4">
                    {messages.map(message => {
                            return(
                                <div key= {message.id}className="flex gap-3 text-slate-600 text-sm mb-4">
                                    {message.role ==='user' && (
                                        <Avatar className="bg-[#F6F6F6]">
                                        <AvatarFallback>Us</AvatarFallback>
                                        <AvatarImage src=""/>
                                    </Avatar>
                                    )}
                                    {message.role ==='assistant' && (
                                        <Avatar>
                                        <AvatarFallback>CT</AvatarFallback>
                                        <AvatarImage src=""/>
                                    </Avatar>
                                    )}
                            
                            <p className="leading-relaxed">
                                <span className="block font-bold text-white">
                                    {message.role==='user'? 'Usuario': 'Chat'}:</span>
                                    {message.content}
                            </p>
                        </div> 
                            )
                        })}
                    </ScrollArea>
                </CardContent>

                <CardFooter>
                    <Button className="bg-[#57B2FF] hover:bg-[#7bbffc] mr-2" type = "submit"> Microfone </Button>
                    <form className= "space-x-2 w-full flex gap-2 text-black" onSubmit={handleSubmit}>
                    <Input className="bg-[#D6E4F0]" placeholder="Mensagem" value ={input} onChange ={handleInputChange}/>
                    <Button className="bg-[#57B2FF] hover:bg-[#7bbffc]" type = "submit"> Enviar </Button>
                    </form>
                </CardFooter>
            </Card>
        </div>
    )
}