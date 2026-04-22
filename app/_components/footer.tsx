import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return(
        <footer className="bg-gray-200 opacity-70 flex justify-between items-center py-8 px-10">
            <div>
                <ul className="flex items-center gap-5 uppercase font-medium text-gray-500">
                    <li><Link href={"/dashboard"} className="hover:opacity-60 cursor-pointer">Dashboard</Link></li>
                    <li><Link href={"/guest"} className="hover:opacity-60 cursor-pointer">Lista de Convidados</Link></li>
                    <li><Link href={"reception"} className="hover:opacity-60 cursor-pointer">Recepção</Link></li>
                </ul>
            </div>

            <div className="flex items-center gap-2">
                <Sparkles className="text-gray-500" />
                <h2 className="text-2xl font-semibold text-gray-500">Wedding Pass</h2>
            </div>
        </footer>
    )
}