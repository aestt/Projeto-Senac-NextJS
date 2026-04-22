"use client"

import { Guest, guests } from "@/db/data";
import { CircleUser } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function GetTable(props: {guestId: string}) {
    const [guestList, setGuestList] = useState<Guest[]>(guests);

    useEffect(() => {
        function loadGuests() {
            try{
                const data = guests;
                setGuestList(data);
            } catch {
                alert("Algo deu errado!");
            }
        }

        loadGuests();
    }, [guestList])  

    const guest = guestList.find(g => g.id === 1) || "Não definida";
    
    return(
        <div className='bg-white flex flex-col w-[30%] border-2 border-gray-400 overflow-scroll max-h-125'>
            <div className='flex flex-col justify-center items-center text-center bg-gray-200 h-12 border-b-2 border-gray-400'>
                <h2 className='text-lg font-semibold py-2'>Lista de Convidados ({guestList.length})</h2>
            </div>
            
            {guestList.map((item) => (
                <Link href={`/guest/${item.id}`} key={item.id} className='cursor-pointer flex gap-2 border-b-1 border-gray-200 py-5 px-7 duration-100 hover:border-gray-800'>
                    <CircleUser />
                    <p>{item.fullName.toUpperCase()}</p>
                </Link>
            ))}
        </div>
    )
}