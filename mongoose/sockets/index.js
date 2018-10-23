
// module.exports = (server) => {
//     var io = require('socket.io').listen(server);
//     io.sockets.on('connection',(socket)=>{
//         console.log('连接成功');
//         socket.on('start',()=>{
//             timer = setInterval(function () {
//                 socket.emit('login', {
//                     "Action": "DataRecv",
//                     "Data": {
//                     "Reporting_mode": {"T":"I","V":5},
//                 }
//                 });
//             },5000)
//         })
//     })
// }