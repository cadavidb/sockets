
const {io} = require('../server');


io.on('connection',(client)=>{
    console.log('usuario conectado');

client.emit('mensaje',{
    usuario:'admin',
    mensaje:'welcome to this page web con socket io'
})



  client.on('disconnect',()=>{
      console.log('usuario desconectado');
  })


//recibimos el mensaje del cliente
  client.on('mensaje',(data,callback)=>{

    
    client.broadcast.emit('mensaje',data )
  })

})