'use client'

import Carrousel from "@/components/carrousel";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectList() {
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
        <div id="project-box" className="p-[1%]">
            {
                projects.map((proj: any, index: number) => (
                    <article className="project flex flex-row h-full w-[100%] border-black border-b-2 p-3 hover:cursor-pointer hover:border-gray-700" id={`Project-${index + 1}`} key={index}>
                        <div className="w-[70%]">
                            <h3 className="mb-3">{proj.title}</h3>
                            <div id="text">
                                {proj.txt.map((p: string, i: number) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>
                        <div className="w-[30%] p-1 bg-amber-100">
                            <div className="w-[100%] flex justify-center align-middle">
                                <Carrousel>
                                    {
                                        proj.img.map((link: string, n: number) => (

                                            <Image
                                                key={n}
                                                src={link}
                                                alt="Project Image"
                                                height={100}
                                                width={100}
                                            />
                                        ))
                                    }
                                </Carrousel>
                            </div>
                        </div>
                    </article>
                )
                )}
        </div>
    )
}