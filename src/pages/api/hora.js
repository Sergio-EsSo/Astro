//GET http://localhost:1234/api/hora
export async function GET(){
    const fecha = new Date().toLocaleDateString("es-ES")
    return new Response(
        JSON.stringify({laFecha: fecha, msg: "Hola"}),
        {headers: {"Content-Type":"application/json"}}
    ) 
}