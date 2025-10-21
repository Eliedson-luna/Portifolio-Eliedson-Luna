"use client";

import Container from "@/components/structural/containers/container";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContatoPage() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        if (!captchaValue) {
            setError("⚠️ Por favor, confirme que você não é um robô.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/recaptcha", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    token: captchaValue,
                    expectedAction: "submit_form"
                }),
            });
            const data = await response.json();

            if (data.tokenProperties?.valid) {
                await fetch("https://formsubmit.co/goncalveseliedson@gmail.com", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, message }),
                });

                alert("✅ Mensagem enviada com sucesso!");
                setEmail("");
                setMessage("");
                recaptchaRef.current?.reset();
                setCaptchaValue(null);
            } else {
                console.log(JSON.stringify(data))
                setError("⚠️ Falha na verificação do reCAPTCHA. Tente novamente.");
                recaptchaRef.current?.reset();
                setCaptchaValue(null);
            }
        } catch (error) {
            console.error("Erro ao verificar reCAPTCHA:", error);
            setError("⚠️ Ocorreu um erro ao verificar o reCAPTCHA. Tente novamente.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Container>
            <div className="justify-center min-h-screen">
                <div className="max-w-lg mx-auto p-6 bg-[#343434] shadow-md shadow-black rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Entre em contato</h2>

                    {error && <p className="text-red-500">{error}</p>}

                    <form onSubmit={handleSubmit}>
                        <label className="block mb-2">Email:</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full p-2 border rounded"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label className="block mt-4 mb-2">Mensagem:</label>
                        <textarea
                            name="message"
                            className="w-full p-2 border rounded"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>

                        <div className="mt-4">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={'asdasdasdasda'}
                                onChange={setCaptchaValue}
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Enviando..." : "Enviar"}
                        </button>
                    </form>
                </div>
            </div>
        </Container>
    );
}
