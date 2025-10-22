import React from "react";
import { ConteudoModal, FundoModal } from "./styles";
import { BotaoAcao } from "../Botao";

type PropsModal = {
    children?: React.ReactNode;
    onClick?: () => void
}

const Modal = ({ children, onClick }: PropsModal) => {

    return (
        <FundoModal onClick={onClick}>
            <ConteudoModal onClick={(e) => e.stopPropagation()}>
                <header>
                    <BotaoAcao type="button"  tipo="erro" arredondado onClick={onClick}>X</BotaoAcao>
                </header>
                <main>
                    {children}
                </main>
            </ConteudoModal>
        </FundoModal>
    )
}

export default Modal