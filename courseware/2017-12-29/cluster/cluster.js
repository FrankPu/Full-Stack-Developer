const cluster=require('cluster');

if(cluster.isMaster){
  cluster.fork();
}

console.log('进程已经启动了');
