import './DropdownList.css'

const DropdownList = (props) => {

    return (
        <div className='dropdown-liste'>
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
               {props.itens.map(item => {
                return <option key={item}>{item}</option>
               })}
            </select>
        </div>
    )
}

export default DropdownList