module.exports={
  //端口
  port: 8080,

  //数据库
  mysql_host: 'localhost',
  mysql_port: 3309,
  mysql_user: 'root',
  mysql_password: '',
  mysql_dbname: 'an_ju_ke',

  //超级管理员配置
  root_username: 'blue',
  root_password: 'e10adc3949ba59abbe56e057f20f883e',

  //
  show_in_admin_house:    'ID:ID,title:标题,ave_price:均价,tel:电话',
  show_in_admin_broker:   'ID:ID,title:姓名',
  show_in_admin_link:     'ID:ID,title:标题,type:类型,link:地址',
  show_in_admin_ad:       'ID:ID,title:标题,type:类型,link:地址,expires:有效期',

  //
  insert_fields_house:    'ID,admin_ID,title,sub_title,position_main,position_second,ave_price,area_min,area_max,tel,sale_time,submit_time,building_type,main_img_path,main_img_real_path,img_paths,img_real_paths,property_types,property_img_paths,property_img_real_paths',
  insert_fields_broker:    'ID,title,img_path,img_real_path',
  insert_fields_link:      'ID,admin_ID,type,title,link,n_order,expires',
  insert_fields_ad:    'ID,admin_ID,type,title,link,img_path,img_real_path,expires,n_order,n_show,n_click',

  //
  disallow_modify_fields: 'ID,admin_ID,create_time'
};
