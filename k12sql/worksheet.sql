/*
Navicat MySQL Data Transfer

Source Server         : ABCD
Source Server Version : 50718
Source Host           : localhost:3306
Source Database       : k12

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2018-07-24 17:13:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `worksheet`
-- ----------------------------
DROP TABLE IF EXISTS `worksheet`;
CREATE TABLE `worksheet` (
  `time1` varchar(255) DEFAULT NULL,
  `meigushouyi` varchar(255) DEFAULT NULL,
  `meigujingzichan` varchar(255) DEFAULT NULL,
  `cunhuoday` varchar(255) DEFAULT NULL,
  `cunhuolv` varchar(255) DEFAULT NULL,
  `liuzhuanlv` varchar(255) DEFAULT NULL,
  `gudinglv` varchar(255) DEFAULT NULL,
  `zongzhunlv` varchar(255) DEFAULT NULL,
  `zengchanglv` varchar(255) DEFAULT NULL,
  `liudonglv` varchar(255) DEFAULT NULL,
  `sudonglv` varchar(255) DEFAULT NULL,
  `chanlv` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of worksheet
-- ----------------------------
INSERT INTO `worksheet` VALUES ('2018', '0.38', '2.86', '1.65', '218', '1.35', '8.54', '0.7', '119.13%', '1.47', '1.46', '0.87');
INSERT INTO `worksheet` VALUES ('2017', '0.24', '7.83', '1.18', '305.14', '1.5', '7.76', '0.72', '44.90%', '1.31', '1.3', '1.78');
INSERT INTO `worksheet` VALUES ('2016', '1.29', '5.4', '0.68', '530.59', '1.17', '5.96', '0.68', '37.81%', '1.35', '1.34', '1.42');
INSERT INTO `worksheet` VALUES ('2015', '0.42', '3.92', '0.64', '559.55', '1.03', '5.04', '0.72', '18.92%', '2.32', '2.32', '1.46');
INSERT INTO `worksheet` VALUES ('2014', '0.39', '3.3', '0.7', '512.03', '1.19', '4.06', '0.84', '34.42%', '1.8', '1.8', '0.64');
INSERT INTO `worksheet` VALUES ('2013', '0.21', '2.45', '0.99', '365.27', '1.03', '2.96', '0.74', '-0.05%', '1.82', '1.82', '0.65');
INSERT INTO `worksheet` VALUES ('2012', '0.16', '2.45', '0.64', '559.91', '0.85', '4.21', '0.69', '20.75%', '2.01', '2.01', '0.55');
INSERT INTO `worksheet` VALUES ('2011', '0.18', '2.03', '0.77', '468.55', '0.85', '17.68', '0.78', '', '3.28', '3.28', '0.4');
INSERT INTO `worksheet` VALUES ('2010', '0.11', '', '0.59', '612.76', '1.58', '18.65', '1.34', '', '1.48', '1.47', '2.15');
INSERT INTO `worksheet` VALUES ('2009', '0.03', '', '0.02', '17454.61', '1.17', '15.16', '0.97', '', '1.24', '1.24', '7.81');
