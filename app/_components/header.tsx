import { Sparkles } from "lucide-react";
import Link from "next/link";

const nome = "Marcelo"

export default function Header() {
    return(
        <header className="flex justify-between py-5 px-12 border-b-1 bg-white border-gray-200">
            <div className="flex items-center gap-10">
                <div className="flex justify-center items-center gap-2">
                    <Sparkles className="text-rose-600"/>
                    <h1 className="font-medium text-3xl">Wedding Pass</h1>
                </div>

                <nav>
                    <ul className="flex gap-5">
                        <li><Link href={"/dashboard"} className="hover:opacity-60 cursor-pointer">Dashboard</Link></li>
                        <li><Link href={"/guest"} className="hover:opacity-60 cursor-pointer">Lista de Convidados</Link></li>
                        <li><Link href={"reception"} className="hover:opacity-60 cursor-pointer">Recepção</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="flex items-center gap-3">
                <div className="bg-rose-500 w-11 h-11 flex justify-center items-center rounded-full text-2xl">{nome[0]}</div>
                <h4>Bem-vindo(a), <b>{nome}</b></h4>
            </div>
        </header>
    )
}