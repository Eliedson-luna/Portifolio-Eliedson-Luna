'use client'
import Container from "@/components/container/page";
import Image from "next/image";
import Link from "next/link";


export default function Contatos() {

    function downloadCv() {

        const cvPath = "/assets/curriculoEliedsonLuna.pdf";
        const archiveName = "curriculoEliedsonLuna.pdf";

        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = cvPath;
        a.download = archiveName;

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

    }

    return (
        <Container>
            <div className="
            h-full
            justify-center
            content-center
            ">
                <h3>Fique vontade para me chamar caso queira trabalhar comigo!</h3>
                <div id="contact-list" className="flex justify-center">
                    <Link className="m-5" href="/contatos/sendMail">
                        <Image
                            alt="Email"
                            src="/images/mail.png"
                            width={30}
                            height={30} />
                    </Link>

                    <Link className="m-5" href="https://www.linkedin.com/in/eliedsonluna/" target="_blank">
                        <Image
                            alt="Linkedin"
                            src="/images/linkedin.png"
                            width={30}
                            height={30} />

                    </Link>

                    <Link className="m-5" href="https://github.com/Eliedson-luna" target="_blank">
                        <Image
                            alt="Github"
                            src="/images/github-logo.png"
                            width={30}
                            height={30} />
                    </Link>
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