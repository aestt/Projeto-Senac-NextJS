"use client"

import { Geist } from 'next/font/google'
import { Eye } from "lucide-react";
import { Guest, guests } from "../../db/data";
import { useEffect, useState } from "react";
import Header from "../_components/header";
import Footer from "../_components/footer";
import Link from 'next/link';

const geist = Geist({
  subsets: ['latin'],
})

export default function Convidado() {
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
    
    function buttonGet(data: string, value: number) {
        if (data === "Confirmada") {
            return (
                <select className='pr-2' defaultValue={`confirmado-${value}`}>
                    <option value={`confirmado-${value}`}>Confirmado</option>
                    <option value={`pendente-${value}`}>Pendente</option>
                    <option value={`cancelado-${value}`}>Cancelado</option>
                </select>
            );
        } else if (data === "Cancelado") {
            return (
                <select className='pr-2' defaultValue={`cancelado-${value}`}> 
                    <option value={`confirmado-${value}`}>Confirmado</option>
                    <option value={`pendente-${value}`}>Pendente</option>
                    <option value={`cancelado-${value}`}>Cancelado</option>
                </select>
            );
        } else {
            return (
                <select className='pr-2' defaultValue={`pendente-${value}`}>
                    <option value={`confirmado-${value}`}>Confirmado</option>
                    <option value={`pendente-${value}`}>Pendente</option>
                    <option value={`cancelado-${value}`}>Cancelado</option>
                </select>
            );
        }
    }

    return(
        <main className={`${geist.className} bg-gray-100`}>
            <Header />

            <div className="flex flex-col justify-center items-center py-5 mt-8">
                <h1 className="text-4xl font-black">Lista de Convidados</h1>
                <p>Visualize os convidados do casamento em tempo real</p>
            </div>

            <div className='min-h-140 flex flex-col items-center'>
                <table className="my-8 min-w-[80%] bg-white border-1 border-gray-300">
                    <thead className="bg-rose-300">
                        <tr className="text-center font-semibold">
                            <th className="py-3">ID</th>
                            <th className="py-3">Nome</th>
                            <th className="py-3">CPF</th>
                            <th className="py-3">Mesa</th>
                            <th className="py-3">Telefone</th>
                            <th className="py-3">Status</th>
                            <th className="py-3">Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {guestList.map((item) => (
                            <tr key={item.id} className="border-b-1 border-gray-300 h-18 text-center">
                                <td className="py-3 px-4 text-center"><p className="text-center bg-rose-300 rounded-lg px-0.5 py-0.5">#{item.id}</p></td>
                                <td className="py-3 px-4">{item.fullName}</td>
                                <td className="py-3 px-4">{item.cpf}</td>
                                <td className="py-3 px-4">{item.table}</td>
                                <td className="py-3 px-4">{item.phone}</td>
                                <td className="py-3 px-4">{buttonGet(item.status, item.id)}</td>
                                <td className="py-3 px-6 text-center align-middle">
                                    <Link href={`/guest/${item.id}`} className="flex cursor-pointer duration-150 ease-in-out hover:opacity-50 items-center justify-center">
                                        <Eye className="inline-block stroke-2 w-9 text-rose-300"/>
                                        <p>Ver</p>
                                    </Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </main>
    )
}