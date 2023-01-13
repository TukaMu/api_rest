import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/");

const connection = mongoose.connection;

function connect() {
    connection.on("error", console.log.bind(console, 'Error de conexão'));
    connection.once("open", () => {
        console.log('DB: on')
    });
}

export default { connection, connect };