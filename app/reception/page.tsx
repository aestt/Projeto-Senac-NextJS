"use client"

import { Sparkles, Bell, Search} from "lucide-react";
import { GetTableReception } from "./_components/table";
import { Geist } from 'next/font/google'
import { guests } from "@/db/data";
import Swal from "sweetalert2";
import { useState } from "react";

const geist = Geist({
  subsets: ['latin'],
})

export default function Reception() {
    const [search, setSearch] = useState("");

    const filteredGuests = guests.filter((g) =>
        g.cpf.toLowerCase().includes(search.toLowerCase()),
    );

    return(
        
        <main className={`${geist.className} bg-gray-100 text-gray-700 flex flex-col`}>
            <header className="flex justify-between items-center bg-white py-6 px-5">
                <div className="flex gap-4">
                    <Sparkles className="text-rose-600 w-10 h-auto"/>

                    <div className="text-center">
                        <h1 className="text-2xl font-semibold">Wedding Pass - Recepção</h1>
                        <p >Confirme a presença dos convidados</p>
                    </div>
                </div>

                <Bell className="w-8 h-auto" />
            </header>

            <section className="flex flex-col gap-5 mt-10 justify-center items-center">
                <form className="flex gap-4 bg-white py-4 px-5 w-[90%] rounded-lg border-2 border-gray-200 shadow-2xs" onSubmit={(e) => e.preventDefault()}>
                    <Search />
                    <input className="w-full h-full focus:outline-none" type="text" placeholder="Buscar por um CPF" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                </form>

                <h3 className="font-semibold text-lg">Exibindo {filteredGuests.length} resultados</h3>

                
                <GetTableReception guests={filteredGuests}/>
            </section>

            <footer className="bg-gray-200 opacity-70 flex justify-between items-center py-8 px-10 mt-10">
                <div>
                    <ul className="flex items-center gap-5 uppercase font-medium text-gray-500">
                        <li>Dashboard</li>
                        <li>Lista de Convidados</li>
                        <li>Recepção</li>
                    </ul>
                </div>
            </footer>
        </main>
    )
}