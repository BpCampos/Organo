import './Field.css'

const TextField = ({ type = 'text', obrigatorio, label, placeholder, valor, aoAlterado }) => {

    const aoDigitado = (e) => {
        aoAlterado(e.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholder}

            />
        </div>
    )
}

export default TextField