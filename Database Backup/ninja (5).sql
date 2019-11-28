-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 26, 2019 at 08:33 PM
-- Server version: 10.0.38-MariaDB-cll-lve
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lzxksnxr_NINJAA`
--

-- --------------------------------------------------------

--
-- Table structure for table `aas`
--

CREATE TABLE `aas` (
  `id` int(11) NOT NULL,
  `Facility` text CHARACTER SET utf8 NOT NULL,
  `Magic` text NOT NULL,
  `session` text NOT NULL,
  `Examples` longtext,
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `aas`
--

INSERT INTO `aas` (`id`, `Facility`, `Magic`, `session`, `Examples`, `Timestamp`) VALUES
(3, 'FS1', '2ad56b536d33640acdc113adca2171fa2c3697aa32ddbab0cfff9e26b960fdc01ba32447850f34274ff424ccadfd3be42770b12918e03307403c06875d65f7c95d102d18458a24f0', '25c429bc3acd53079fdbdbba8c867d27', NULL, '2019-11-15 19:39:38'),
(4, 'Master', '3554fc432347efcabdf59774efe38cce731402c7d7965d5864ec3766432c96835477a70ccac40a80af0b783722e8d9f30a996fed47adaebed80e8b278830f5a48f4d9e28e65fee10', 'fb2aaccc1a8c050acbecfe2de280f5a1', NULL, '2019-11-24 15:00:28');

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `id` int(11) NOT NULL,
  `aa` text NOT NULL,
  `link` text NOT NULL,
  `description` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `favorites`
--

INSERT INTO `favorites` (`id`, `aa`, `link`, `description`, `timestamp`, `score`) VALUES
(1015, 'Master', 'https://ecowalaska.bpweb.bp.com/permitvision/editor/#/certificate/BP05-K-GPB-CPS%23368199', 'This is a Breaking Containment permit. It is for permanent isolation of a bad line. The permit does a good job of explaining the task to be done and steps needed to accomplish it. Though this is a simple job it is obvious that this permit was thought out Not Churned Out.', '2019-10-19 15:12:33', 1),
(1016, 'Master', 'https://ecowalaska.bpweb.bp.com/permitvision/editor/#/certificate/BP05-K-GPB-FS1%23317108', 'Although this is a simple job only requiring basic trouble shooting inside a restricted access space. It is obvious that a proper Job walk occurred prior to the TRA. The TRA has good details and covers the full scope of the task with no real \"fat\".', '2019-11-15 18:10:42', 1);

-- --------------------------------------------------------

--
-- Table structure for table `forms`
--

CREATE TABLE `forms` (
  `id` int(11) NOT NULL,
  `name` text CHARACTER SET latin1 NOT NULL,
  `description` longtext CHARACTER SET latin1 NOT NULL,
  `pid` text CHARACTER SET latin1 NOT NULL,
  `pictaken` tinyint(1) NOT NULL,
  `done` tinyint(1) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `manual` tinyint(1) NOT NULL,
  `bg` text NOT NULL,
  `phone` text NOT NULL,
  `email` text NOT NULL,
  `artist` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `forms`
--

INSERT INTO `forms` (`id`, `name`, `description`, `pid`, `pictaken`, `done`, `timestamp`, `manual`, `bg`, `phone`, `email`, `artist`) VALUES
(50, 'Fgghghj', 'Ggjgjhgjh', '5638', 1, 1, '2018-09-15 02:37:03', 0, 'A19', '9079829966', 'freddyyeddy@gmail.com', 'Sam'),
(49, 'Emily Bordelon', 'Bordelon ligjibhgfhgc', '2345', 1, 1, '2018-08-16 16:56:10', 1, 'A12', '9074149034', 'emily.s.thorpe@gmail.com', 'Sam'),
(48, 'asdsad', 'asdsadsad', '1234', 1, 1, '2018-08-09 09:25:47', 1, 'A12', '9079829966', 'freddyyeddy@gmail.com', 'Sam'),
(51, 'This is a test of speed', 'Asfjfdjjfjf\r\nFhfjfggdgjdg\r\n\r\nFjfjfff', '1423', 1, 1, '2018-09-15 19:08:01', 0, 'R15', '9074148084', 'smith.c.tucker@gmail.com', 'Sam'),
(52, 'SAMUEL A BORDELON', '1234', '5362', 1, 1, '2018-09-15 19:09:51', 0, 'A34', '9079829966', 'freddyyeddy@gmail.com', 'Sam'),
(53, 'Shfhfz', 'Fgjkhvjhccdkk', '5842', 1, 1, '2018-09-15 19:10:11', 0, 'R12', '9074149034', 'emily.s.thorpe@gmail.com', 'Sam'),
(54, 'Emily Bordelon', 'asdsadsad', '1234', 1, 1, '2018-09-15 20:14:04', 0, 'A01', '9074149034', 'emily.s.thorpe@gmail.com', 'Sam'),
(55, 'asdsad', 'asddfsad', '2345', 1, 1, '2018-09-15 20:14:16', 0, 'A01', '9074149034', 'emily.s.thorpe@gmail.com', 'Sam'),
(56, 'Jochdnsjd', 'Dhdjfdhjbarev\r\nGoih', '1538', 1, 1, '2018-09-15 21:19:22', 0, 'A33', '9079829966', 'freddyyeddy@gmail.com', 'Sam'),
(57, 'Tagg Davies', 'A tall skinny native guy', '9587', 1, 1, '2018-09-21 22:33:29', 0, 'A01', '9074148084', 'smith.c.tucker@gmail.com', 'Sam'),
(58, 'Jacob pennell', 'Short dude with yellow shirt and black bandolier', '5555', 1, 1, '2018-09-22 01:17:18', 0, 'A19', '9073152487', 'jacob_pennell@yahoo.com', 'Sam'),
(59, 'Roxanne', 'Purple and pink fairy costume with jeans on, tattoos on arms', '6666', 1, 1, '2018-09-22 18:13:24', 0, 'A25', '9078411183', 'emily.s.thorpe@gmail.com', 'Sam'),
(60, 'Matt jones', 'Road hog with anchor tattoo. Matt wearing grey shirt with biker vest.', '1826', 1, 1, '2018-09-22 19:01:20', 0, 'R04', '9073172260', 'snowman2385@gmail.com', 'Sam'),
(61, 'Katrina eldred', '6 year old girl in pink dress and pink wand. Cardcaptor sakura', '1827', 1, 1, '2018-09-22 19:15:17', 0, 'A07', '9373467030', 'blakie50@hotmail.com', 'Sam'),
(62, 'Anessia', 'Xayah and Rkhan bird people. Purple and gol man with rose', '1828', 1, 1, '2018-09-22 19:49:24', 0, 'R31', '9079534459', 'aahubler@alaska.edu', 'Sam'),
(63, 'Tracking kohler', 'Surprise gray husky with black ears blue eyes red and black walking dead shirt', '1829', 1, 1, '2018-09-22 20:08:29', 1, 'A33', '9077200517', 'articwolfgirlhowls@gmail.com', 'Sam'),
(64, 'Darryl skadsem', 'Luigiâ€™s mansion  with luigi', '1830', 1, 1, '2018-09-22 20:23:52', 1, 'A10', '9072407466', 'darryl.skadsem@gmail.com', 'Sam'),
(65, 'Flossie Foster ', 'Blue &white costumes black wigâ€™ blonde wigâ€™ green black wig &red & white wig second photo is 1833', '1832', 1, 1, '2018-09-22 20:34:45', 1, 'A35', '9073945142', 'aimeeleigh7@hotmail.com', 'Sam'),
(66, 'Charles Ducut', 'Polis ranger', '1835', 1, 1, '2018-09-22 20:38:35', 0, 'R04', '(907)351-3497', 'CharlesDucut@gmail.com', 'Sam'),
(67, 'Eric jonsen ', 'Unicorn ', '0016', 1, 1, '2018-09-22 20:55:35', 1, 'R31', '9079477473', 'aayrick2@yahoo.com', 'Sam'),
(68, 'Ricky marshall', 'Ninja 2 sai glow coming from symbol on chest', '1838', 1, 1, '2018-09-22 21:14:31', 1, 'A21', '8502939609', 'rickylmarshall23aa@gmail.com', 'Sam'),
(69, 'Kris Salter', 'Grey hair, black jacket and sword Yu Narukami from persona 4 izanagi in the background with him', '1839', 1, 1, '2018-09-22 21:19:34', 1, 'A07', '9072232038', 'akgaimer@hotmail.com', 'Sam'),
(70, 'Carolyn', 'Custom ruins background, Undertale, purple and white dress white hair horns FIRE coming from hands', '1843', 1, 1, '2018-09-22 21:36:31', 1, 'A01', '9074446079', 'carolyntix@gmail.com', 'Sam'),
(71, 'Elissia Dobbs', 'Mario. And Luigi with boo balloons long hair Luigiâ€™s mansion backround', '1844', 1, 1, '2018-09-22 21:48:05', 1, 'A01', '9079530704', 'elissia_dobbs@hotmail.com', 'Sam'),
(72, 'Mike kennard', 'Doc Emmett L Brown ', '1845', 1, 1, '2018-09-22 21:50:45', 0, 'R34', '9073827869', 'macch4mk@aol.com', 'Sam'),
(73, 'Mae ditty', 'Homura. From rebellion ova maid outfit', '1848', 1, 1, '2018-09-22 21:54:02', 0, 'A36', '9079474500', 'mliditty@gmail.com', 'Sam'),
(74, 'Monica Rose', 'Boy in black hoodie, two girls small in purple and big in82 sweater', '1849', 1, 1, '2018-09-22 22:07:54', 0, 'R39', '9073102603', 'barelythere86@gmail.com', 'Sam'),
(75, 'Rictar', 'Giant rat  black and grey with blue markings on the ears', '1852', 1, 1, '2018-09-22 22:30:02', 0, 'R06', '9072021339', 'taidas@gmail.com', 'Sam'),
(76, 'Julia houck', 'Chibin,moon: pink wig, pink sailor moon costume', '1851', 1, 1, '2018-09-22 22:52:34', 0, 'R30', '7077619727', 'jeweleeyuhh@gmail.com', 'Sam'),
(77, 'Sabrina kelly', 'Military admiral black and red uniform with blue and black hair', '1853', 1, 1, '2018-09-22 23:08:49', 0, 'R36', '9072528307', 'shadowridershadow@gmail.com', 'Sam'),
(78, 'Heather Stanton ', 'Three girls. Two brunette one blonde. Normal clothes', '1855', 1, 1, '2018-09-22 23:29:16', 0, 'A26', '9077482938', 'heat730@gmail.com', 'Sam'),
(79, 'Christina Watson ', 'Lady w/anchorage heart run  shirt and little boy', '1860', 1, 1, '2018-09-22 23:44:27', 0, 'A14', '9072300342', 'christinaw42@yahoo.com', 'Sam'),
(80, 'Charlotte Severin ', 'Taller girl- long purple wig, and cream turtle neck\r\nThe shorter girl with a pink tutu and pink hair', '1861', 1, 1, '2018-09-23 00:15:38', 0, 'A07', '9079523897', 'charlottesofsev@gmail.com', 'Sam'),
(81, 'Destiny Hughes', 'Girl with red and turquoise hair with cat ears black t-shirt. Yellow haired girl with brown crop top jacket. Guy with the blue jacket and the scary mask', '1862', 1, 1, '2018-09-23 00:37:48', 0, 'A17', '9076876563', 'cleep14@gmail.com', 'Sam'),
(82, 'Kathy Balaban', 'Three kids, fortnite, spray paint girl, red dress girl, orange jacket', '1864', 1, 1, '2018-09-23 01:39:42', 0, 'A30', '9072304189', 'luckykmb@yahoo.com', 'Sam'),
(83, 'Kathy Balaban', 'Female sonic the hedgehog ', '1866', 1, 1, '2018-09-23 01:44:02', 0, 'A06', '9072304189', 'luckykmb@yahoo.com', 'Sam'),
(84, 'Ashton Stockton', 'Tons of people with furry in foreground.', '1867', 1, 1, '2018-09-23 01:57:52', 0, 'A26', '9073509725', 'darkyash@icloud.com', 'Sam'),
(85, 'David Sterling', 'School uniform grey jacket green hair red tie', '1865', 1, 1, '2018-09-23 02:00:52', 0, 'A26', '2075760970', 'davidsterling659@yahoo.com', 'Sam'),
(86, 'Joshua sampson ', 'Green PokÃ©mon dinosaur in onesie', '1866', 1, 1, '2018-09-23 02:22:34', 0, 'A05', '9075384452', 'amerflw01@hotmail.com', 'Sam'),
(87, 'Angie', 'Mario long hair female. Peach . Luigi', '1868', 1, 1, '2018-09-23 02:24:29', 0, 'R19', '9073102871', 'carinomio13@hotmail.com', 'Sam'),
(88, 'Jen Jen Roelfs', 'Green and black bodysuit green cloak brown hair ', '1869', 1, 1, '2018-09-23 02:36:46', 0, 'A02', '9073543656', 'jenjenroelfs_92@yahoo.com', 'Sam'),
(89, 'Diane Reynolds', '1 woman pokeball dress, 1 girl pikachu pokemon, 1 boy pokemon hau', '1871', 1, 1, '2018-09-23 02:43:54', 0, 'A10', '9079524926', 'direyn05@yahoo.com', 'Sam'),
(90, 'Paul', 'Powerful warrior with big sword and armor with glowing sword', '1877', 1, 1, '2018-09-23 02:53:38', 1, 'A10', '9074441514', 'paulparsonsak96@gmail.com', 'Sam'),
(91, 'Ryan Wilcox', 'Little girl Link. Heart charm on neck. Leather strap on chest special effect fairy navi', '1879', 1, 1, '2018-09-23 03:07:47', 1, 'A10', '9079789750', 'silverrainshadow@hotmail.com', 'Sam'),
(92, 'Pamella Wilcox', 'Jubilee!!! Fireworks/sparkles coming from hands.', '1886', 1, 1, '2018-09-23 03:09:24', 1, 'R12', '9079789750', 'silverrainshadow@hotmail.com', 'Sam'),
(93, 'Alexei Weston', 'MerRose and Pirate Pearl', '1882', 1, 1, '2018-09-23 03:29:32', 0, 'A25', '9076170636', 'simplyalexei@hotmail.com', 'Sam'),
(94, 'Holy crap', 'Jedi, donâ€™t be an idiot', '0014', 1, 0, '2018-09-23 16:59:34', 0, 'R25', '9094148084', 'shittalker@ymum.com', ''),
(95, 'Amy Force-Garrett', 'Patriotic Peaches background chose later', '0015', 1, 1, '2018-09-23 17:08:37', 0, 'A01', '9079823385', 'amyforcegarrett@gmail.com', 'Sam'),
(96, 'Trisha Widmayer', 'Blonde sailor senshi with red mask. Glowy fingertips', '0019', 1, 1, '2018-09-23 20:12:02', 1, 'R30', '919 271 5126', 'tewidmayer@gmail.com', 'Sam'),
(97, 'Michael Bonnell', 'Division 2 facing away gun guy, orange glow coming from watch and upper right shoulder', '0020', 1, 1, '2018-09-23 20:15:43', 1, 'R39', '9073227324', 'mikenavy19@yahoo.com', 'Sam'),
(98, 'Mike kennard', 'Doc brown  custom background  infront of clock  tower black and white photo', '0024', 1, 1, '2018-09-23 20:34:22', 0, 'A01', '9073827869', 'mach4mk@aol.com', 'Sam'),
(99, 'Jenni', 'Little Moana custom background coast by ocean', '0027', 1, 1, '2018-09-23 20:38:51', 1, 'A02', '9078916293', 'vampirechica3@gmail.com', 'Sam'),
(100, 'Cae Galloway', 'Short woman, blood on face, red riding hood, grimms', '0030', 1, 1, '2018-09-23 20:50:54', 0, 'R17', '899088998899', 'caitlingallowayak@gmail.com', 'Sam'),
(101, 'Jack Gelione', 'Custom background classroom dark spandex grey scarf yellow goggles ', '0032', 1, 1, '2018-09-23 21:54:43', 0, 'A01', '9073175599', 'gelione.jack@gmail.com', 'Sam'),
(102, 'Patrick Barlow', 'Black shirt with rose pocket blue jeans', '0033', 1, 1, '2018-09-23 22:11:51', 0, 'A15', '9073503949', 'patrickbarlow907@gmail.com', 'Sam'),
(103, 'Kirsten Garoutte', 'Woman with long brown hair and black jacket w white shirt. Girl with tan cardigan and school girl uniform with pink hair and red ribbons. ', '0037', 1, 1, '2018-09-23 22:19:28', 0, 'A20', '9072687249', 'kirsten.garoutte@gmail.com', 'Sam'),
(104, 'Erica flores', 'Couple with matching outfits', '0039', 1, 1, '2018-09-23 22:52:54', 0, 'A07', '9077825420', 'erica.allizon@gmail.com', 'Sam'),
(105, 'Clynce Carrillo', 'Red shirt w/ zebra vest and boy w/red jacket ', '0040', 1, 1, '2018-09-23 22:56:32', 0, 'A07', '9076020509', 'clynce@gmail.com', 'Sam'),
(106, 'Pedro Escalante ', 'Man green jumpsuit w/red symbol and boy black w/ reaper mask glowing gun barrel ', '0042', 1, 1, '2018-09-23 23:12:43', 0, 'R09', '907-331-8130', 'pedro-escalnte198622@hotmail.com', 'Sam'),
(107, 'Bennett', 'Glasses, black jacket backpack and blue jeans Deadpool pointing gun at head', '0045', 1, 1, '2018-09-23 23:32:10', 0, 'A33', '9078855821', 'bennettlgetti@gmail.com', 'Sam'),
(108, 'Justin', '4 children 3 princesses and mario', '0048', 1, 1, '2018-09-23 23:44:17', 0, 'R24', '9076021058', 'jre1272@yahoo.com', 'Sam'),
(109, 'Kyra', 'Orange and black jumpsuit and blue stitch outfit ', '0049', 1, 1, '2018-09-24 00:04:11', 0, 'A10', '9073659881', 'kyrarodriguez530@outlook.com', 'Sam'),
(110, 'Rob Culbertson ', 'From the LEGO booth ', '0053', 1, 1, '2018-09-24 00:42:07', 0, 'R24', '9072232313', 'rob.culbertson@gmail.com', 'Sam'),
(111, 'Rin Metis', 'Friend of Freddyyeddy . Custom Galafrien wings', '0054', 1, 1, '2018-09-24 01:33:16', 1, 'A01', '9078413611', 'myluckyeverything@yahoo.com', 'Sam'),
(112, 'James Richmond', 'Cruella and Jasper with Dalmatian. Custom backdrop', '0056', 1, 1, '2018-09-24 01:38:07', 0, 'A01', '9079525729', 'richmondn3@gmail.com', 'Sam'),
(113, 'Samuel Hanson', 'White face tan and black robe', '0058', 1, 1, '2018-09-24 02:00:52', 0, 'A16', '9077078275', 'wacolqw@gmail.com', 'Sam'),
(114, 'Nicole ', 'Dog orange costumes lady purple outfit ', '0061', 1, 1, '2018-09-24 02:05:45', 0, 'R31', '9282477946', 'nicoles.corgis@gmail.com', 'Sam'),
(115, 'Nicole ', 'Griffindoor student poodle and green coat fan shirt lady', '0064', 1, 1, '2018-09-24 02:07:45', 0, 'R13', '9282477946', 'nicoles.corgis@gmail.com', 'Sam'),
(116, 'KC Elliott', 'Beleagured chaperone. Attack on titan with sword', '0059', 1, 1, '2018-09-24 02:09:23', 1, 'A35', '9072688884', 'writingtoclarity@gmail.com', 'Sam'),
(117, 'KC Elliott', 'Pink dress with star at navel level ', '0068', 1, 1, '2018-09-24 02:14:35', 0, 'A23', '9072688884', 'writingtoclarity@gmail.com', 'Sam'),
(118, 'Peyton Olson ', 'Tan school uniform with blue and ran pocket badge black pants', '0077', 1, 1, '2018-09-24 02:21:03', 0, 'A37', '9073554006', 'pgolson99@gmail.com', 'Sam'),
(119, 'Dena Neal', 'Two girls from the art booth across from you', '0078', 1, 1, '2018-09-24 02:48:16', 0, 'A03', '2069028839', 'utasartwork@gmail.com', 'Sam'),
(120, 'Luna Rue', 'Wa Lolita blue hair girl. Artists choice on bg', '0080', 1, 1, '2018-09-24 03:44:40', 0, 'A01', '7193298683', 'luna.adelaide.rue@gmail.com', 'Sam'),
(121, 'test', 'Black Hair  duded', '0000', 1, 1, '2018-09-24 07:39:31', 1, 'R15', '9079829966', 'freddyyeddy@gmail.com', 'Sam');

-- --------------------------------------------------------

--
-- Table structure for table `hazmit`
--

CREATE TABLE `hazmit` (
  `id` int(11) NOT NULL,
  `hazard` varchar(500) DEFAULT NULL COMMENT 'A Hazard',
  `mitigation` varchar(395) DEFAULT NULL COMMENT 'The Mitigation for The Hazard',
  `source` varchar(40) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'The energy source based on BP',
  `tags` varchar(100) DEFAULT NULL COMMENT 'Things this hazard is tagged as',
  `crafts` varchar(200) DEFAULT NULL COMMENT 'Crafts That This Hazard Are Applicable To',
  `review` int(11) NOT NULL COMMENT 'Number of times its been peer reviewed',
  `bad` smallint(1) NOT NULL COMMENT 'Higher is better. New Ones Start at 1',
  `facilitys` text NOT NULL,
  `reviewtxt` longtext
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='The Hazard and Mitigations ';

--
-- Dumping data for table `hazmit`
--

INSERT INTO `hazmit` (`id`, `hazard`, `mitigation`, `source`, `tags`, `crafts`, `review`, `bad`, `facilitys`, `reviewtxt`) VALUES
(2, 'Laceration, abrasion or avulsion from unintentional forceful contact with sharp metal edges associated with certain insulation materials.', 'PA shall insure that all workers stay alert to the presents of sharp edged materials and avoid forceful contact with those edges. Workers shall utilize cut resistant gloves while handling metal objects.', 'Body Mechanics &#xe80d;', 'cut', 'insulation,sheetmetal', 2, 2, '', 'Master Said: '),
(3, 'Limited or awkward access / egress into the confined space have the potential to cause soft tissue injury and restrict emergency response causing personal injury.', 'PA shall verify that the work crew runs the extension cord for the lighting overhead of the access point.', 'Body Mechanics &#xe80d;', 'acward,limited', 'all', 2, 2, '', 'Master Said: Test Reassesment Request'),
(4, 'Potential to contact loose metallic sheets and insulation pins when moving around in the confined space with poor lighting resulting in personal injury', 'PA shall verify that each entrant has a working flashlight with them at all times while in the confined space.', 'Body Mechanics &#xe80d;', 'hidden,pins,light', 'insulation,sheetmetal', 3, 3, '', NULL),
(5, 'Soft tissue injury to personnel due to overextension and working outside of green zone.', 'PA and worker will work within green zone, take breaks and re-energize as needed when performing tasks.', 'Body Mechanics &#xe80d;', 'overextension,zone', 'all', 3, 3, '', NULL),
(6, 'Cuts and scrapes from the inadvertent contact with the edges of the sheet metal resulting in injury.', 'PA will assure the proper handling technique for sheet metal including not sliding hands over the edges of the metal.', 'Body Mechanics &#xe80d;', 'cut,scrape', 'insulation', 3, 3, '', NULL),
(7, 'Use of non-intrinsically safe electric 110v  or battery powered tool may become an ignition source for an unplanned release of hydrocarbon into the work area resulting in personal injury and damage to equipment.', 'Prior to the use of any non-intrinsically safe devices within a classified area, the IA shall insure location has been checked with a gas monitor to insure no volatile gasses are present within the area. If at any time there after the workers suspect the atmosphere in the area has changed due to odors or noise of gas escaping containment PA Shall stop the job and contact operations.', 'Electrical &#59403;', 'spark,tool', 'all', 3, 3, '', NULL),
(8, 'Accidently contact with energized heat trace will result is damage to equipment and injury to personnel, could result in burns or electrocution to workers.', 'IA/PA shall verify heat tracing is de-energized and LOTO is complete. PA’s lock shall be applied to circuit.', 'Electrical &#59403;', 'loto', 'insulation', 3, 3, '', NULL),
(9, 'Carrying tools and materials to and from work location.', 'PA shall insure that any tools and materials that are carried in such a way to limit and mitigate possible strains and sprains; by use of buckets, bags, Team-Lifting, and cutting oversized materials down.', 'Gravity &#xe80c;', 'carry,mobe', 'all', 3, 3, '', NULL),
(10, 'Carrying tools and materials up stairs and or ladders to an elevated work location.', 'PA shall insure that any tools and materials that are carried up or down stairs in such a way that workers have one hand free to use the hand rails. Tools and materials that are to be brought up to a work location that is accessed by ladder, shall be raised and lowed by rope.', 'Gravity &#xe80c;', 'carry,mobe', 'all', 3, 3, '', NULL),
(11, 'Equipment stability issues while working in a man lift / scissor lift could result in a fall from the work platform resulting in injury.', 'PA will verify that all workers in man lifts / scissor lifts are tied off to the designated anchor point within the equipment’s work area with a full body harness and fall arrest lanyard.', 'Gravity &#xe80c;', 'equipment,stability', 'all', 3, 3, '', NULL),
(12, 'Falling from a step ladder while overreaching resulting in personal injury.', 'PA shall ensure firm footing for the step ladder. Plywood shall be laid down as needed.', 'Gravity &#xe80c;', 'ladder,overextension', 'all', 3, 3, '', NULL),
(13, 'Injury to personnel below work area due to dropped objects while performing task at heights.\n ( Gravity )', 'PA shall establish an \"exclusion\" zone immediately below the work area to prevent unnecessary personnel from entering the area.', 'Gravity &#xe80c;', 'exclusion,dropped', 'all', 3, 3, '', NULL),
(14, 'Walking on snow over, or near pipelines could result in workers falling into a snow resulting in personal injury.', 'PA shall ensure that the work crew probes the area along the buried pipes to check for snow caves.', 'Gravity &#xe80c;', 'walking,mobe', 'all', 3, 3, '', NULL),
(15, 'Accessing location underneath pipe rack, low overhead piping and VSM’s, loose gravel on embankment. May cause head injury or falls to personnel.', 'PA and work crew shall verify a walking path to work location, being aware of piping and vsm locations.', 'Gravity &#xe80c;', 'walking,mobe', 'all', 3, 3, '', NULL),
(16, 'Injury to personnel climbing ladder to access scaffold', 'PA and worker will use 3 points of contact while climbing ladder.', 'Gravity &#xe80c;', 'ladder,scaffold', 'all', 3, 3, '', NULL),
(17, 'Performing work on erected scaffolding, personnel have possibility of injury due to faulty components of scaffold.', 'PA shall inspect scaffold for damaged components prior to use.', 'Gravity &#xe80c;', 'scaffold,fail', 'all', 3, 3, '', NULL),
(18, 'Tools and materials may become dislodged from work location resulting in dropped objects.', 'Bring only the tools needed for the task and place inside a container. Bring container for materials to be removed from work location.', 'Gravity &#xe80c;', 'dropped', 'all', 3, 3, '', NULL),
(19, 'Using a ladder to access piping could result in personnel falling off of ladder, will cause injury to personnel.', 'PA shall verify ladder is in good working order, and is stabilized while worker is performing task on ladder.', 'Gravity &#xe80c;', 'ladder', 'all', 3, 3, '', NULL),
(20, 'Inspect walking working areas for loose materials and items that could cause a fall and injury.', 'PA to assure crew will remove and relocate loose items or materials that are in the walking work areas to avoid falling due to tripping hazards.', 'Gravity &#xe80c;', 'walking,mobe,dropped', 'all', 3, 3, '', NULL),
(21, 'Trash and leftover materials in the work locations that could cause a hazard for others entering the area after we have finished.', 'PA will assure the removal of all trash and materials from work locations to prevent Hazards and/or injuries to others.', 'Gravity &#xe80c;', 'mobe,walking', 'all', 3, 3, '', NULL),
(22, 'Unauthorized personal entering work zone, causing exposure to hazardous insulation dust in the work area.', 'PA shall establish an \"exclusion\" zone in module and on access doors to prevent unnecessary personnel from entering the area.', 'Human Factor &#xe809;', 'dust', 'all', 3, 3, '', NULL),
(23, 'Asphyxiation to entrants when entering the confined space due to O2 depletion and/or excessive levels of CO resulting in personal injury/illness.', 'IA and PA shall verify that an approved ventilation plan is in place prior to making entry into the confined space.', 'Hazardus Prossess Materials &#xe806;', 'gas', 'all', 3, 3, '', NULL),
(24, 'Cuts and scrapes to hands/body as a result of handling sheet metal with sharp edges.', 'PA shall ensure work party wears cut resistant gloves while performing this task.', 'Mechanical &#xe800;', 'cut,scrape', 'insulation', 3, 3, '', NULL),
(25, 'Cuts to hands/body as a result of cutting insulation using hand implements.', 'PA shall ensure all crew members use cut resistant gloves when using cutting tools with sharp edges.', 'Mechanical &#xe800;', 'cut,scrape', 'insulation', 3, 3, '', NULL),
(26, 'Eye injury to personnel performing task or others in close proximity due to flying debris while cutting or removal of materials is being performed resulting in personal injury.', 'PA will verify that workers are not below each other while this task is being performed.', 'Mechanical &#xe800;', 'dust,overhead', 'all', 3, 3, '', NULL),
(27, 'Eye injury to personnel performing task or others in close proximity due to flying debris while cutting insulation and/or drilling holes in jacketing.', 'PA and work crew shall be aware of flying debris making sure to be positioned up wind while cutting. When overhead work is being done crew shall be wearing goggles.', 'Mechanical &#xe800;', 'dust,debris,overhead', 'insulation', 3, 3, '', NULL),
(28, 'Man-Lift defects/deficits could be present. This could cause hydraulic failures or man-lift to function outside of safe parameters.', 'PA shall insure a proper pre-use inspection is done prior to moving man-lift to work location.', 'Mechanical &#xe800;', 'equipment,fail', 'all', 3, 3, '', NULL),
(29, 'Excessive noise will be generated by adjacent equipment causing hearing difficulties resulting in temporary or permanent hearing impairment\n ( Noise )', 'PA verifies that work crew wear compressible foam ear plugs while working with tools and equipment that produce noise levels of 85 dB or greater', 'Noise &#xe808;', 'noise', 'all', 3, 3, '', NULL),
(30, 'Bodily injection injury due to hose rupture or disconnect while using pneumatic equipment/ tools resulting in personal injury', 'Make sure the line is blocked at the crib stack when the pipe has been elevated and the pressure released from the bag before work on the line proceeds.', 'Pressure &#xe801;', 'injection,rupture,lift', 'all', 3, 3, '', NULL),
(31, 'Separating high pressure tubing/jewelry while installing the new insulation box resulting in personal injury or damage to equipment.\n', 'PA shall ensure that the work crew does not move or apply force to the tubing/jewelry when assembling the new box.', 'Pressure &#xe801;', 'rupture', 'insulation', 3, 3, '', NULL),
(32, 'Serious potential for crashing hazard of slugging flowline, due to fluid movement in flowline at high flow velocity.', 'PA shall install line chocking up and down stream of work location.', 'Pressure &#xe801;', 'slug', 'all', 3, 3, '', NULL),
(33, 'high risk area in the pipe rack ( known slugger), but not adjacent to the work location of this task, could cause injury if personnel went in between the slugging line and an adjacent pipe', 'PA will assure that high risk area is flagged with red tape and make sure know one goes into the high risk area', 'Pressure &#xe801;', 'slug', 'all', 3, 3, '', NULL),
(34, 'Vac truck coming into contact with personnel or equipment resulting in personal injury or damage to equipment.', 'PA shall ensure that communication takes place between the Vac Truck driver and the spotter prior to moving the Vac Truck into position. That communication is to include agreed upon hand signals, route of travel, and the parking location.', 'SIMOPS &#xE804;', 'vac,equipment', 'all', 3, 3, '', NULL),
(35, '140 degree water coming into contact with the skin of the personnel performing the task resulting in personal injury.', 'PA shall ensure that the setup of the hose and the path of travel is directed away from all personnel.', 'Thermal &#xe803;', 'wash,equipment', 'all', 3, 3, '', NULL),
(36, 'Accidental contact with Hot surfaces from the hot oil line causing burns to hands and arms resulting in personal injury', 'PA shall verify that when working around hot surfaces all work party members must wear leather gloves and protect your arms with long sleeves to prevent burns to the skin.', 'Thermal &#xe803;', 'hot,pipe', 'all', 3, 3, '', NULL),
(37, 'Burns from hot exhaust gases due to unit startup while personnel are in the confined space resulting in personal injury or death', 'IA and PA shall verify that the fuel gas for the system has been blinded, that the barn door louver has been locked out, and that personal isolation locks are hung and a master card is completed prior to the permit going live.', 'Thermal &#xe803;', 'hot,exhaust,confined', 'all', 3, 3, '', NULL),
(40, 'There is a potential for work crew to be on roadway and could be struck by a vehicle resulting in personal injury.', 'PA will ensure that road signs are in place to identify work area and slow vehicle speed though the area.', 'Human Factor ', 'road,speed', 'all', 2, 3, '', NULL),
(41, 'Handling wooden materials can cause sliver and splinter when being handled, resulting in a personal injury', 'PA and Work crew shall ensure that proper gloves are worn when handling wooden materials', 'Pressure ', 'wood,cribbing', 'all', 2, 3, '', NULL),
(42, 'Lacerations, contusions or crushing may occur when handling awkward materials in a small area resulting in personal injury.', 'PA shall ensure work crew plans movement of awkward objects to identify possible pinch points and avoid them.', 'Mechanical ', 'pinch,point,awkward', 'all', 2, 3, '', NULL),
(43, 'The unexpected re-energization of equipment being worked on resulting in personal injury.', 'IA/PA shall verify equipment is de-energized and LOTO is complete. PA’s lock shall be applied to circuit and any of the work crew may verify the LOTO and apply their lock as well.', 'Mechanical ', 'loto', 'all', 2, 3, '', NULL),
(44, 'Eye injury to personnel performing task or others in close proximity due to flying debris and dust associated with certain insulation materials.\r\n', 'PA and work crew shall be aware of flying debris making sure to be positioned up wind while cutting or removing of aforementioned materials. When overhead work is being done crew shall be wearing goggles.', 'Mechanical ', 'dust,debris', 'insulation', 2, 3, '', NULL),
(45, 'G – Working from elevated platforms, such as scaffolds, Elevated gratings (“cat walks”) or lift baskets; which pose a possibility for dropped objects which may result in injury of personnel or damage to equipment on lower levels.', 'PA SHALL insure that all tools and materials are secured or placed in such a way as to make it impossible for those items to fall to a lower level by whatever means necessary. Such as hand rail netting, security lanyards and tie downs. PA SHALL insure the lower levels below the work area are cordoned off by means of “RED” barricade flagging tape, which reads “DO NOT ENTER”.', 'Pressure ', 'manlift,equipment,dropped', 'all', 2, 3, '', NULL),
(100, 'test', 'test', 'Pressure ', 'test', 'test', 2, -1, '', NULL),
(46, 'asdasdasd', 'asdasdasd', 'Mechanical ', 'ladder,dust', 'all', 2, -1, '', NULL),
(47, 'BM - Soft tissue injury caused by vibrations from pneumatic tools while removing burner tiles and refractory cement', 'PA and crew members with take breaks and switch tasks with one another. Crew will also stay in green zone while using pneumatic tools', 'Pressure ', 'vibration,over,burner,cone', 'all', 2, 3, '', NULL),
(48, 'UV detectors in area could possibly be tripped while performing task which would result in facility shutdown or disruption.', 'IA shall have UV detectors put out of service when the potential to trip the UV detectors is present. Then when work that creates the potential is complete. PA shall contact IA to get UV detectors re-enabled.', 'Electrical ', 'UV,Detector,isolation,loto,fire', 'insulation,all', 2, 3, '', NULL),
(49, 'Muscle strains due to handling heavy/awkward equip/materials while staging jobsite', 'PA shall verify that workers use buddy system and/or mechanical means when lifting materials deemed heavy or awkward.', 'Body Mechanics ', 'mobe,heavy,awkward', 'flex,sheetmetal', 2, 3, '', NULL),
(50, 'Potential loss of control of materials resulting in personal injuries.', 'PA shall ensure that work crew coordinates material handling to mitigate possible loss of control.', 'Mechanical ', 'mobe', 'all', 2, 3, '', NULL),
(51, 'Mechanical damage to the pipeline during the lifting process due to increase in stress at normal operating pressure resulting in an LOPC', 'PA will ensure that the pipeline is fit to lift as per the attached engineered lift plan, and that plan is followed.', 'Pressure ', 'airbag,lifting,line,lift', 'all', 2, 3, '', NULL),
(52, 'Hot Work Open Flame in the area has the potential to be an ignition source resulting in fire/explosion', 'Work crew will have a fire watch during and up to 30 minutes after all hot work is preformed. To ensure no fire is started by either spark from grinder or HWOF from cutting torch.', 'Thermal ', 'hot,work,HWOF', 'all', 3, -3, '', 'Master Said: '),
(53, 'Potential for crib stack failure while performing line lift resulting in personal injury and/or damage to property\r\n', 'PA shall ensure that work crew build crib stacks according to lift plan.', 'Gravity ', 'wood,cribbing', 'pipe', 2, -1, '', NULL),
(54, 'Potential for crib stack failure while performing line lift resulting in personal injury and/or damage to property\r\n', 'PA shall ensure that work crew build crib stacks according to lift plan.', 'Gravity ', 'wood,cribbing', 'pipe', 2, -1, '', NULL),
(55, 'Potential for crib stack failure while performing line lift resulting in personal injury and/or damage to property\r\n', 'PA shall ensure that work crew build crib stacks according to lift plan.', 'Gravity ', 'wood,cribbing', 'pipe', 2, -1, '', NULL),
(56, 'Potential for crib stack failure while performing line lift resulting in personal injury and/or damage to property\r\n', 'PA shall ensure that work crew build crib stacks according to lift plan.', 'Gravity ', 'wood,cribbing', 'pipe', 2, -1, '', NULL),
(57, 'Potential for crib stack failure while performing line lift resulting in personal injury and/or damage to property\r\n', 'PA shall ensure that work crew build crib stacks according to lift plan.', 'Gravity ', 'wood,cribbing', 'pipe', 2, -1, '', NULL),
(58, 'Potential for crib stack failure while performing line lift resulting in personal injury and/or damage to property\r\n', 'PA shall ensure that work crew build crib stacks according to lift plan.', 'Gravity ', 'wood,cribbing', 'pipe', 2, -1, '', NULL),
(59, 'Potential for crib stack failure while performing line lift resulting in personal injury and/or damage to property\r\n', 'PA shall ensure that work crew build crib stacks according to lift plan.', 'Gravity ', 'wood,cribbing', 'pipe', 2, -1, '', NULL),
(60, 'Potential for crib stack failure while performing line lift resulting in personal injury and/or damage to property\r\n', 'PA shall ensure that work crew build crib stacks according to lift plan.', 'Gravity ', 'wood,cribbing', 'pipe', 2, 3, '', NULL),
(61, 'Potential for crib stack failure while performing line lift resulting in personal injury and/or damage to property\r\n', 'PA shall ensure that work crew build crib stacks according to lift plan.', 'Gravity ', 'wood,cribbing', 'pipe', 2, -1, '', NULL),
(62, 'Potential for crib stack failure while performing line lift resulting in personal injury and/or damage to property\r\n', 'PA shall ensure that work crew build crib stacks according to lift plan.', 'Gravity ', 'wood,cribbing', 'pipe', 2, -1, '', NULL),
(63, 'Potential for crib stack failure while performing line lift resulting in personal injury and/or damage to property\r\n', 'PA shall ensure that work crew build crib stacks according to lift plan.', 'Gravity ', 'wood,cribbing', 'pipe', 2, -1, '', NULL),
(64, 'Potential for crib stack failure while performing line lift resulting in personal injury and/or damage to property\r\n', 'PA shall ensure that work crew build crib stacks according to lift plan.', 'Gravity ', 'wood,cribbing', 'pipe', 2, -1, '', NULL),
(65, 'Potential for crib stack failure while performing line lift resulting in personal injury and/or damage to property\r\n', 'PA shall ensure that work crew build crib stacks according to lift plan.', 'Gravity ', 'wood,cribbing', 'pipe', 2, -1, '', NULL),
(66, 'Potential for crib stack failure while performing line lift resulting in personal injury and/or damage to property\r\n', 'PA shall ensure that work crew build crib stacks according to lift plan.', 'Gravity ', 'wood,cribbing', 'pipe', 2, 1, '', NULL),
(67, 'Potential for crib stack failure while performing line lift resulting in personal injury and/or damage to property\r\n', 'PA shall ensure that work crew build crib stacks according to lift plan.', 'Gravity ', 'wood,cribbing', 'pipe', 2, 1, '', NULL),
(68, 'Potential for crib stack failure while performing line lift resulting in personal injury and/or damage to property\r\n', 'PA shall ensure that work crew build crib stacks according to lift plan.', 'Gravity ', 'wood,cribbing', 'pipe', 2, -1, '', NULL),
(69, 'Potential for crib stack failure while performing line lift resulting in personal injury and/or damage to property\r\n', 'PA shall ensure that work crew build crib stacks according to lift plan.', 'Gravity ', 'wood,cribbing', 'pipe', 2, -1, '', NULL),
(70, 'Getting shocked due to exposing damaged electrical cable while Hydro Excavation activities resulting in bodily harm while performing task resulting in personal injury.', 'PA and IA shall verify LOTO is complete and all electric cables near excavation are de-energized.', 'Electrical ', 'excavation', 'flex', 2, 3, '', NULL),
(71, 'Personnel falling to into trench while working around open holes whilst performing task. Resulting in personal injury ', 'PA shall ensure that the trench is barricaded as it progresses across the pad. ', 'Gravity ', 'excavation', 'flex', 2, 3, '', NULL),
(99, 'Test', 'TEst', 'Pressure ', 'Testtt', 'Testing', 2, -1, '', NULL),
(98, 'Bodily harm due to getting caught in rotating fan blades while inside fan bay resulting in personal injury.', 'PA shall ensure that fan blade movement is restricted, by securing to housing.', 'Mechanical ', 'fin,fan,blade', 'finfan', 2, 3, '', NULL),
(97, 'Limited or awkward access and egress into a work location has the potential to cause soft tissue injury and restrict egress.', 'PA shall ensure that if any extended time is required in the restricting area, that work crew shall take turns and re-energize; PA shall ensure that no tasks are preformed that will add hazards to environment of area.', 'Body Mechanics ', 'rest', 'all', 3, 4, '', NULL),
(96, 'tesy', 'ydyyd', 'Body Mechanics ', 'ladder,scaffold', 'pasta,all', 2, -1, '', NULL),
(90, 'Slugging of water wash hose on start up and when the truck gets low on water causing workers to lose balance and possibly fall resulting in personal injury.', 'PA shall verify that truck operator opens and closes valve slowly, and truck operator monitors worker water washing in case of slugging.', 'Pressure ', 'wash,water,hose', 'all', 2, 3, '', NULL),
(91, 'Operation of combustion engine may become an ignition source for an unplanned release of hydrocarbons into the work area resulting in personal injury and damage to equipment.', 'Prior to the use of any combustion engines within a classified area, the IA shall insure location has been checked with a gas monitor to insure no volatile gasses or other hydrocarbons are present within the area. If at any time there after the workers suspect the atmosphere in the area has changed due to odors or noise of gas escaping containment PA Shall stop the job and contact operations.', 'Hazardus Prossess Materials ', 'water,water,wash,excavation', 'all', 2, 3, '', NULL),
(92, 'Water wash activities may result in an opening which personnel could fall into resulting in personnel injury.', 'PA shall ensure whenever possible to slope sides of water wash area at 1.5 to 1 ratio or more, and when not possible ensure that any sides that are not sloped and have a potential fall distance of 4 feet or more shall have hard barricades in place.', 'Gravity ', 'water,water,wash,excavation', 'all', 3, 4, '', NULL),
(95, 'this is a test', 'this is a test', 'Body Mechanics ', 'ladder', 'all', 2, -1, '', NULL),
(94, 'Possible over/miss cut with reciprocating saw could cut metal jacketing of piping. Causing possible location for ingress of water an corrosion under the insulation.', 'PA shall ensure that the reciprocating saw procedure is followed; Work crew shall cut away from metal jacketing whenever possible.', 'Mechanical ', 'recipricating,saw,sawzall', 'all', 2, 3, '', NULL),
(101, 'Possible pinch, crush, or dropped object hazard when handing over scaffolding materials may cause personal injury.', 'PA shall ensure all work crew use the quarter turn hand off method to ensure receiving party has control of material.', 'Mechanical ', 'scaffold,quarter', 'scaffold,all', 2, 3, '', NULL),
(102, 'Test ', 'Test ', 'Pressure ', 'Test', 'Test', 2, -1, '', NULL),
(103, 'Frostbite or hypothermia from getting wet from water washing activities in freezing conditions resulting in personal injury.', 'PA shall ensure that workers avoid spray from water stream to avoid getting wet through arctic gear to avoid hypothermia or frostbite.\r\nPA shall verify that workers rotate out frequently while water washing to avoid cold whether injuries.', 'Thermal ', 'Water,Washing', 'Flex,Field,Pipe,CMC', 2, 3, '', NULL),
(104, 'Slick walking surfaces & poor traction due to icy/snowy conditions from water washing activities causing  work crew to fall over and injuring themselves resulting in personal injury', 'PA shall verify that work party must fasten strap-on cleats to soles for greater traction on ice', 'Gravity ', 'Water,Washing,water,wash,washing', 'Flex,Field,Pipe,CMC,flex,pipe,all', 2, 3, '', NULL),
(105, 'Excessive noise will be generated by Vac truck causing hearing difficulties resulting in temporary or permanent hearing impairment', 'PA verifies that work crew wear compressible foam ear plugs of ear muffs while working around Vac truck.', 'Noise ', 'Water,Washing,water,wash,washing,water,wash,washing', 'Flex,Field,Pipe,CMC,flex,pipe,all,all', 2, 3, '', NULL),
(106, 'Eye injury to personnel performing task or others in close proximity of water washing operations resulting in personal injury.', 'PA to verify that work party wear goggles when there is a potential for flying debris associated water washing.', 'Mechanical ', 'Water,Washing,water,wash,washing,water,wash,washing,water,wash,washing', 'Flex,Field,Pipe,CMC,flex,pipe,all,all,all', 2, 3, '', NULL),
(107, 'Workers falling while walking across pipelines, HSMs or elevated areas resulting in personnel injury.', 'PAs will ensure workers go under the piping when possible, If this isn\'t possible, PA will ensure use plywood or scaffold pick boards to cross over piping. Plywood or pick boards will be secured to the piping prior to the work commencing', 'Gravity ', 'Water,Washing,water,wash,washing,water,wash,washing,water,wash,washing,access,work,location', 'Flex,Field,Pipe,CMC,flex,pipe,all,all,all,all', 2, 3, '', NULL),
(108, 'Heavy scaffolding components (ranging from 50 to 100 lbs.) being moved  from one worker to another from the staging area to the truck, may result in soft tissue and muscle injuries such strains and sprains. ', 'PA to ensure that proper lifting technique is used during all manual transfer of scaffolding materials for loading activities. The buddy system and team lift method shall be used for manually moving components > 50 lbs.', 'Body Mechanics ', 'Water,Washing,water,wash,washing,water,wash,washing,water,wash,washing,access,work,location,scaffold', 'Flex,Field,Pipe,CMC,flex,pipe,all,all,all,all,all', 2, 3, '', NULL),
(109, 'Sharp edges, metal burrs, nails, and splinters in scaffolding materials being manually transferred from one worker to another resulting in hand and arm lacerations, punctures, and abrasions.  ', 'PA to verify that materials handlers inspect all components, and any discovery of damaged materials that could cause hand injuries will be repaired or removed  as needed. ', 'Mechanical ', 'Water,Washing,water,wash,washing,water,wash,washing,water,wash,washing,access,work,location,scaffold', 'Flex,Field,Pipe,CMC,flex,pipe,all,all,all,all,all,all', 2, 3, '', NULL),
(110, 'Potential for tools or scaffolding equipment to be dropped resulting in personnel injury or hydrocarbon release due to equipment damage. ', 'PA and work crew will utilize tool bags to contain loose tools and materials while dismantling scaffold. PA to verify that materials handlers use safe chain-lining methods to pass material. These methods shall include visual, verbal, and twist confirmation of control and receipt. PA to verify that an exclusion zone is established, tagged, and functional to protect workers from entering potent', 'Gravity ', 'Water,Washing,water,wash,washing,water,wash,washing,water,wash,washing,access,work,location,scaffold', 'Flex,Field,Pipe,CMC,flex,pipe,all,all,all,all,all,all,all', 2, 3, '', NULL),
(111, 'Muscle strains or trapped fingers whilst lifting, moving or lowering scaffold equipment.', 'PA to use mechanical aids where possible. Cart/sleds should be used for transporting equipment to and from the work site. PA will agree with the work party at the TBT any manual handling restrictions or requirements necessary for carrying out the task. ', 'Body Mechanics ', 'Water,Washing,water,wash,washing,water,wash,washing,water,wash,washing,access,work,location,scaffold', 'Flex,Field,Pipe,CMC,flex,pipe,all,all,all,all,all,all,all,all', 2, 3, '', NULL),
(112, 'Potential for personnel to fall during erecting or modifying of scaffolding resulting in serious injury.', 'PA will communicate at the TBT that rescue techniques are understood by all the work party. Using trauma straps to provide self rescue capability until rescue arrives at the site. PA will check that all personnel working at height are continuously anchored to secured scaffold components (above head if possible) per manufacturer/OSHA recommendations. Full body harness with double restraint lan', 'Gravity ', 'Water,Washing,water,wash,washing,water,wash,washing,water,wash,washing,access,work,location,scaffold', 'Flex,Field,Pipe,CMC,flex,pipe,all,all,all,all,all,all,all,all,all', 2, 3, '', NULL),
(113, 'Loss of control of scaffold materials striking worker resulting in personnel injury.', 'PA and crew will stay in constant communication while handling materials as a team or between one and other. Employ the \"Twist Method\" to ensure the passing of materials are controlled\r\nPA to verify that materials handlers do NOT grab diagonals (braces) from connection points and only pass material by grabbing securely onto the bar itself.', 'Gravity ', 'scaffold,scaffolding', 'all', 3, 4, '', NULL),
(114, 'Fluid/hydrocarbon release from tubing while buffing resulting in personal injuries or environmental impacts.', 'PA shall have a hold point, and contact IA and Owner User to have them determine if tubing is in a good enough condition to precede and begin buffing.', 'Hazardus Prossess Materials ', 'buffing,broach,heater', 'all', 2, 3, '', NULL),
(115, 'Loader striking process equipment or personnel while placing gravel around wellhead and cellar, or placing timbers in location causing LOPC and / or personal injury.', 'PA to ensure spotter is directing loader any time the loader is within 10 feet of process piping, and hand signals have been reviewed an agreed to prior to beginning loader operations.', 'Mechanical ', 'Loader', 'all', 2, 3, '', NULL),
(116, 'Uncontrolled movement of mobile equipment on location striking production plant and/or personnel resulting in personal injury and damage to equipment', 'PA will create an exclusion zone with barricades, cones and signs prior to beginning work to restrict access to non-essential personnel.', 'Mechanical ', 'loader,skid,steer,zoom,boom', 'CMC,FSP,Field,pipe,All', 2, 3, '', NULL),
(117, 'Uncontrolled movement of mobile equipment on location striking production plant and/or personnel resulting in personal injury and damage to equipment', 'PA to ensure that when equipment movement is going to occur with in the exclusion zone that the path of travel is communicated throughout the work party, prior to the start of the equipment\'s specific task.', 'Mechanical ', 'loader,skid,steer,zoom,boom,Loader,Skid,steer,zoom,boom', 'CMC,FSP,pipe,All,Cmc,Field,Pip,pipe,FSP,All', 2, 3, '', NULL),
(118, 'Unknown vapor or gas release from VSM while cold cutting could ignite or harm personnel.', 'PA shall ensure that prior to preforming cold cut on VSM\'s that a pilot hole is drilled so operations can preform an AGT to verify internal atmosphere of VSM is safe to proceed.', 'Hazardus Prossess Materials ', 'VSM,Cold,Cut', 'All,Pipe,CMC', 3, 4, '', NULL),
(119, 'zzz', 'zzz', 'Pressure ', 'zz', 'zzz', 3, 0, '', NULL),
(120, 'zzz', 'zzz', 'Pressure ', 'zzz', 'zzz', 2, -1, '', NULL),
(121, 'zz', 'zzz', 'Thermal ', 'zzz', 'zzz', 2, -1, '', NULL),
(122, 'test', 'test', 'Mechanical ', 'test', 'test', 2, -1, '', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aas`
--
ALTER TABLE `aas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `forms`
--
ALTER TABLE `forms`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_2` (`id`),
  ADD KEY `id_3` (`id`);

--
-- Indexes for table `hazmit`
--
ALTER TABLE `hazmit`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aas`
--
ALTER TABLE `aas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1017;

--
-- AUTO_INCREMENT for table `forms`
--
ALTER TABLE `forms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

--
-- AUTO_INCREMENT for table `hazmit`
--
ALTER TABLE `hazmit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
