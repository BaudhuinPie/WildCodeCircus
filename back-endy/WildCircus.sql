CREATE DATABASE WildCircus;

CREATE TABLE IF NOT EXISTS Players (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	avatar VARCHAR(50) NOT NULL,
    picture TEXT,
    keyword VARCHAR(100) NOT NULL,
    phone INT NOT NULL,
	lastConnection DATE,
	wildCoins INT,
	created_at TIMESTAMP,
    UNIQUE(avatar, phone)
);

CREATE TABLE IF NOT EXISTS Promo (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    keyword VARCHAR(100) NOT NULL,
	lastConnection DATE,
	created_at TIMESTAMP,
    UNIQUE(keyword)
);
