-- MySQL dump 10.13  Distrib 8.0.19, for macos10.15 (x86_64)
--
-- Host: kil9uzd3tgem3naa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com    Database: cy4hhylovpy7hada
-- ------------------------------------------------------
-- Server version	5.7.23-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `Follows`
--

DROP TABLE IF EXISTS `Follows`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Follows` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) NOT NULL,
  `followedId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `followedId` (`followedId`),
  CONSTRAINT `Follows_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `Follows_ibfk_2` FOREIGN KEY (`followedId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Follows`
--

LOCK TABLES `Follows` WRITE;
/*!40000 ALTER TABLE `Follows` DISABLE KEYS */;
INSERT INTO `Follows` VALUES (1,'2020-02-27 23:59:17','2020-02-27 23:59:17',1,1),(2,'2020-02-28 00:01:06','2020-02-28 00:01:06',2,2),(3,'2020-02-28 00:02:25','2020-02-28 00:02:25',3,3),(4,'2020-02-28 00:04:18','2020-02-28 00:04:18',3,1),(5,'2020-02-28 00:04:49','2020-02-28 00:04:49',2,3),(6,'2020-02-28 00:04:55','2020-02-28 00:04:55',3,2),(7,'2020-02-28 00:06:39','2020-02-28 00:06:39',4,4),(8,'2020-02-28 00:06:51','2020-02-28 00:06:51',4,3),(9,'2020-02-28 00:08:38','2020-02-28 00:08:38',4,2),(10,'2020-02-28 00:08:50','2020-02-28 00:08:50',4,1),(11,'2020-02-28 00:09:35','2020-02-28 00:09:35',5,5),(12,'2020-02-28 00:12:56','2020-02-28 00:12:56',1,3),(13,'2020-02-28 00:13:40','2020-02-28 00:13:40',1,2),(14,'2020-02-28 00:43:36','2020-02-28 00:43:36',2,1),(15,'2020-02-28 01:08:51','2020-02-28 01:08:51',6,6),(16,'2020-02-28 01:10:02','2020-02-28 01:10:02',6,1),(17,'2020-02-28 01:10:11','2020-02-28 01:10:11',6,2),(18,'2020-02-28 01:12:15','2020-02-28 01:12:15',7,7),(19,'2020-02-28 01:15:38','2020-02-28 01:15:38',7,1),(20,'2020-02-28 01:15:49','2020-02-28 01:15:49',7,2),(21,'2020-02-28 01:15:58','2020-02-28 01:15:58',7,3),(22,'2020-02-28 01:16:20','2020-02-28 01:16:20',7,6),(23,'2020-02-28 01:16:51','2020-02-28 01:16:51',7,4),(24,'2020-02-28 01:23:24','2020-02-28 01:23:24',8,8),(25,'2020-02-28 01:23:38','2020-02-28 01:23:38',8,7),(26,'2020-02-28 01:23:42','2020-02-28 01:23:42',8,6),(27,'2020-02-28 01:23:52','2020-02-28 01:23:52',8,1),(28,'2020-02-28 01:24:50','2020-02-28 01:24:50',6,7),(29,'2020-02-28 01:33:02','2020-02-28 01:33:02',9,9),(30,'2020-02-28 01:33:34','2020-02-28 01:33:34',9,8),(31,'2020-02-28 01:33:49','2020-02-28 01:33:49',9,2),(32,'2020-02-28 01:34:27','2020-02-28 01:34:27',9,6),(33,'2020-02-28 01:36:38','2020-02-28 01:36:38',10,10),(34,'2020-02-28 01:37:37','2020-02-28 01:37:37',10,8),(35,'2020-02-28 01:37:41','2020-02-28 01:37:41',10,6),(36,'2020-02-28 01:37:45','2020-02-28 01:37:45',10,7),(37,'2020-02-28 01:37:50','2020-02-28 01:37:50',10,1),(38,'2020-02-28 01:37:54','2020-02-28 01:37:54',10,2),(39,'2020-02-28 01:40:52','2020-02-28 01:40:52',9,10),(40,'2020-02-28 01:49:11','2020-02-28 01:49:11',10,3),(41,'2020-02-28 01:53:13','2020-02-28 01:53:13',3,9),(42,'2020-02-28 13:20:39','2020-02-28 13:20:39',1,9),(43,'2020-02-29 00:31:14','2020-02-29 00:31:14',11,11),(44,'2020-02-29 00:31:21','2020-02-29 00:31:21',11,10),(45,'2020-02-29 05:40:05','2020-02-29 05:40:05',12,12),(46,'2020-02-29 12:43:19','2020-02-29 12:43:19',13,13),(47,'2020-02-29 12:43:53','2020-02-29 12:43:53',13,10),(48,'2020-02-29 12:45:01','2020-02-29 12:45:01',13,1),(49,'2020-02-29 14:44:39','2020-02-29 14:44:39',14,14),(50,'2020-02-29 14:49:27','2020-02-29 14:49:27',2,6),(51,'2020-02-29 14:50:19','2020-02-29 14:50:19',2,10),(52,'2020-02-29 14:50:44','2020-02-29 14:50:44',2,9),(53,'2020-02-29 15:23:17','2020-02-29 15:23:17',3,12),(54,'2020-02-29 15:24:09','2020-02-29 15:24:09',15,15),(55,'2020-02-29 15:56:59','2020-02-29 15:56:59',16,16),(56,'2020-02-29 15:57:27','2020-02-29 15:57:27',16,11),(57,'2020-03-02 17:18:05','2020-03-02 17:18:05',3,14);
/*!40000 ALTER TABLE `Follows` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Reviews`
--

