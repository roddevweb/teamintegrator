import TextArea from '../TextArea'
import DropdownList from '../DropdownList'
import './Formulario.css'
import Button from '../../Button'



const Formulario = () => {

    const team = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {

        evento.preventDefault()

    }

    return (

        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha o fomulário para criar o card do colaborador</h2>
                <TextArea obrigatorio={true} label="Nome" placeholder='Digite seu nome' />
                <TextArea obrigatorio={true} label="Cargo" placeholder='Digite seu cargo' />
                <TextArea label="Imagem" placeholder='Digite o endereço da imagem' />
                <DropdownList obrigatorio={true} label="team" itens={team}/>
                <Button>Criar card</Button>
            </form>
        </section>


    )
}

export default Formulario