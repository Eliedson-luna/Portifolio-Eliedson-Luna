'use client'
import Container from "@/components/structural/container";
import Image from "next/image";
import Link from "next/link";

export default function Contatos() {

    function downloadCv() {

        const cvPath = "/assets/Curriculo_Eliedson_Luna_Dev_Frontend.pdf";
        const archiveName = "Curriculo_Eliedson_Luna_Dev_Frontend.pdf";

        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = cvPath;
        a.download = archiveName;

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

    }

    const icons = [
        { alt: 'Email', src: "/images/contacts/mail.png", href: "/contatos/sendMail" },
        { alt: 'Linkedin', src: "/images/contacts/linkedin.png", href: "https://www.linkedin.com/in/eliedsonluna/" },
        { alt: 'Github', src: "/images/contacts/github-logo.png", href: "https://github.com/Eliedson-luna" },
    ]

    return (
        <Container>
            <div className="
            h-full
            justify-center
            content-center
            ">
                <div className="text-center">
                    <h3>Fique vontade para me chamar caso queira trabalhar comigo!</h3>
                </div>
                <div id="contact-list" className="flex justify-center">

                    {icons.map((icon, index) => (
                        <Link key={index} className="m-5 hover:shadow-blue-100" href={icon.href} target="_blank">
                            <Image
                                alt={icon.alt}
                                src={icon.src}
                                width={30}
                                height={30} />
                        </Link>
                    ))}
                    <button className="cursor-pointer m-5" onClick={downloadCv}>
                        <Image
                            alt="Baixar Curriculo"
                            src="/images/file.svg"
                            width={30}
                            height={30} />
                    </button>
                </div>
            </div>
        </Container>
    )
}