DROP TABLE IF EXISTS `Reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Reviews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `IMDBid` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `posterURL` varchar(255) NOT NULL,
  `reviewText` text NOT NULL,
  `score` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `Reviews_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reviews`
--

LOCK TABLES `Reviews` WRITE;
/*!40000 ALTER TABLE `Reviews` DISABLE KEYS */;
INSERT INTO `Reviews` VALUES (1,'tt7713068','Birds of Prey: And the Fantabulous Emancipation of One Harley Quinn','https://m.media-amazon.com/images/M/MV5BMzQ3NTQxMjItODBjYi00YzUzLWE1NzQtZTBlY2Y2NjZlNzkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg','I really wanted to like this movie but it is just a typical DC movie. Plot holes everywhere. The villain wasn\'t interesting. On the plus side, the costumes were pretty OK and the soundtrack was good.',5,'2020-02-28 00:12:32','2020-02-28 00:12:32',1),(2,'tt3281548','Little Women','https://m.media-amazon.com/images/M/MV5BY2QzYTQyYzItMzAwYi00YjZlLThjNTUtNzMyMDdkYzJiNWM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg','I saw this movie at Bowtie Cinemas with my mom and got wine drunk and cried the entire time. It\'s sometimes laughably \"GIRL POWER\" but it\'s sweet and earnest and ya gorl loves a period piece. The settings are gorgeous, the music is divine, THE COSTUMES ARE INSANE. I\'d give it a 10 out of 10 but that rating is reserved only for David Lynch\'s \"Dune.\" But Gerwig did great.',9,'2020-02-28 00:12:44','2020-02-28 00:12:44',2),(3,'tt9173418','Brahms: The Boy II','https://m.media-amazon.com/images/M/MV5BMTJlOGYzYTMtMjJjYi00YTcxLTgwOGMtYmY0YzJlZjM0NWQxXkEyXkFqcGdeQXVyMTAyNDYyNzcw._V1_SX300.jpg','After a family moves into the Heelshire Mansion, their young son soon makes friends with a life-like doll called Brahms. I guess Brahms is a creepy spooky doll, maybe possessed? Or maybe he\'s supposed to seem like a creepy spooky possessed doll to distract us from the harrowing truth: it was the father\'s evildoing the whole tiiiime! I clearly have not seen this movie! But I hate it! 1/10!',1,'2020-02-28 00:45:58','2020-02-28 00:45:58',2),(4,'tt2584384','Jojo Rabbit','https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg','This was both humorous and heartbreaking while managing to have a happy ending. Taika Waititi is a master film maker.',10,'2020-02-28 00:47:44','2020-02-28 00:47:44',1),(5,'tt8613070','Portrait of a Lady on Fire','https://m.media-amazon.com/images/M/MV5BNjgwNjkwOWYtYmM3My00NzI1LTk5OGItYWY0OTMyZTY4OTg2XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg','A beautiful Valentine\'s Day treat. Historical. Elegant. Spooky. A little gay. The name Héloïse is funny to me because of all the little accents and dots on it. I think this movie is a sensual romp through old France. I don\'t think it\'s so much a cinematic and dramatic masterpiece as it is very beautiful.',7,'2020-02-28 00:49:10','2020-02-28 00:49:10',2),(6,'tt3281548','Little Women','https://m.media-amazon.com/images/M/MV5BY2QzYTQyYzItMzAwYi00YjZlLThjNTUtNzMyMDdkYzJiNWM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg','I didn\'t actually see this but I feel that I am qualified to review it based on having seen other versions as well as several versions of the trailer for this film. In this essay I will...',8,'2020-02-28 00:49:25','2020-02-28 00:49:25',1),(7,'tt3794354','Sonic the Hedgehog','https://m.media-amazon.com/images/M/MV5BNDc1ZTlmOWUtNDY2YS00OGU5LTg2MTYtYTk2MmQzMGE2NzUwXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg','I\'m not going to review this movie. I am going to review the titular character\'s design. Thank goodness gracious they went back and redid his face. I look at Sonic in this movie and I say \"Wow! Sonic!\" Whereas, with the old Sonic, we all looked at his face and said \"ha ha ha ew.\" This movie is not very good, but my 8-year-old best friend loved it a lot. Because he doesn\'t know what good movies are. He just loves Sonic.',6,'2020-02-28 00:51:14','2020-02-28 00:51:14',2),(8,'tt3794354','Sonic the Hedgehog','https://m.media-amazon.com/images/M/MV5BNDc1ZTlmOWUtNDY2YS00OGU5LTg2MTYtYTk2MmQzMGE2NzUwXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg','Why did they even bother to make this movie? The animation is terrible as is the plot, the characters, the costumes, the script, etc etc Everyone involved with this project should be ashamed of themselves.',2,'2020-02-28 00:51:40','2020-02-28 00:51:40',1),(9,'tt2584384','Jojo Rabbit','https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg','This is a very funny movie about a very sad time. The internet was ready to pull out their torches and pitchforks and get mad about it, but to their dismay the film was very sweet. It\'s easy to laugh at Nazis when they are tiny, pudgy boys. German accents are funny in themselves. I really enjoyed this movie.',8,'2020-02-28 00:53:12','2020-02-28 00:53:12',2),(10,'tt8946378','Knives Out','https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg','My mom told me this was hilarious so I had to go and see for myself. I will begin my review with a detailed discussion of the theater in which I saw the movie. There was an old woman on her cell phone two rows in front of me and a toddler constantly kicking the back of my seat. Why is there a toddler seeing a murder movie? Questions for the ages.',8,'2020-02-28 00:54:38','2020-02-28 00:54:38',1),(11,'tt1502397','Bad Boys for Life','https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg','I got one word for you: guns. I love guns. And bad boys. Will Smith and the other guy return to continue to beat this dead horse of a franchise well into their 40s. And you know what? I\'m not mad. They know what they\'re doing when it comes to these shoot-em-up buddy cop joyrides through idk Compton??? I\'m giving it a 5 because I want more guns in my life and in our culture.',5,'2020-02-28 00:56:50','2020-02-28 00:56:50',2),(12,'tt4520988','Frozen II','https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg','There were a lot of twists and turns in this movie, like when the snowman died horrifically in an accident with an oven and when they had to murder and eat the reindeer to survive being lost in the wilderness. I liked it!',7,'2020-02-28 00:57:20','2020-02-28 00:57:20',1),(13,'tt8579674','1917','https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg','War, what is it good for? Cinema, that\'s what! That\'s why I give this film an 8 out of 10! But I give war, in general, a 3 out of 10 because it\'s expensive and mean.',8,'2020-02-28 00:59:04','2020-02-28 00:59:04',2),(14,'tt2584384','Jojo Rabbit','https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg','Taika Waititi is great, and I mean, this movie was good and all, but Thor was better. I just can\'t wait for Thor Love and Thunder. Chris Hemsworth is my future husband.',7,'2020-02-28 01:09:44','2020-02-28 01:09:44',6),(15,'tt8946378','Knives Out','https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg','It\'s a mansion, it\'s a mystery, it\'s a Massachusetts. Beautiful people in a beautiful setting can make just about anything worth watching, but this movie even has a plot! Wow! Impressive! It\'s like \"Clue\" but everything is covered in red satin and dust from books and no one is wearing the same color. (So it\'s basically \"Clue\".)',6,'2020-02-28 01:11:40','2020-02-28 01:11:40',2),(16,'tt8579674','1917','https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg','I really like all the guns and the planes and bombs and stuff. It made me want to go fight in the trenches. Glorious! They truly were the greatest generation. I was confused about whether this was a documentary or a film though. Does anyone know?',8,'2020-02-28 01:13:58','2020-02-28 01:13:58',6),(17,'tt3794354','Sonic the Hedgehog','https://m.media-amazon.com/images/M/MV5BNDc1ZTlmOWUtNDY2YS00OGU5LTg2MTYtYTk2MmQzMGE2NzUwXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg','BEST MOVIE I HAVE EVER SEEN. WOW. I WAS ON THE EDGE OF MY SEAT THE WHOLE TIME, LEANING FORWARD LIKE I WAS NARUTO-RUNNING, BECAUSE THIS MOVIE IS ALL ABOUT GOING FAST!! THRILL OF A LIFETIME. I CAN\'T WAIT TO WATCH IT AGAIN. I AM AN ADULT MAN.',10,'2020-02-28 01:14:26','2020-02-28 01:14:26',7),(18,'tt3794354','Sonic the Hedgehog','https://m.media-amazon.com/images/M/MV5BNDc1ZTlmOWUtNDY2YS00OGU5LTg2MTYtYTk2MmQzMGE2NzUwXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg','I saw it a second time and I hated it. Worst movie.',1,'2020-02-28 01:14:53','2020-02-28 01:14:53',7),(19,'tt3794354','Sonic the Hedgehog','https://m.media-amazon.com/images/M/MV5BNDc1ZTlmOWUtNDY2YS00OGU5LTg2MTYtYTk2MmQzMGE2NzUwXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg','HOW DARE THEY RUIN MY CHILDHOOD IN THIS MANNER?!?!!!?1 THIS IS ABSOLUTELY DISGRACEFUL AND I CAN\'T BELIEVE AMC THEATERS MADE ME WAIT IN LINE FOR 25 MINUTES TO TALK TO A MANAGER ABOUT GETTING MY A REFUND FOR MY TICKETS',1,'2020-02-28 01:16:35','2020-02-28 01:16:35',6),(20,'tt7975244','Jumanji: The Next Level','https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg','If you go to this movie expecting to see a very good movie, what is wrong with you? If you went to see this movie to see The Rock be big and strong and Jack Black be short, swarthy and funnier than The Rock could ever hope to be, you\'ve got the right idea. I am down to watch it again at any time.',2,'2020-02-28 01:20:08','2020-02-28 01:20:08',7),(21,'tt3281548','Little Women','https://m.media-amazon.com/images/M/MV5BY2QzYTQyYzItMzAwYi00YjZlLThjNTUtNzMyMDdkYzJiNWM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg','This was the perfect film to see on Christmas surrounded by my 10 perfect angelic grandchildren. Little Billy is only 4 months old but he got his first taste of the cinema. Susan caused a fuss but hopefully the rest of the theater-goers will forgive us with some Christmas cheer. I can\'t wait for next Christmas, it\'s the only time of the year I can convince my family to come see me.',10,'2020-02-28 01:21:01','2020-02-28 01:21:01',6),(22,'tt2584384','Jojo Rabbit','https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg','I hate this movie and I give it a 1/10. Mostly because all of the movies on our chart.js chart have very high scores and we need a little more variety up there. I haven\'t even seen this movie but I remember seeing the trailer and saying \"that looks okay.\"',1,'2020-02-28 01:21:17','2020-02-28 01:21:17',7),(23,'tt8946378','Knives Out','https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg','This movie is overrated!! They had to pack the cast with every star that is very famous but also not very busy. If I wanted to watch a movie about books, I would read a book! And no, that sentence absolutely does not make sense! But neither does this movie!',1,'2020-02-28 01:22:43','2020-02-28 01:22:43',7),(24,'tt4520988','Frozen II','https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg','An instant classic and a new icon for aspiring young gays everywhere. Olaf is annoying. He is the Jar-Jar Binks of this franchise and I hate him for it. Why couldn\'t the reindeer be the comedic relief sidekick? Then again, if he was, I would probably find him annoying, too. 10/10.',10,'2020-02-28 01:25:28','2020-02-28 01:25:28',8),(25,'tt8579674','1917','https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg','I love gritty \"one last mission\" army movies, even when they follow a template and try to cash in on whatever it is that made \"Saving Private Ryan\" the best movie ever made (at the time). And it\'s based on a true story? Forget about it, I\'m hooked! When movies are based on true stories I tell myself \"this is a documentary, I am learning\" and then I feel good about myself for watching it.',5,'2020-02-28 01:29:59','2020-02-28 01:29:59',8),(26,'tt3794354','Sonic the Hedgehog','https://m.media-amazon.com/images/M/MV5BNDc1ZTlmOWUtNDY2YS00OGU5LTg2MTYtYTk2MmQzMGE2NzUwXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg','One of the worst video-game-based feature films ever made. I guess the actor who played Sonic did a pretty good job at capturing our favorite hedgehog\'s attitude. But other than that, this movie was ridiculous and often not because it was trying to be. God bless this mess.',3,'2020-02-28 01:31:14','2020-02-28 01:31:14',8),(27,'tt3281548','Little Women','https://m.media-amazon.com/images/M/MV5BY2QzYTQyYzItMzAwYi00YjZlLThjNTUtNzMyMDdkYzJiNWM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg','As a man, I love women. Especially Little Women. I don\'t mean that the way it sounds. Gerwig\'s directorial debut (right?? Wait, did she direct \"Frances Ha\"?) is very good. She really knows her stuff. And you can feel that all-girl energy on set. And \"all the girls\" includes Timothée Chalamet, who looks like an anime woman in drag sometimes, don\'t you think??',10,'2020-02-28 01:38:31','2020-02-28 01:38:31',9),(28,'tt2584384','Jojo Rabbit','https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg','Who could possibly hate that little rabbit? It was so cute. As for the movie, I don\'t know, I fell asleep. Don\'t blame the movie - blame the narcolepsy. Time for me to get a restock of my meds.',10,'2020-02-28 01:39:56','2020-02-28 01:39:56',10),(29,'tt7975244','Jumanji: The Next Level','https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg','I love comedy, I love gaming, I love animals. This truly is the movie for me! This is a great family-friendly romp through the jungle. A great way to warm up in the dead of winter. I wish Rainforest Cafes still existed. Or do they?',7,'2020-02-28 01:40:18','2020-02-28 01:40:18',9),(30,'tt3281548','Little Women','https://m.media-amazon.com/images/M/MV5BY2QzYTQyYzItMzAwYi00YjZlLThjNTUtNzMyMDdkYzJiNWM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg','This movie has a great cast and a great director, but was another remake really necessary? Despite being familiar with the story, I still enjoyed watching this film and would even see it again.',9,'2020-02-29 00:31:50','2020-02-29 00:31:50',11),(31,'tt0317219','Cars','https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_SX300.jpg','Surprise!  Lightning McQueen is a huge JERK!  And yet kids everywhere are drowning in his toys.  I mean I guess it\'s good that he learns to be a better person/car, but it\'s sure hard to root for him.  I assume Chick Hicks is there to make him seem like a good guy by comparison, but they\'re not fooling Salsa_Joe.\n\nThat said, actually a better movie than I expected.  It doesn\'t belong in the upper echelon of Pixar\'s work, but it was more than the shameless cash grab I had imagined it to be.',6,'2020-02-29 06:02:16','2020-02-29 06:02:16',12),(32,'tt0131646','Wing Commander','https://m.media-amazon.com/images/M/MV5BMTc1MDI1MDMyN15BMl5BanBnXkFtZTcwMzgzMTIyMQ@@._V1_SX300.jpg','Jeeeeeez oh man.  That was hands down the worst movie I\'ve ever seen.  And I watched the whole thing because my cat jumped up on my lap at the beginning, and the remote was out of reach.  You know how it goes - I couldn\'t just move him.  Imagine the reproachful look he would give me.  No thank you.  So instead I got to endure the dramatic stylings of Freddie Prinze Jr. and company.  Also no thank you.',1,'2020-02-29 06:23:21','2020-02-29 06:23:21',12),(33,'tt0317219','Cars','https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_SX300.jpg','This movie is great!  Lightning McQueen is the best! Kachow!',8,'2020-02-29 14:45:14','2020-02-29 14:45:14',14),(34,'tt0103639','Aladdin','https://m.media-amazon.com/images/M/MV5BY2Q2NDI1MjUtM2Q5ZS00MTFlLWJiYWEtNTZmNjQ3OGJkZDgxXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg','yay so good',9,'2020-02-29 15:26:11','2020-02-29 15:26:11',15),(35,'tt3281548','Little Women','https://m.media-amazon.com/images/M/MV5BY2QzYTQyYzItMzAwYi00YjZlLThjNTUtNzMyMDdkYzJiNWM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg','Littlest women ever!',9,'2020-02-29 15:57:52','2020-02-29 15:57:52',16),(36,'tt0084827','TRON','https://m.media-amazon.com/images/M/MV5BMzZhNjYyZDYtZmE4MC00M2RlLTlhOGItZDVkYTVlZTYxOWZlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg','The begining of SciFi',10,'2020-02-29 15:59:29','2020-02-29 15:59:29',16);
/*!40000 ALTER TABLE `Reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Session`
--

DROP TABLE IF EXISTS `Session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Session` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Session`
--

