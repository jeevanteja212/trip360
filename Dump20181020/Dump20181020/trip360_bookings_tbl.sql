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
-- Table structure for table `bookings_tbl`
--

DROP TABLE IF EXISTS `bookings_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `bookings_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `source` varchar(100) DEFAULT NULL,
  `destination` varchar(100) DEFAULT NULL,
  `ticketid` varchar(100) DEFAULT NULL,
  `enduserip` varchar(100) DEFAULT NULL,
  `bookingdate` datetime DEFAULT NULL,
  `tokenid` varchar(100) DEFAULT NULL,
  `bookingid` varchar(100) DEFAULT NULL,
  `bookingforfirstname` varchar(200) DEFAULT NULL,
  `bookingforlastname` varchar(45) DEFAULT NULL,
  `bookingformiddlename` varchar(45) DEFAULT NULL,
  `bookingfordob` varchar(45) DEFAULT NULL,
  `bookingfortype` varchar(45) DEFAULT NULL,
  `amount` decimal(10,0) DEFAULT NULL,
  `totalamount` decimal(10,0) DEFAULT NULL,
  `amountisindividual` tinyint(4) DEFAULT NULL,
  `isrefunded` tinyint(4) DEFAULT NULL,
  `arrivaltime` datetime DEFAULT NULL,
  `dipaturetime` datetime DEFAULT NULL,
  `paymentid` varchar(45) DEFAULT NULL,
  `groupid` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings_tbl`
--

LOCK TABLES `bookings_tbl` WRITE;
/*!40000 ALTER TABLE `bookings_tbl` DISABLE KEYS */;
/*!40000 ALTER TABLE `bookings_tbl` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-20 11:16:12
