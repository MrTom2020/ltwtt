TYPE=TRIGGERS
triggers='CREATE DEFINER=`root`@`localhost` TRIGGER `capnhatthungracdangnhap` AFTER DELETE ON `dangnhap` FOR EACH ROW INSERT INTO thungrac(id,hoten,Usename,password,ngaysinh,SDT,DIACHI,GIOITINH,XACNHANMATKHAU,LOAI)\nVALUES(old.id,old.hoten,old.Usename,old.password,old.dataofbrith,old.SDT,old.DIACHI,old.GIOITINH,old.XACNHANMATKHAU,old.loai)'
sql_modes=1098907648
definers='root@localhost'
client_cs_names='utf8mb4'
connection_cl_names='utf8mb4_unicode_ci'
db_cl_names='utf8mb4_general_ci'
created=160588645949
