import { ResponsiveText } from "../text/responsiveText";

export default function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
    return (
        <button
            type="submit"
            className="
                mt-4 
                py-2 px-4 
                rounded 
                cursor-pointer
                hover:scale-105
                active:scale-100
                border border-btn-submit
                hover:bg-btn-hover
                group
                "
            disabled={isSubmitting}
        >
            {isSubmitting ? <ResponsiveText textSize="small" className="group-hover:text-text-inverted">Enviando...</ResponsiveText> : <ResponsiveText textSize="small" className="group-hover:text-text-inverted">Enviar</ResponsiveText>}
        </button>
    )
}