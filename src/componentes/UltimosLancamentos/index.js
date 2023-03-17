import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo/index'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function ultimosLancamentos () {
  return (
    <UltimosLancamentosContainer>
    <Titulo 
        cor='#EB9B00' 
        tamanhoFonte='36px' 
        >Últimos Lançamentos</Titulo>
    <NovosLivrosContainer>
        {livros.map( livro => (
            <img src={livro.src} alt='livro'/>
        ))}
    </NovosLivrosContainer>
    </UltimosLancamentosContainer>
    
  )
}

export default ultimosLancamentos