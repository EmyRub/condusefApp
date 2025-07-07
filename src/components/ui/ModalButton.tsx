
interface ModalButtonProps {
    onClick: () => void,
    text: string
}

export default function ModalButton({ onClick, text }: ModalButtonProps) {

    return (
        <button
            onClick={onClick}
            className="bg-teal-500 px-8 py-3 rounded-2xl text-white hover:bg-teal-700 uppercase font-bold w-11/12 md:w-80 shadow-lg"
        >
            {text}
        </button>
    )
}
