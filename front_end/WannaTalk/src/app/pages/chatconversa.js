'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";

export default function chatconversa(){
    return(
        <div className="flex items-center justify-center"> 
       <Card>
        <CardHeader>
            <CardTitle>

            </CardTitle>
        </CardHeader>
        <CardContent>
            <p> Mensagem</p>
        </CardContent>
        <CardFooter>

        </CardFooter>
       </Card>

        </div>
    )
}