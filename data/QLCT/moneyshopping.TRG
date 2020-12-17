TYPE=TRIGGERS
triggers='CREATE DEFINER=`root`@`localhost` TRIGGER `capnhattt` AFTER INSERT ON `moneyshopping` FOR EACH ROW BEGIN\n	UPDATE statistcal SET statistcal.MoneyShopping = statistcal.MoneyShopping + new.money\n    WHERE statistcal.userid = new.userid;\nEND' 'CREATE DEFINER=`root`@`localhost` TRIGGER `capnhatsaukhixoa` AFTER DELETE ON `moneyshopping` FOR EACH ROW UPDATE statistcal SET statistcal.MoneyShopping = statistcal.MoneyShopping - old.money\nWHERE statistcal.userid = old.userid'
sql_modes=1098907648 1098907648
definers='root@localhost' 'root@localhost'
client_cs_names='utf8mb4' 'utf8mb4'
connection_cl_names='utf8mb4_unicode_ci' 'utf8mb4_unicode_ci'
db_cl_names='utf8mb4_general_ci' 'utf8mb4_general_ci'
created=160563189116 160588972810
