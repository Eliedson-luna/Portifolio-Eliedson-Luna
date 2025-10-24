import { ResponsiveText } from "@/components/texts";

export default function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
    return (
        <button
            type="submit"
            className="
                mt-4 
                py-2 px-4 
                rounded 
                cursor-pointer
                text-text 
                bg-btn-submit 
                hover:bg-btn-hover"
            disabled={isSubmitting}
        >
            {isSubmitting ? <ResponsiveText type="tiny">Enviando...</ResponsiveText> : <ResponsiveText type="tiny">Enviar</ResponsiveText>}
        </button>
    )
}