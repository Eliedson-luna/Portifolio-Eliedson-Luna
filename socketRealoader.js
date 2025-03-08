const socket = io();
socket.on("reload", () => {
    console.log("Recebida solicitação de recarga");
    location.reload();
});