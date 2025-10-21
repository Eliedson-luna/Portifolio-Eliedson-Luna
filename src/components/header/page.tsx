

import Link from "next/link";

export default function Header() {
    return (
        <header className="mb-2 h-[10%]">
            <div className="text-yellow-300 text-center sm:text-[1rem] md:text-[1.5rem] lg:text-[1rem]">
                !!! EM DESENVOLVIMENTO !!!
            </div>
            <div className="
            h-[80%]
            grid
            place-items-center
            box-
             bg-[#151515]
             text-[#f1f1f1] 
             text-center 
             drop-shadow-2xl
             pt-3
             pb-3
             "
            >
                <h1 className="text-[1.5rem]"><Link href={'/'}>DevLuna</Link></h1>
                <span className="text-[1.1rem]">Dev Frontend | JavaScript Enthusiast | UI/UX Creator</span>
            </div>
            <nav className="text-center text-[1.1rem] text-1xl">
                <Link href={'/sobre'}>Sobre</Link>
                <Link href={'/projetos'}>Projetos</Link>
                <Link href={'/contatos'}>Contatos</Link>
            </nav>
        </header>
    )

}