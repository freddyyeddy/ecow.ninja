-- phpMyAdmin SQL Dump
-- version 4.0.10.11
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 25, 2017 at 05:34 AM
-- Server version: 5.1.73
-- PHP Version: 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ninja`
--

-- --------------------------------------------------------

--
-- Table structure for table `hazmit`
--

CREATE TABLE IF NOT EXISTS `hazmit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hazard` varchar(500) DEFAULT NULL COMMENT 'A Hazard',
  `mitigation` varchar(395) DEFAULT NULL COMMENT 'The Mitigation for The Hazard',
  `source` varchar(10) DEFAULT NULL COMMENT 'The energy source based on BP',
  `tags` varchar(100) DEFAULT NULL COMMENT 'Things this hazard is tagged as',
  `crafts` varchar(200) DEFAULT NULL COMMENT 'Crafts That This Hazard Are Applicable To',
  `review` int(11) NOT NULL COMMENT 'Number of times its been peer reviewed',
  `bad` smallint(1) NOT NULL COMMENT 'marked as a bad Hazerd',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COMMENT='The Hazard and Mitigations ' AUTO_INCREMENT=38 ;

--
-- Dumping data for table `hazmit`
--

INSERT INTO `hazmit` (`id`, `hazard`, `mitigation`, `source`, `tags`, `crafts`, `review`, `bad`) VALUES
(2, 'Laceration, abrasion or avulsion from unintentional forceful contact with sharp metal edges associated with certain insulation materials.', 'PA shall insure that all workers stay alert to the presents of sharp edged materials and avoid forceful contact with those edges. Workers shall utilize cut resistant gloves while handling metal objects.', 'BM', 'cut', 'insulation, sheet metal', 0, 0),
(3, 'Limited or awkward access / egress into the confined space have the potential to cause soft tissue injury and restrict emergency response causing personal injury.', 'PA shall verify that the work crew runs the extension cord for the lighting overhead of the access point.', 'BM', 'acward, limited', 'all', 0, 0),
(4, 'Potential to contact loose metallic sheets and insulation pins when moving around in the confined space with poor lighting resulting in personal injury', 'PA shall verify that each entrant has a working flashlight with them at all times while in the confined space.', 'BM', 'hidden, pins, light', 'insulation, sheet metal', 0, 0),
(5, 'Soft tissue injury to personnel due to overextension and working outside of green zone.', 'PA and worker will work within green zone, take breaks and reenergize as needed when performing tasks.', 'BM', 'overextension, zone', 'all', 0, 0),
(6, 'Cuts and scrapes from the inadvertent contact with the edges of the sheet metal resulting in injury.', 'PA will assure the proper handling technique for sheet metal including not sliding hands over the edges of the metal.', 'BM', 'cut, scrape', 'insulation, sheet metal', 0, 0),
(7, 'Use of non-intrinsically safe electric 110v  or battery poweredtool may become an ignition source for an unplanned release of hydrocarbon into the work area resulting in personal injury and damage to equipment.', 'Prior to the use of any non-intrinsically safe devices within a classified area, the IA / PA shall insure location has been checked with a gas monitor to insure no volatile gasses are present with in the area. If at any time there after the workers suspect the atmosphere in the area has changed due to odours or noise of gasses escaping containment PA Shall stop the job and contact operations.', 'E', 'spark, tool', 'all', 0, 0),
(8, 'Accidently contact with energized heat trace will result is damage to equipment and injury to personnel, could result in burns or electrocution to workers.', 'IA/PA shall verify heat tracing is de-energized and LOTO is complete. PA’s lock shall be applied to circuit.', 'E', 'loto', 'insulation', 0, 0),
(9, 'Carrying tools and materials to and from work location.', 'PA shall insure that any tools and materials that are carried in such a way to limit and mitigate possible strains and sprains; by use of buckets, bags, Team-Lifting, and cutting oversized materials down.', 'G', 'carry, mobe', 'all', 0, 0),
(10, 'Carrying tools and materials up stairs and or ladders to an elevated work location.', 'PA shall insure that any tools and materials that are carried up or down stairs in such a way that workers have one hand free to use the hand rails. Tools and materials that are to be brought up to a work location that is accessed by ladder, shall be raised and lowed by rope.', 'G', 'carry, mobe', 'all', 0, 0),
(11, 'Equipment stability issues while working in a man lift / scissor lift could result in a fall from the work platform resulting in injury.', 'PA will verify that all workers in man lifts / scissor lifts are tied off to the designated anchor point within the equipment’s work area with a full body harness and fall arrest lanyard.', 'G', 'equipment, stability', 'all', 0, 0),
(12, 'Falling from a step ladder while overreaching resulting in personal injury.', 'PA shall ensure firm footing for the step ladder. Plywood shall be laid down as needed.', 'G', 'ladder, overextension', 'all', 0, 0),
(13, 'Injury to personnel below work area due to dropped objects while performing task at heights.\n ( Gravity )', 'PA shall establish an "exclusion" zone immediately below the work area to prevent unnecessary personnel from entering the area.', 'G', 'exclusion, dropped', 'all', 0, 0),
(14, 'Walking on snow over, or near pipelines could result in workers falling into a snow resulting in personal injury.', 'PA shall ensure that the work crew probes the area along the buried pipes to check for snow caves.', 'G', 'walking, mobe', 'all', 0, 0),
(15, 'Accessing location underneath pipe rack, low overhead piping and VSM’s, loose gravel on embankment. May cause head injury or falls to personnel.', 'PA and work crew shall verify a walking path to work location, being aware of piping and vsm locations.', 'G', 'walking, mobe', 'all', 0, 0),
(16, 'Injury to personnel climbing ladder to access scaffold', 'PA and worker will use 3 points of contact while climbing ladder.', 'G', 'ladder, scaffold', 'all', 0, 0),
(17, 'Performing work on erected scaffolding, personnel have possibility of injury due to faulty components of scaffold.', 'PA shall inspect scaffold for damaged components prior to use.', 'G', 'scaffold, fail', 'all', 0, 0),
(18, 'Tools and materials may become dislodged from work location resulting in dropped objects.', 'Bring only the tools needed for the task and place inside a container. Bring container for materials to be removed from work location.', 'G', 'dropped', 'all', 0, 0),
(19, 'Using a ladder to access piping could result in personnel falling off of ladder, will cause injury to personnel.', 'PA shall verify ladder is in good working order, and is stabilized while worker is performing task on ladder.', 'G', 'ladder', 'all', 0, 0),
(20, 'Inspect walking working areas for loose materials and items that could cause a fall and injury.', 'PA to assure crew will remove and relocate loose items or materials that are in the walking work areas to avoid falling due to tripping hazards.', 'G', 'walking, mobe, dropped', 'all', 0, 0),
(21, 'Trash and leftover materials in the work locations that could cause a hazard for others entering the area after we have finished.', 'PA will assure the removal of all trash and materials from work locations to prevent Hazards and/or injuries to others.', 'G', 'mobe, walking', 'all', 0, 0),
(22, 'Unauthorized personal entering work zone, causing exposure to hazardous insulation dust in the work area.', 'PA shall establish an "exclusion" zone in module and on access doors to prevent unnecessary personnel from entering the area.', 'HF', 'dust', 'all', 0, 0),
(23, 'Asphyxiation to entrants when entering the confined space due to O2 depletion and/or excessive levels of CO resulting in personal injury/illness.', 'IA and PA shall verify that an approved ventilation plan is in place prior to making entry into the confined space.', 'HPM', 'gas', 'all', 0, 0),
(24, 'Cuts and scrapes to hands/body as a result of handling sheet metal with sharp edges.', 'PA shall ensure work party wears cut resistant gloves while performing this task.', 'M', 'cut, scrape', 'insulation, sheet metal', 0, 0),
(25, 'Cuts to hands/body as a result of cutting insulation using hand implements.', 'PA shall ensure all crew members use cut resistant gloves when using cutting tools with sharp edges.', 'M', 'cut, scrape', 'insulation', 0, 0),
(26, 'Eye injury to personnel performing task or others in close proximity due to flying debris while cutting or removal of materials is being performed resulting in personal injury.', 'PA will verify that workers are not below each other while this task is being performed.', 'M', 'dust, overhead', 'all', 0, 0),
(27, 'Eye injury to personnel performing task or others in close proximity due to flying debris while cutting insulation and/or drilling holes in jacketing.', 'PA and work crew shall be aware of flying debris making sure to be positioned up wind while cutting. When overhead work is being done crew shall be wearing goggles.', 'M', 'dust, debris, overhead', 'insulation', 0, 0),
(28, 'Man-Lift defects/deficits could be present. This could cause hydraulic failures or man-lift to function outside of safe parameters.', 'PA shall insure a proper pre-use inspection is done prior to moving man-lift to work location.', 'M', 'equipment, fail', 'all', 0, 0),
(29, 'Excessive noise will be generated by adjacent equipment causing hearing difficulties resulting in temporary or permanent hearing impairment\n ( Noise )', 'PA verifies that work crew wear compressible foam ear plugs while working with tools and equipment that produce noise levels of 85 dB or greater', 'N', 'noise', 'all', 0, 0),
(30, 'Bodily injection injury due to hose rupture or disconnect while using pneumatic equipment/ tools resulting in personal injury', 'Make sure the line is blocked at the crib stack when the pipe has been elevated and the pressure released from the bag before work on the line proceeds.', 'P', 'injection, rupture,lift', 'all', 0, 0),
(31, 'Separating high pressure tubing/jewelry while installing the new insulation box resulting in personal injury or damage to equipment.\n', 'PA shall ensure that the work crew does not move or apply force to the tubing/jewelry when assembling the new box.', 'P', 'rupture', 'insulation, sheet metal', 0, 0),
(32, 'Serious potential for crashing hazard of slugging flowline, due to fluid movement in flowline at high flow velocity.', 'PA shall install line chocking up and down stream of work location.', 'P', 'slug', '', 0, 0),
(33, 'high risk area in the pipe rack ( known slugger), but not adjacent to the work location of this task, could cause injury if personnel went in between the slugging line and an adjacent pipe', 'PA will assure that high risk area is flagged with red tape and make sure know one goes into the high risk area', 'P', 'slug', '', 0, 0),
(34, 'Vac truck coming into contact with personnel or equipment resulting in personal injury or damage to equipment.', 'PA shall ensure that communication takes place between the Vac Truck driver and the spotter prior to moving the Vac Truck into position. That communication is to include agreed upon hand signals, route of travel, and the parking location.', 'SIMOPS', 'vac, equipment', '', 0, 0),
(35, '140 degree water coming into contact with the skin of the personnel performing the task resulting in personal injury.', 'PA shall ensure that the setup of the hose and the path of travel is directed away from all personnel.', 'T', 'wash, equipment', '', 0, 0),
(36, 'Accidental contact with Hot surfaces from the hot oil line causing burns to hands and arms resulting in personal injury', 'PA shall verify that when working around hot surfaces all work party members must wear leather gloves and protect your arms with long sleeves to prevent burns to the skin.', 'T', 'hot, pipe', '', 0, 0),
(37, 'Burns from hot exhaust gases due to unit startup while personnel are in the confined space resulting in personal injury or death', 'IA and PA shall verify that the fuel gas for the system has been blinded, that the barn door louver has been locked out, and that personal isolation locks are hung and a master card is completed prior to the permit going live.', 'T', 'hot, exhaust, confined', '', 0, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
