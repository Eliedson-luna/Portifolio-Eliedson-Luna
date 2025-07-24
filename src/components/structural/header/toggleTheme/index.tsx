'use client'
export default function ToggleTheme() {
    return (
        <div className="flex place-self-center mr-10">
            <label className="relative cursor-pointer">
                {/* Checkbox escondido, mas funcional */}
                <input
                    type="checkbox"
                    className="sr-only peer"
                    name="option"
                    id="option"
                />

                {/* Imagem quando não está checado */}
                <div className="h-5 w-5 rounded-full bg-gray-300 peer-checked:hidden overflow-hidden">
                    <img
                        src="/images/header/moon.png"
                        alt="Desmarcado"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Imagem quando está checado */}
                <div className="hidden peer-checked:block h-5 w-5 rounded-full overflow-hidden">
                    <img
                        src="/images/header/sun.png"
                        alt="Marcado"
                        className="h-full w-full object-cover"
                    />
                </div>
            </label>
        </div>
    )
}