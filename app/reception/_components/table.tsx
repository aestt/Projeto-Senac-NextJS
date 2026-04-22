"use client"

import { Guest, guests } from "@/db/data";
import { Circle, CircleCheck, CircleX } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export function GetTableReception({ guests }: { guests: Guest[] }) {
    function buttonAlert() {
        Swal.fire({
            title: "Deseja confirmar a presença?",
            text: "Você não poderá cancelar depois",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#9F1239",
            cancelButtonColor: "#FDA4AF",
            confirmButtonText: "Sim! Quero confirmar",
            cancelButtonText: "Cancelar"
            }).then((result) => {
            if (result.isConfirmed) Swal.fire({
                title: "Confirmado!",
                text: "A presença do convidado foi confirmada com sucesso.",
                icon: "success",
                confirmButtonColor: "#FDA4AF"
            });
});
    }
    function verifi(id: number, data: string) {
        if (data == "Pendente") {
            return (
                <div className="flex flex-col gap-3 items-end">
                    <span className="bg-rose-300 text-white py-1 px-2 rounded-lg font-medium text-sm">Pendente</span>
                    <div className="flex gap-2 justify-center bg-rose-600 text-white py-2 px-3 rounded-lg text-sm w-53">
                        <CircleCheck />
                        <button className="font-medium" onClick={() => {buttonAlert()}}>Confirmar presença</button>
                    </div>
                </div>
            )
        } else if (data == "Confirmada") {
            return (
                <div className="flex flex-col gap-3 items-end">
                    <span className="bg-rose-500 text-white py-1 px-2 rounded-lg font-medium text-sm">Confirmado</span>
                    <div className="flex gap-2 justify-center bg-rose-600 text-white py-2 px-3 rounded-lg text-sm w-53 opacity-20">
                        <CircleCheck />
                        <button className="font-medium" disabled>Convidado confirmado</button>
                    </div>
                </div>
            ) 
        } else if (data == "Cancelada") {
            return(
                <div className="flex flex-col gap-3 items-end">
                    <span className="bg-rose-100 py-1 px-2 rounded-lg font-medium text-sm">Cancelado</span>
                    <div className="flex gap-2 justify-center bg-rose-600 text-white py-2 px-3 rounded-lg text-sm w-53 opacity-30">
                        <CircleX />
                        <button className="font-medium" disabled>Convidado cancelado</button>
                    </div>
                </div>
            )
        }
    }
    
    return(
        <div className='flex flex-col justify-center gap-6 w-[90%] overflow-scroll '>            
            {guests.map((item) => (
                <section key={item.id} className="flex bg-white justify-between py-4 px-2 border-1 border-gray-200 ">
                    <div className="flex justify-center items-start gap-4">
                        <div className="p-3 rounded-full bg-rose-200 text-rose-900 font-semibold">{item.fullName[0] + (item.fullName[1]).toUpperCase()}</div>
                        <div className="flex flex-col gap-1">
                            <h4 className="font-semibold">{item.fullName}</h4>
                            <p className="text-sm opacity-50">{item.cpf}</p>
                            <p className="text-sm opacity-50">{item.table}</p>
                        </div>
                    </div>

                    {verifi(item.id, item.status)}
                </section>
            ))}
        </div>
    )
}