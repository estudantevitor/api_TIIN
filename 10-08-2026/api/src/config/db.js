import { Connection, Pool } from 'pg'

export async function connect(){
if(global.connection){
  return global.connection.connect();
}
 
const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
});

const client = await pool.connect();
console.log("criou o pool de conexão")

global.connection = pool;
return pool.connect();
console.log
}

export async function selectClientes(){
  const client = await connect();
  const res = await client.query("SELECT * FROM CLIENTE");
  return res.rows;
}

export async function selectCliente(id){
  const client = await connect();
  const res = await client.query("SELECT * FROM CLIENTE WHERE ID_CLI=$1", [id]);
  return res.rows;
}

connect();