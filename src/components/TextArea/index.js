import './TextArea.css'

const TextArea = (props) => {
    const placeholderModificada = `${props.placeholder}...`

let valor = ''

    const aoDigitado = (evento) => {
        console.log(evento.target.value)
    }
    
    return (
        <div className="text-area">
            <label>{props.label}</label>
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )

}

export default TextArea

