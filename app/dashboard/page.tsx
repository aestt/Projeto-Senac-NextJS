import { CircleUserRound, CircleCheck, Ban } from "lucide-react";
import { Geist } from 'next/font/google'
import Graphic, { DataProps } from "./_components/graphic";
import Header from "../_components/header";
import Footer from "../_components/footer";
import { guests } from "@/db/data";
 
const geist = Geist({
  subsets: ['latin'],
})


export default function Dashboard() {
    const getData: DataProps = {
        total: guests.length,
        confirmed: guests.filter(g => g.status === "Confirmada").length,
        canceled: guests.filter(g => g.status === "Cancelada").length,
    };

    return(
        <main className={`${geist.className} flex flex-col gap-10 w-screen bg-gray-100`}>
            <Header />
            
            <div className="flex flex-col justify-center items-center py-5">
                <h1 className="text-4xl font-black">Painel de Acompanhamento</h1>
                <p>Visualize o andamento do seu casamento em tempo real</p>
            </div>

            <section className='flex justify-center gap-10 text-white'>
                <div className='flex gap-4 bg-rose-800 w-[27%] py-6 px-6 rounded-lg'>
                    <CircleUserRound className="h-13 w-13"/>

                    <div className="space-y-1">
                        <h1 className="text-2xl">Total de Convidados</h1>
                        <p className="text-2xl font-bold">{getData.total}</p>
                    </div>
                </div>

                <div className='flex gap-4 bg-rose-600 w-[27%] py-6 px-6 rounded-lg'>
                    <CircleCheck className="h-13 w-13"/>

                    <div className="space-y-1">
                        <h2 className="text-2xl">Convidados Confirmados</h2>
                        <p className="text-2xl font-bold">{getData.confirmed}</p>
                    </div>
                </div>

                <div className='flex gap-4 bg-rose-400 w-[27%] py-6 px-6 rounded-lg'>
                    <Ban className="h-12 w-12"/>

                    <div className="space-y-1">
                        <h2 className="text-2xl">Convidados Cancelados</h2>
                        <p className="text-2xl font-bold">{getData.canceled}</p>
                    </div>
                </div>
            </section>

            <section className="flex justify-center gap-10">
                <div className="bg-white w-[calc(54%+2.5rem)] h-140 rounded-lg py-6 px-6 border-1 border-gray-300">
                    <div className="border-b-1 border-gray-200 pb-5">
                        <h2 className="font-semibold text-2xl">Status dos Convidados</h2>
                    </div>

                    <div>
                        <Graphic value1={getData.confirmed} value2={getData.total - getData.confirmed - getData.canceled} value3={getData.canceled}/>
                    </div>

                    <div className="flex justify-center items-center gap-10">
                        <div className="flex gap-2">
                            <div className="w-5 h-5 bg-rose-600 rounded-full"></div>
                            <p>Confirmados: {getData.confirmed}</p>
                        </div>

                        <div className="flex gap-2">
                            <div className="w-5 h-5 bg-rose-300 rounded-full"></div>
                            <p>Pendentes: {getData.total - getData.confirmed - getData.canceled}</p>
                        </div>

                        <div className="flex gap-2">
                            <div className="w-5 h-5 bg-rose-400 rounded-full"></div>
                            <p>Cancelados: {getData.canceled}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white w-[27%] rounded-lg py-6 px-6 space-y-13 border-1 border-gray-200">
                    <div className="border-b-1 border-gray-200 pb-5">
                        <h2 className="font-semibold text-2xl">Resumo do Casamento</h2>
                    </div>

                    <div className="space-y-4">
                        <p><b>Início:</b> 19:00</p>
                        <p><b>Local:</b> Rua das Antas, 1011</p>
                        <p><b>Mesa Principal:</b> 8 Pessoas</p>
                        <p className="flex gap-1"><b>Status:</b> Em andamento</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}