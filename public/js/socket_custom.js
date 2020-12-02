var socket=io();
socket.on('connect',()=>{
    console.log('conectado al servidor');
})

socket.on('disconnect',()=>{
  console.log('usuario desconectado');
})


//emitimos un mensaje 
socket.emit('mensaje',{
  nombre:'brayan cadavid',
  profesion:'ingeniero informatico'

},function (resp){
  console.log(resp);
})


socket.on('mensaje',(mensaje)=>{
  console.log(mensaje);

})
