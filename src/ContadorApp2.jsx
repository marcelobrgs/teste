import "./ContadorApp.css";

// função com código jsx
// função seta que retorna um botão html

// função nomeada
function ManejarClick(event){
    console.log('soy un button')
    console.log(event)
}

// variável função
const ManejarClick2 = (event)=>{
    console.log('soy un button')
    console.log(event)
}

const ManejarClick3 = (event,arg)=>{
    console.log(event)
    console.log(arg)
}

// componente de botão criado fora
const Button = ()=>{
    return(
        <>
            <h1 id="contador-app">Contador 2:</h1>
            <button onClick={ManejarClick}>clique aqui</button>
            <button onClick={ManejarClick2}>clique aqui</button>
            <button onClick={(event)=> ManejarClick3(event,'otro arg')}>clique aqui</button>
            <button onClick={function(event) {ManejarClick3(event,'mais outro arg')}}>clique aqui</button>
        </>

    )
}

//chamada do componente botão em ContadorApp2
export const ContadorApp2 = () => {
  return (
    <Button></Button>
  )
}
