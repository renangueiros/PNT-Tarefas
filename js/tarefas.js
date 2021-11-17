function Tarefas() {
    var [tarefa, setTarefa] = React.useState('')
    var [tarefas, setTarefas] = React.useState([])

    function adicionarTarefa(e) {
        e.preventDefault()
        setTarefas([...tarefas, tarefa])
    }

    function pegarTarefa(e) {
        setTarefa(e.target.value)
    }

    return (
        <div>
            <h1>Tarefas</h1>
            <form onSubmit={adicionarTarefa}>
                <input onChange={pegarTarefa} value={tarefa}/>
                <button>Adicionar</button>
            </form>
            <ul>
                {tarefas.map(function (tarefa, index) {
                    return (
                        <li key={index}>{tarefa}</li>
                    )
                })}
            </ul>
        </div>
    )
}

module.exports = Tarefas;
