import Link from 'next/link'
import { Geist } from 'next/font/google'
import { CircleUser, CirclePlus, X } from "lucide-react";
import Header from '@/app/_components/header';
import Footer from '@/app/_components/footer';
import { GetTable } from './_components/table';
import { getGuestById } from "@/db/data";
import Swal from 'sweetalert2';
import { SaveButton } from './_components/button';

const geist = Geist({
  subsets: ['latin'],
})

export default async function EditarConvidado({params,}: {params: Promise<{ id: string }>}) {
    const { id } = await params;
    const guest = getGuestById(id);



    function buttonGet(data: string, value: string) {
        if (data === "Confirmada") {
            return (
                <select className='pr-2 text-lg border-b-1 border-gray-200 pb-0.5 pl-0' defaultValue={`confirmado-${value}`}>
                    <option value={`confirmado-${value}`}>Confirmado</option>
                    <option value={`pendente-${value}`}>Pendente</option>
                    <option value={`cancelado-${value}`}>Cancelado</option>
                </select>
            );
        } else if (data === "Cancelado") {
            return (
                <select className='pr-2 text-lg border-b-1 border-gray-200 pb-0.5' defaultValue={`cancelado-${value}`}> 
                    <option value={`confirmado-${value}`}>Confirmado</option>
                    <option value={`pendente-${value}`}>Pendente</option>
                    <option value={`cancelado-${value}`}>Cancelado</option>
                </select>
            );
        } else {
            return (
                <select className='pr-2 text-lg border-b-1 border-gray-200 pb-0.5 pl-0' defaultValue={`pendente-${value}`}>
                    <option value={`confirmado-${value}`}>Confirmado</option>
                    <option value={`pendente-${value}`}>Pendente</option>
                    <option value={`cancelado-${value}`}>Cancelado</option>
                </select>
            );
        }
    }

    return(
        <main className={`${geist.className} bg-gray-100 text-gray-700 flex flex-col`}>
            <Header />

            <div className="flex flex-col justify-center items-center py-5 mt-8">
                <h1 className="text-4xl font-black">Editar Convidado</h1>
                <p>Visualize e edite os convidados do casamento em tempo real</p>
            </div>

            <div>
                <Link className='flex justify-center items-center gap-2 bg-rose-500 w-40 py-2 px-4 text-white font-semibold rounded-lg ml-36 my-6 duration-150 ease-in-out hover:scale-104 hover:opacity-80' href={""}><CirclePlus /><p>Convidado</p></Link>
            </div>
            <section className='flex justify-center items-cente max-h-125 mb-19'>
            
                <GetTable guestId={id}/>

                <div className='bg-white w-[50%] flex flex-col gap-2 border-t-2 border-b-2 border-r-2 border-gray-400'>
                    <div className='flex justify-end'>
                        <X className='w-9 h-auto text-gray-400 duration-100 hover:opacity-50 cursor-pointer m-2'/>
                    </div>
                    
                    <section className='flex flex-col gap-10'>
                        <div className='flex items-center pl-15 py-0 gap-6'>
                            <div className='flex justify-center items-center gap-6'>
                                <CircleUser className='w-18 h-auto text-gray-700' />
                                <form className='flex flex-col'>
                                    <label htmlFor="fullname" className='text-lg font-semibold text-gray-700'>NOME E SOBRENOME</label>
                                    <input name='fullname' className='text-lg border-b-1 border-gray-200 pb-0.5' type='text' defaultValue={guest?.fullName}></input>
                                </form>
                            </div>

                            <div className='flex flex-col items-left justify-left'>
                                <h3 className='text-lg font-semibold text-gray-700'>PRESENÇA</h3>
                                {buttonGet(id, guest?.status === "Confirmada" || guest?.status === "Cancelada" ? guest.status: "Pendente")}
                            </div>
                        </div>

                        <div className='flex flex-col flex-wrap'>
                            <h2 className='text-lg font-semibold pl-15'>Informações do Convidado</h2>

                            <form>
                                <div className='grid grid-cols-3 gap-5 p-15 pt-0 mt-5 border-b-1 border-gray-200'>
                                    <div className='flex flex-col'>
                                        <label htmlFor='cpf'>CPF</label>
                                        <input className="border-b-1 border-gray-200 pb-0.5" name='cpf' type="text" defaultValue={guest?.cpf}></input>
                                    </div>

                                    <div className='flex flex-col'>
                                        <label htmlFor='email'>E-mail</label>
                                        <input className="border-b-1 border-gray-200 pb-0.5" name='email' type="text" defaultValue={guest?.email} contentEditable></input>
                                    </div>

                                    <div className='flex flex-col'>
                                        <label htmlFor='telefone'>Telefone</label>
                                        <input className="border-b-1 border-gray-200 pb-0.5" name='telefone' type="text" defaultValue={guest?.phone}></input>
                                    </div>

                                    <div className='flex flex-col'>
                                        <label htmlFor='mesa'>Mesa</label>
                                        <input className="border-b-1 border-gray-200 pb-0.5" name='mesa' type="text" defaultValue={guest?.table}></input>
                                    </div>

                                    <div className='col-span-3 flex justify-end align-end mt-10'>
                                        <SaveButton />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </section>

            <Footer />
        </main>
    )
}