

import Link from "next/link";

export default function Header() {
    return (
        <header className="mb-2">
            <div className="
             bg-[#333333]
             text-[#f1f1f1] 
             text-center 
             drop-shadow-2xl
             pt-3
             pb-3
             "
            >
                <h1 className="text-5xl"><Link href={'/'}>DevLuna</Link></h1>
                <span>Dev Frontend | JavaScript Enthusiast | UI/UX Creator</span>
            </div>
            <nav className="text-center text-1xl">
                <Link href={'/sobre'}>Sobre</Link>
                <Link href={'/projetos'}>Projetos</Link>
                <Link href={'/contatos'}>Contatos</Link>
            </nav>
        </header>
    )

}