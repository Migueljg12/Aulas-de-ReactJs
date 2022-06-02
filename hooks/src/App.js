import React, { useState, useEffect, useMemo, useCallback } from "react";


function App() {

  const [novaTarefa, setNovaTarefa] = useState('')

  const [tarefas, setTarefas] = useState([])

  const editNovaTarefa = (e) => {
    const value = e.target.value
    setNovaTarefa(value)
  }

  const insertNovaTarefa = useCallback(() => {
    if(!novaTarefa) return
      setTarefas((tarefas) => [...tarefas, novaTarefa])
      setNovaTarefa('')
  }, [novaTarefa])

  useEffect(() => {
    const tarefasLocalStorage = JSON.parse(localStorage.getItem('tarefas'))
    if(tarefasLocalStorage.length !== 0){
      setTarefas(tarefasLocalStorage)
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas])

  const totalTarefas = useMemo(()=> tarefas.length, [tarefas])

  return (
    <div >
      <h1>Você tem um total de {totalTarefas} tarefas</h1>
      <ul>{tarefas.map((item,index)=> <li key={index}>{item}</li>)}
      </ul>
      <input type="text" value={novaTarefa} onChange={(e) => editNovaTarefa(e)}/><br/>
      <button onClick={insertNovaTarefa}>Inserir novas tarefas</button>

    </div>
  );
}

export default App;
