/*
Navicat MySQL Data Transfer

Source Server         : localhost_3309
Source Server Version : 50617
Source Host           : localhost:3309
Source Database       : an_ju_ke

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2018-01-05 22:47:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin_table
-- ----------------------------
DROP TABLE IF EXISTS `admin_table`;
CREATE TABLE `admin_table` (
  `ID` varchar(32) NOT NULL,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `b_house` bit(1) DEFAULT NULL,
  `b_ad` bit(1) DEFAULT NULL,
  `b_link` bit(1) DEFAULT NULL,
  `b_broker` bit(1) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin_table
-- ----------------------------
INSERT INTO `admin_table` VALUES ('717598f440a84b28803cd4d798c2229d', 'zhangsan', 'c33367701511b4f6020ec61ded352059', '', '\0', '\0', '');

-- ----------------------------
-- Table structure for admin_token_table
-- ----------------------------
DROP TABLE IF EXISTS `admin_token_table`;
CREATE TABLE `admin_token_table` (
  `ID` varchar(32) NOT NULL,
  `admin_ID` varchar(32) DEFAULT NULL,
  `expires` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin_token_table
-- ----------------------------

-- ----------------------------
-- Table structure for ad_table
-- ----------------------------
DROP TABLE IF EXISTS `ad_table`;
CREATE TABLE `ad_table` (
  `ID` varchar(32) NOT NULL,
  `admin_ID` varchar(32) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `img_path` varchar(255) DEFAULT NULL,
  `img_real_path` varchar(255) DEFAULT NULL,
  `expires` int(11) DEFAULT NULL,
  `n_order` int(11) DEFAULT NULL,
  `n_show` int(11) DEFAULT NULL,
  `n_click` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ad_table
-- ----------------------------

-- ----------------------------
-- Table structure for broker_table
-- ----------------------------
DROP TABLE IF EXISTS `broker_table`;
CREATE TABLE `broker_table` (
  `ID` varchar(32) NOT NULL,
  `title` varchar(16) DEFAULT NULL,
  `img_path` varchar(255) DEFAULT NULL,
  `img_real_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of broker_table
-- ----------------------------

-- ----------------------------
-- Table structure for house_table
-- ----------------------------
DROP TABLE IF EXISTS `house_table`;
CREATE TABLE `house_table` (
  `ID` varchar(32) NOT NULL,
  `admin_ID` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `sub_title` varchar(255) DEFAULT NULL,
  `position_main` varchar(255) DEFAULT NULL,
  `position_second` varchar(255) DEFAULT NULL,
  `ave_price` int(11) DEFAULT NULL,
  `area_min` smallint(6) DEFAULT NULL,
  `area_max` smallint(6) DEFAULT NULL,
  `tel` varchar(16) DEFAULT NULL,
  `sale_time` int(11) DEFAULT NULL,
  `submit_time` int(11) DEFAULT NULL,
  `building_type` varchar(32) DEFAULT NULL,
  `main_img_path` varchar(255) DEFAULT NULL,
  `main_img_real_path` varchar(255) DEFAULT NULL,
  `img_paths` text,
  `img_real_paths` text,
  `property_types` text,
  `property_img_paths` text,
  `property_img_real_paths` text,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of house_table
-- ----------------------------
INSERT INTO `house_table` VALUES ('9f90159bc835452688537c2fee067a08', '717598f440a84b28803cd4d798c2229d', '泰禾•金府大院', '北京四环新中式府院团购立减5万', '丰台 公益西桥', '南四环新宫地铁站南800米', '79800', '150', '175', '400 038 6901', '1511452800', '1601481600', '叠加别墅、高层', '/static_img/52698d9a86dc439aa4555b683d1aba42.jpg', 'D:\\node\\upload\\52698d9a86dc439aa4555b683d1aba42.jpg', '/static_img/6ca44b4420ba474dbd5dd28bf0b8d9cf.jpg,/static_img/55250400a73b49d5994cbcdd5a16f388.jpg,/static_img/a77842a92b0544fdad1cbad794078ec3.jpg,/static_img/e31506c6deaa488a8b9bed9286ccfc39.jpg,/static_img/f082550d9b014403b59ee7447965057e.jpg', 'D:\\node\\upload\\6ca44b4420ba474dbd5dd28bf0b8d9cf.jpg,D:\\node\\upload\\55250400a73b49d5994cbcdd5a16f388.jpg,D:\\node\\upload\\a77842a92b0544fdad1cbad794078ec3.jpg,D:\\node\\upload\\e31506c6deaa488a8b9bed9286ccfc39.jpg,D:\\node\\upload\\f082550d9b014403b59ee7447965057e.jpg', '150㎡户型 3室2厅3卫,175㎡户型 3室2厅3卫', '/static_img/deb1fdb0c33c4b4183a69ae8face20e8.jpg,/static_img/67326c62e08f4bf4b2f138dce4f6e757.jpg', 'D:\\node\\upload\\deb1fdb0c33c4b4183a69ae8face20e8.jpg,D:\\node\\upload\\67326c62e08f4bf4b2f138dce4f6e757.jpg');

-- ----------------------------
-- Table structure for link_table
-- ----------------------------
DROP TABLE IF EXISTS `link_table`;
CREATE TABLE `link_table` (
  `ID` varchar(32) NOT NULL,
  `admin_ID` varchar(32) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `n_order` int(11) DEFAULT NULL,
  `expires` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of link_table
-- ----------------------------
