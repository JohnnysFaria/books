import Input from '../Input'
import { useState } from 'react'
import styled from 'styled-components'
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

const Index = () => {
    const [livroPesquisado, setLivrosPesquisado] = useState(null);
    
    return (
        <PesquisaContainer>
        <Titulo>Já sabe por onde começar?</Titulo>
        <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
        <Input 
            placeholder='Escreva sua próxima leitura'
            onBlur={event => {
                const textoDigitado = event.target.value
                const resultado = livros.filter(livro => livro.nome.includes(textoDigitado))
                setLivrosPesquisado(resultado)
            }}
        />
        { livroPesquisado.map( livro => (
                <div>
                 <p>{livro.nome}</p>
                 <img src={livro.src}/>

                </div>
                ))}
    </PesquisaContainer>
  )
}

export default Index