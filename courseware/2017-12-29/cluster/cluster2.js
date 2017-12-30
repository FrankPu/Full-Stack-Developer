const cluster=require('cluster');
const os=require('os');

if(cluster.isMaster){
  for(let i=0;i<os.cpus().length;i++){
    cluster.fork();
  }
  console.log('主进程');
}else{
  console.log('工作进程');
}
