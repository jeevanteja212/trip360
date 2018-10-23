CREATE DATABASE  IF NOT EXISTS `trip360` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `trip360`;
-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: trip360
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `passengers_tbl`
--

DROP TABLE IF EXISTS `passengers_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `passengers_tbl` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `tPNR` int(11) DEFAULT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `middlename` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `ticketNumber` varchar(45) DEFAULT NULL,
  `FF` varchar(45) DEFAULT NULL,
  `mealCode` varchar(45) DEFAULT NULL,
  `basic` decimal(10,2) DEFAULT NULL,
  `JN` decimal(10,2) DEFAULT NULL,
  `meals` varchar(45) DEFAULT NULL,
  `baggage` varchar(45) DEFAULT NULL,
  `seat` varchar(45) DEFAULT NULL,
  `taxes` decimal(10,2) DEFAULT NULL,
  `bgs` varchar(45) DEFAULT NULL,
  `gross` decimal(10,2) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `fuel` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passengers_tbl`
--

LOCK TABLES `passengers_tbl` WRITE;
/*!40000 ALTER TABLE `passengers_tbl` DISABLE KEYS */;
INSERT INTO `passengers_tbl` VALUES (1,10000,'www ww','','ww','Mr','Audult','1672755','0','',1649.00,0.00,'0 Platter','','',319.00,'10 Kg',1970.00,1,0.00),(2,10000,'www ww','','ww','Mr','Audult','1672755','0','',1649.00,0.00,'0 Platter','','',319.00,'10 Kg',1970.00,1,0.00),(3,10001,'sss ss','','ss','Mr','Audult','1672935','0','',1649.00,0.00,'0 Platter','','',477.00,'10 Kg',2128.00,1,0.00),(4,10001,'sss ss','','ss','Mr','Audult','1672935','0','',1649.00,0.00,'0 Platter','','',477.00,'10 Kg',2128.00,1,0.00),(5,10001,'sss ss','','ss','Mr','Audult','1672935','0','',1649.00,0.00,'0 Platter','','',477.00,'10 Kg',2128.00,1,0.00),(6,10002,'rrr rr','','rr','Mr','Audult','1672939','0','',1449.00,0.00,'0 Platter','','',519.00,'0 Kg',1970.00,1,0.00);
/*!40000 ALTER TABLE `passengers_tbl` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-20 11:16:18
