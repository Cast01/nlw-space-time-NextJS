export function EmptyMemories() {
    return (
        <div className="flex flex-1 items-center justify-center">
            <p className="w-[22.5rem] text-center leading-relaxed">
                Você ainda não registrou nenhuma lembrança, começe a{' '}
                <a
                    href="#"
                    className="text-blue-500 underline hover:text-blue-400"
                >
                    criar agora
                </a>
                !
            </p>
        </div>
    )
}
