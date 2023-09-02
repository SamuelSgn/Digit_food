CREATE DATABASE IF NOT EXISTS foods;

use foods;

CREATE TABLE IF NOT EXISTS restaurant
(
  id bigint NOT NULL AUTO_INCREMENT,
  is_admin BOOLEAN NOT NULL DEFAULT false,
  name_of_the_restaurant varchar(100) NOT NULL,
  email varchar(255)  NOT NULL,
  localisation varchar(200) NOT NULL,
  contact varchar(100) NOT NULL,
  password varchar(100) NOT NULL,
  created_at datetime NOT NULL DEFAULT NOW(),
  CONSTRAINT t_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS menus
(
  id bigint NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  URL varchar(255) NOT NULL,
  Prix DECIMAL(10, 2),
  description text NOT NULL,
  created_at datetime NOT NULL DEFAULT NOW(),
  restaurant_id bigint unsigned NOT NULL,
  CONSTRAINT t_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS commandes
(
  id bigint NOT NULL AUTO_INCREMENT,
  restaurant_id bigint unsigned NOT NULL,
  menus_id bigint unsigned NOT NULL,
  command varchar(500) NOT NULL,
  Prix DECIMAL(10, 2),
  created_at datetime NOT NULL DEFAULT NOW(),
  status varchar(255) NOT NULL,
  CONSTRAINT t_id PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS comments
(
  id bigint NOT NULL AUTO_INCREMENT,
  restaurant_id bigint unsigned NOT NULL,
  name varchar(255) NOT NULL,
  description text NOT NULL,
  CONSTRAINT t_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS subscriptions
(
  id bigint NOT NULL AUTO_INCREMENT,
  name_of_the_restaurant varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  localisation varchar(255) NOT NULL,
  contact varchar(255) NOT NULL,
  created_at datetime NOT NULL DEFAULT NOW(),
  CONSTRAINT t_id PRIMARY KEY (id)
);
