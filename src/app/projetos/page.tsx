'use client'

import Carrousel from "@/components/carrousel";
import Container from "@/components/container/page";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Projetos() {
    const [projects, setProjects] = useState([])

    const getProjects = async () => {
        try {
            const response = await fetch("/api/projects", { method: "GET" });

            if (!response.ok) {
                throw new Error("Erro ao buscar os projetos");
            }

            const data = await response.json();
            setProjects(data);
        } catch (err: any) {
            alert(err.message)
            setProjects([])
        }
    }

    useEffect(() => {
        getProjects()
    }, [])

    return (
        <Container>
            <section id="project-section" className="p-10 max-h-[50rem] overflow-scroll">
                <h2>Projetos</h2>
                <div id="project-box" className="p-10">
                    {
                        projects.map((proj: any, index: number) => (
                            <article className="project flex flex-row h-100 w-[100%]" id={`Project-${index + 1}`} key={index}>
                                <div>
                                    <h3 className="mb-3">{proj.title}</h3>
                                    <div id="text">
                                        {proj.txt.map((p: string, i: number) => (
                                            <p key={i}>{p}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-[100%]">
                                    <Carrousel>
                                        {
                                            proj.img.map((link: string, n: number) => (
                                                <div className="relative w-80">
                                                    <Image
                                                        key={n}
                                                        src={link}
                                                        alt="Project Image"
                                                        layout="fill"
                                                        className="object-center"
                                                    />
                                                </div>
                                            ))
                                        }
                                    </Carrousel>
                                </div>
                            </article>
                        )
                        )}
                </div>
            </section>
        </Container>
    )
}