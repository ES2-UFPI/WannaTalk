'use client';

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { ScrollArea } from "../components/ui/scroll-area";
import { useChat } from "ai/react";
import { Input } from "../components/ui/input";

// Adicionando logs para verificar os caminhos de importação
console.log("Avatar import path: ", require.resolve("../components/ui/avatar"));
console.log("Button import path: ", require.resolve("../components/ui/button"));
console.log("Card import path: ", require.resolve("../components/ui/card"));
console.log("ScrollArea import path: ", require.resolve("../components/ui/scroll-area"));
console.log("Input import path: ", require.resolve("../components/ui/input"));

export default function Chatpn() {
  const { messages, input, handleInputChange, handleSubmit } = useChat(); // Remova a vírgula aqui

  return (
    <div>
      <Card className="w-[800px]">
        <CardHeader>
          <CardTitle>Chat</CardTitle>
          <CardDescription>descrição</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] w-full space-y-4">
            {messages.map(message => (
              <div key={message.id} className="flex gap-3 text-slate-600 text-sm">
                {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback>U</AvatarFallback>
                    <AvatarImage src="/path-to-user-image" alt="User" />
                  </Avatar>
                )}
                {message.role === 'assistant' && (
                  <Avatar>
                    <AvatarFallback>A</AvatarFallback>
                    <AvatarImage src="/path-to-assistant-image" alt="Assistant" />
                  </Avatar>
                )}
                <p>
                  <span className="block font-bold text-slate-700">
                    {message.role === 'user' ? 'Usuario' : 'AI'}:
                  </span>
                  {message.content}
                </p>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form className="space-x-2" onSubmit={handleSubmit}>
            <Input placeholder="Mensagem" value={input} onChange={handleInputChange} />
            <Button type="submit">Enviar</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
