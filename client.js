
const net = require('net');
var arr = new Array("您好，欢迎使用自定义应用层","请在这里输入您想发送给服务器的话语","服务器会接收到每一句话","实现了协议规范、协议解析","运行请使用node client.js","模拟tcp协议，序列号为随机数");
require('./server');
const { FSM, packet } = require('./protocol');
async function test() {
  const socket = net.connect({port: 10000});
  socket.on('error', function() {
    console.log(...arguments);
  });
  let i = 0;
  const timer = setInterval(() => {
    console.log("client:","sending message: ",String(arr[i]),...arguments);
    socket.write(packet(String(arr[i])));
    i++>= arr.length-1 && (socket.end(), clearInterval(timer));
  },1000)
}

test()