import styled from "styled-components"

import { BotaoNavegar } from "../../components/Botao"
import FormContato from "../../containers/FormContato"
import { Container } from "../../styles"

const PageContainer = styled(Container)`
    header {
        display: flex;
        align-items: start;
        margin: 16px 8px 72px;

        a {
            padding: 8px 10px;
        }
    }
`

const Form = () => {

    return (
        <PageContainer>
            <header>
                <BotaoNavegar arredondado to="/" tipo="erro">X</BotaoNavegar>
            </header>
            <main>
                <FormContato />
            </main>
        </PageContainer>
    )
}

export default Form