LOCK TABLES `Session` WRITE;
/*!40000 ALTER TABLE `Session` DISABLE KEYS */;
INSERT INTO `Session` VALUES ('BL13k4gK-gPx8_5KNkttYjzyqdYDYZE9','2020-03-07 20:22:28','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2020-03-06 20:22:27','2020-03-06 20:22:28'),('gqczbLx3TUdcohj9-5dSEZ36EIAQXERb','2020-03-07 21:20:16','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2020-03-06 19:07:03','2020-03-06 21:20:16'),('jptQGopfbDbao7nGOA5UKXqmGbkL1l_0','2020-03-07 19:58:18','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2020-03-06 19:24:34','2020-03-06 19:58:18'),('lG6kt9QnM1i-lrvaoei3PAXz4mP8P6_P','2020-03-07 19:24:32','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2020-03-06 19:24:32','2020-03-06 19:24:32'),('nRsyRP7J7M8Rp4Lh9tAddl8znwOPvDWg','2020-03-08 05:51:19','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2020-03-07 04:50:08','2020-03-07 05:51:19'),('p4GuNOAFWz9QXzsUiKIGTc8ZbKK9g4vS','2020-03-07 23:02:49','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{}}','2020-03-06 23:02:00','2020-03-06 23:02:49'),('sHzpBtO-6GMuCSDWyzAScqNterURGsQ-','2020-03-08 17:04:22','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{}}','2020-03-07 15:29:26','2020-03-07 17:04:22');
/*!40000 ALTER TABLE `Session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'gina','gina@mail.com','$2a$10$FH3KjR.JSM32Z6VyurWjxOfXB3cwdc5tYFrf94zP8Zxxuk5fTW99a','2020-02-27 23:59:14','2020-02-27 23:59:14'),(2,'BeardedLady','beardedlady@email.com','$2a$10$3WufT4.HO9uJ.IL.VN.n4eJxdMYIQIg/PozeT3MMYBuOpVPgq7sQm','2020-02-28 00:01:02','2020-02-28 00:01:02'),(3,'Ben','bjf216@gmail.com','$2a$10$w5cmLCmrSI3yr5C4jsjs0uj66uAfL3mhbdbX8WA3wMy3qfZFB1Qqa','2020-02-28 00:02:20','2020-02-28 00:02:20'),(4,'DankeyKang','DankeyKang@email.com','$2a$10$.C5/qUGTR9Ao4NiQE.nCNuimDsabaFUTX5D3xotRGcnvTLM3Sg4EO','2020-02-28 00:06:37','2020-02-28 00:06:37'),(5,'jelly_badger','jelly_badger@email.com','$2a$10$n5xG54PXtldselt1KdpR0OPFgSZeOy3.FNP05cdHwdOxA9AOgNBI2','2020-02-28 00:09:27','2020-02-28 00:09:27'),(6,'ChrisHemsworthNo1Fan','mail@mail.com','$2a$10$jSy3kNkMGcbHhrmtPiJiJuvUpp5fD4ECATM8QBwegNGSJQdlkVz7e','2020-02-28 01:08:51','2020-02-28 01:08:51'),(7,'JMONEY$','JMONEY$@email.com','$2a$10$Ahh7ZB5MoMYPlFw33Rk4D.UopoeH0Cz4HioQbYrO1m2xNNXZ4uZ5C','2020-02-28 01:12:15','2020-02-28 01:12:15'),(8,'DangyBringus','DangyBringus@email.com','$2a$10$2O13BB58gyvC/O9Wc3.VpeJQkVvdwaJQepmlAHQBnHDM2khda.IHm','2020-02-28 01:23:24','2020-02-28 01:23:24'),(9,'sexysaxman','sexysaxman@email.com','$2a$10$FSkfLYbDW7O/XC8oaEmr.eZIcyvIiSnYzyGE4FR8N2n4wOcnWJvYm','2020-02-28 01:33:02','2020-02-28 01:33:02'),(10,'xx_darkstar_xx','a@mail.com','$2a$10$QvAGQ4GPOaonH11Nt7zZA.6VUeMx5avhQOLW9sEEiW7O5XQDXweUe','2020-02-28 01:36:37','2020-02-28 01:36:37'),(11,'MovieLover','user@mail.com','$2a$10$IsKHpans8dAlYkgo777WOe2wXEa9mTpULyAYyTzjdTJBw5U2oHMbS','2020-02-29 00:31:14','2020-02-29 00:31:14'),(12,'Salsa_Joe','tacoguy@comcast.net','$2a$10$3jX.qW6i5tzBA5cKXi5FJug1lxuraVSkCYRqtYA9M2HVbDYszQPMS','2020-02-29 05:40:05','2020-02-29 05:40:05'),(13,'Bob','whatever@nowhere.com','$2a$10$LQ1Y5sIHOK77nFS6ZYrqGeWqRiTe.GaWNCvbvKeQVllBlRzgqrB9O','2020-02-29 12:43:19','2020-02-29 12:43:19'),(14,'tiny_timmy','timmy@gmail.com','$2a$10$ACYlGzbeM5mRyTjMYp9fi.qN6RizP9aQWNFDwkB1kgaN0kPAICo6u','2020-02-29 14:44:38','2020-02-29 14:44:38'),(15,'asdfjkl','asdfjkl@gmail.com','$2a$10$cFvbQKqf1pbzi72mJu4U1ODVWNn9ibaupn7LZDWg95EeOCGwuJSGW','2020-02-29 15:24:05','2020-02-29 15:24:05'),(16,'scooter','scooter@scooter.com','$2a$10$MhuqoG641wOzFMWsMK3BiujPnJddagN2PGkDzUn4zC7gWlfFFm5GG','2020-02-29 15:56:54','2020-02-29 15:56:54');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-07 12:47:28
