TYPE=TRIGGERS
triggers='CREATE DEFINER=`root`@`localhost` TRIGGER `capnhatvi` BEFORE INSERT ON `incomemoney` FOR EACH ROW BEGIN\n	UPDATE cashbalance SET cashbalance.money = cashbalance.money + new.money \n    WHERE cashbalance.userid = new.userid;\nEND' 'CREATE DEFINER=`root`@`localhost` TRIGGER `capnhatsaukhixoavi` AFTER DELETE ON `incomemoney` FOR EACH ROW BEGIN\n	UPDATE cashbalance SET cashbalance.money = cashbalance.money - old.money\n    WHERE cashbalance.userid = old.userid;\nEND'
sql_modes=1098907648 1098907648
definers='root@localhost' 'root@localhost'
client_cs_names='utf8mb4' 'utf8mb4'
connection_cl_names='utf8mb4_unicode_ci' 'utf8mb4_unicode_ci'
db_cl_names='utf8mb4_general_ci' 'utf8mb4_general_ci'
created=160752735515 160752853967
