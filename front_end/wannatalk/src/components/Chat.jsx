'use client';

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card,CardHeader,CardContent,CardTitle,CardDescription, CardFooter} from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

export function Chat(){
    const { messages, input, handleInputChange, handleSubmit } = useChat(
    )
    return(
        <div className="flex min-h-screen bg-[#1E56A0] items-center justify-center">
            <Card className= "w-[800px] ">
                <CardHeader>
                    <CardTitle className="justify-center"> Titulo</CardTitle>
                    <CardDescription> descricao </CardDescription>
                </CardHeader>
                
                <CardContent >
                    <ScrollArea className="w-full h-[400px]  pr-4">
                        {messages.map(message => {
                            return(
                                <div key= {message.id}className="flex gap-3 text-slate-600 text-sm mb-4">
                                    {message.role ==='user' && (
                                        <Avatar>
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
                                <span className="block font-bold text-slate-800">
                                    {message.role==='user'? 'Usuario': 'Chat'}:</span>
                                    {message.content}
                            </p>
                        </div> 
                            )
                        })}
                        </ScrollArea>
                </CardContent>
                
                
                <CardFooter >
                    <form className= " space-x-2 w-full flex gap-2" onSubmit={handleSubmit}>
                    <Input placeholder="Mensagem" value ={input} onChange ={handleInputChange}/>
                    <Button type = "submit"> Enviar </Button>
                    </form>
                </CardFooter>
            </Card>
        </div>
    )
}