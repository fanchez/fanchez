import {useEffect, useState} from "react"
import srvClientes from "../service/SrvClientes";

const ListaClientes = () =>
{
    const [clientes,setClientes] = useState([]);
    const [loading, setLoading]= useState(false)
    const buscarClientes = () => {
        setLoading(true);
        srvClientes().getClientes()
        .then(c => {
            setClientes(c.data);
            setLoading(false);
            console.log(c.data);
        }).catch(err=> { setLoading(false); alert(err);});
    };

    useEffect(() => {
        buscarClientes();
    }, []);

    return (
        clientes.length > 0 && !loading?
        <table style={{padding: "5px",margin: "20px auto", width: "80%", border: "1px solid black"}}>
            <caption style={{backgroundColor: "darkgray", border: "1px solid black"}}>Listado de empleados</caption>
            <thead style={{backgroundColor: "black", color:"white", fontSize:"bold"}}>
                <tr>
                    <td>ID</td>
                    <td>Nombre</td>
                    <td>Telefono</td>
                    <td>Tipo Cliente</td>
                </tr>
            </thead>
            <tbody>
            {clientes.map(c=> 
                <tr key={c.id}>
                    <td>{c.nombre}</td>
                    <td>{c.telefono}</td>
                    <td>{c.tiponombre}</td>
                </tr>
            )}
            </tbody>
        </table>
        :loading?<h1>loading...</h1>:<h1>No hay registros</h1>
    )
}

export default ListaClientes