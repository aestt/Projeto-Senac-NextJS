"use client"

import Link from "next/link";

export default function NotFound() {
    return(
        <main className="grid h-screen place-items-center bg-rose-950 px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-rose-100">404</p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-rose-100 sm:text-7xl">Página não encontrada</h1>
                <p className="mt-6 text-lg font-medium text-pretty text-rose-50 sm:text-xl/8">Desculpa, a página você inseriu não existe.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link href={"/dashboard"} className="rounded-md bg-rose-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-rose-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Voltar a Dashboard</Link>
                    <Link href={"#"} className="text-sm font-semibold text-white">Entrar em Contato <span aria-hidden="true">&rarr;</span></Link>
                </div>
            </div>
        </main>
    );
}