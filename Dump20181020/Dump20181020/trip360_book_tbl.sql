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
-- Table structure for table `book_tbl`
--

DROP TABLE IF EXISTS `book_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `book_tbl` (
  `tPNR` int(11) DEFAULT NULL,
  `issuedOn` varchar(45) DEFAULT NULL,
  `issuedBy` varchar(45) DEFAULT NULL,
  `airlinePNR` varchar(45) DEFAULT NULL,
  `customerPhoneNumber` varchar(45) DEFAULT NULL,
  `ticketStatus` varchar(45) DEFAULT NULL,
  `basicFare` decimal(10,2) DEFAULT NULL,
  `fuelSurchare` decimal(10,2) DEFAULT NULL,
  `jnTax` decimal(10,2) DEFAULT NULL,
  `meals` varchar(45) DEFAULT NULL,
  `baggage` varchar(45) DEFAULT NULL,
  `otherCharges` decimal(10,2) DEFAULT NULL,
  `grossFare` decimal(10,2) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `MOP` varchar(45) DEFAULT NULL,
  `issueInExchangeFor` varchar(45) DEFAULT NULL,
  `tourCode` varchar(45) DEFAULT NULL,
  `gatewayChanges` varchar(45) DEFAULT NULL,
  `emailId` varchar(45) DEFAULT NULL,
  `EndUserIp` varchar(45) DEFAULT NULL,
  `TokenId` varchar(45) DEFAULT NULL,
  `TraceId` varchar(45) DEFAULT NULL,
  `BookingId` varchar(45) DEFAULT NULL,
  `paymentId` varchar(45) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `phoneNumber` varchar(45) DEFAULT NULL,
  `uniqueID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_tbl`
--

LOCK TABLES `book_tbl` WRITE;
/*!40000 ALTER TABLE `book_tbl` DISABLE KEYS */;
INSERT INTO `book_tbl` VALUES (10000,'2018-91-18 10:47:31','SpiceJet-SG','ECHNPK','undefined','Confirmed',1649.00,0.00,319.00,'0','0',2.00,1970.00,1,'','','','','gowtham.utk@gmail.com','160.238.74.183','8292b78b-9bd2-41dd-9581-2d31cbd28d96','d62391bb-456d-44e0-882b-beb9d794e71e','1403719','1234',1,'9494504379',NULL),(10001,'2018-91-19 11:27:38','SpiceJet-SG','L9PE8D','undefined','Confirmed',1649.00,0.00,477.00,'0','0',2.00,2128.00,2,'','','','','gowtham.utk@gmail.com','160.238.74.83','b867ae4c-6b9c-4e6c-8e89-20b39bafc8a9','0505583b-fbab-4614-9583-ef100dd89517','1403925','pay_BBO0hVjTvo0KLK',1,'9494504379','2018_9_19_11_27_38_372'),(10002,'2018-91-19 11:54:16','SpiceJet-SG','TB8R5A','undefined','Cancelled',1449.00,0.00,519.00,'0','0',2.00,1970.00,3,'','','','','gowtham.utk@gmail.com','160.238.74.83','bb3bc62a-a643-44e1-bd42-59ae11d5ebb9','97f68756-0a74-43f7-bd86-8305a8a9c6d0','1403934','pay_BBOSQBFNKOG1wK',1,'9494504379','2018_9_19_11_54_16_349');
/*!40000 ALTER TABLE `book_tbl` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-20 11:16:10
