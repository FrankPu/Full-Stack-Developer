let arr=[
  '----\r\nna',
  'me="user"\r\n\r',
  '\nblue\r\n---',
  '-\r\nname="pass"\r\n12',
  '3456\r\n----\r\nname="age"\r\n18\r\n'
];

while(还有数据){
  let data='xxx';

  //1.期待<分隔符>\r\n
  if(data.length<"期待<分隔符>\r\n".length){
    let ex="期待<分隔符>\r\n".length-data.length;

    while(ex){
    }
  }

  //2.期待name="xxx"\r\n

  //3.期待<val>

  //4.期待\r\n
}
