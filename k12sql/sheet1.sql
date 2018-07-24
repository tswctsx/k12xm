/*
Navicat MySQL Data Transfer

Source Server         : ABCD
Source Server Version : 50718
Source Host           : localhost:3306
Source Database       : k12

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2018-07-24 17:12:55
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `sheet1`
-- ----------------------------
DROP TABLE IF EXISTS `sheet1`;
CREATE TABLE `sheet1` (
  `city` varchar(255) DEFAULT NULL,
  `numbei` varchar(255) DEFAULT NULL,
  `fugou` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sheet1
-- ----------------------------
INSERT INTO `sheet1` VALUES ('北京', '127', '38.34');
INSERT INTO `sheet1` VALUES ('上海', '43', '36.35');
INSERT INTO `sheet1` VALUES ('江苏', '35', '25.65');
INSERT INTO `sheet1` VALUES ('广东', '45', '37.86');
INSERT INTO `sheet1` VALUES ('湖北', '20', '24.67');
INSERT INTO `sheet1` VALUES ('陕西', '20', '18.49');
INSERT INTO `sheet1` VALUES ('天津', '17', '30.56');
INSERT INTO `sheet1` VALUES ('四川', '17', '18.85');
INSERT INTO `sheet1` VALUES ('浙江', '15', '23.67');
INSERT INTO `sheet1` VALUES ('河南', '13', '21.85');
INSERT INTO `sheet1` VALUES ('重庆', '9', '20.89');
INSERT INTO `sheet1` VALUES ('山西', '8', '20.67');
INSERT INTO `sheet1` VALUES ('湖南', '6', '16.37');
INSERT INTO `sheet1` VALUES ('河北', '4', '30.34');
INSERT INTO `sheet1` VALUES ('安徽', '3', '24.34');
INSERT INTO `sheet1` VALUES ('山东', '1', '18.45');
INSERT INTO `sheet1` VALUES ('江西', '1', '16.78');
INSERT INTO `sheet1` VALUES ('福建', '1', '12.34');
