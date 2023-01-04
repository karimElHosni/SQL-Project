-- Table : Client 
CREATE TABLE IF NOT EXISTS Client (
	numeroclient			CHAR(4)				NOT NULL,
	nomclient				VARCHAR(20) 		NOT NULL,
	prenomclient	 		VARCHAR(20)			NOT NULL,
	adressecourrielclient	VARCHAR(35) DEFAULT ('xxx@gmail.com')			NOT NULL,
	rueclient				VARCHAR(30)			NOT NULL,
	villeclient				VARCHAR(30)			NOT NULL,
	codepostalclient		VARCHAR(7)			NOT NULL,
	PRIMARY KEY (numeroclient)
);

-- Table : Telephone
CREATE TABLE IF NOT EXISTS Telephone (
	numeroclient			CHAR(4)				NOT NULL,
	numerodetelephone		VARCHAR(12)			NOT NULL,
	PRIMARY KEY (numeroclient, numerodetelephone),
	FOREIGN KEY (numeroclient) REFERENCES Client(numeroclient) ON DELETE CASCADE
);

-- Table : Fournisseur
CREATE TABLE IF NOT EXISTS Fournisseur (
	numerofournisseur	CHAR(4)				NOT NULL,
	nomfournisseur		VARCHAR(30)			NOT NULL,
	adressefournisseur	VARCHAR(30) 		NOT NULL,
	PRIMARY KEY (numerofournisseur)
);

-- Table :  Planrepas
CREATE TABLE IF NOT EXISTS Planrepas (
	numeroplan			CHAR(4)				NOT NULL,
	categorie			VARCHAR(30)			NOT NULL,
	frequence			INTEGER				NOT NULL,
	nbrpersonnes		INTEGER				NOT NULL,
	prix				DECIMAL(5,2)		NOT NULL,
	numerofournisseur	CHAR(4)				NOT NULL,
	nbrcalorie			INTEGER,
	PRIMARY KEY (numeroplan),
	FOREIGN KEY (numerofournisseur) REFERENCES Fournisseur(numerofournisseur) ON DELETE CASCADE
);

-- Table : Famille
CREATE TABLE IF NOT EXISTS Famille (
	numeroplan	CHAR(4)				NOT NULL,
	PRIMARY KEY (numeroplan),
	FOREIGN KEY (numeroplan) REFERENCES Planrepas(numeroplan) ON DELETE CASCADE
);

-- Table : Vegetarien
CREATE TABLE IF NOT EXISTS Vegetarien (
	numeroplan			CHAR(4)				NOT NULL,
	typerepas			VARCHAR(30),	
	PRIMARY KEY (numeroplan),
	FOREIGN KEY (numeroplan) REFERENCES Planrepas(numeroplan) ON DELETE CASCADE
);

-- Table : Pescetarien
CREATE TABLE IF NOT EXISTS Pescetarien (
	numeroplan			CHAR(4)				NOT NULL,
	typepoisson			VARCHAR(30),	
	PRIMARY KEY (numeroplan),
	FOREIGN KEY (numeroplan) REFERENCES Planrepas(numeroplan) ON DELETE CASCADE
);

-- Table : Rapide
CREATE TABLE IF NOT EXISTS Rapide (
	numeroplan			CHAR(4)				NOT NULL,
	tempspreparation	INTEGER,	
	PRIMARY KEY (numeroplan),
	FOREIGN KEY (numeroplan) REFERENCES Famille(numeroplan) ON DELETE CASCADE
);

-- Table : Facile
CREATE TABLE IF NOT EXISTS Facile (
	numeroplan			CHAR(4)				NOT NULL,
	nbringredient		INTEGER,
	PRIMARY KEY (numeroplan),
	FOREIGN KEY (numeroplan) REFERENCES Famille(numeroplan) ON DELETE CASCADE
);

-- Table : Ingredient
CREATE TABLE IF NOT EXISTS Ingredient (
	numeroingredient	CHAR(4)				NOT NULL,
	nomingredient		VARCHAR(30),
	paysingredient		VARCHAR(30),		
	PRIMARY KEY (numeroingredient)
);

CREATE TABLE IF NOT EXISTS Kitrepas (
	numerokitrepas		CHAR(4)				NOT NULL,
	description			VARCHAR(30)			NOT NULL,
	numeroplan			CHAR(4)				NOT NULL,
	nbringredient		INTEGER,
	PRIMARY KEY (numerokitrepas),
	FOREIGN KEY (numeroplan) REFERENCES Planrepas(numeroplan) ON DELETE CASCADE
);

-- Table : Image
CREATE TABLE IF NOT EXISTS Image (
	numeroimage		INTEGER				NOT NULL,
	donnees			VARCHAR(30)		NOT NULL,
	numerokitrepas	VARCHAR(30)				NOT NULL,
	PRIMARY KEY (numeroimage),
	FOREIGN KEY (numerokitrepas) REFERENCES Kitrepas(numerokitrepas) ON DELETE CASCADE
); 

-- Table : Etape
CREATE TABLE IF NOT EXISTS Etape (
	numerokitrepas				CHAR(5)				NOT NULL,
	descriptionetape			VARCHAR(30),
	dureeetape					INTEGER,
	numerokitrepasetrecomposee	CHAR(4),
	PRIMARY KEY (numerokitrepas),
	FOREIGN KEY (numerokitrepas) REFERENCES Kitrepas(numerokitrepas) ON DELETE CASCADE
);

-- Table : Abonner
CREATE TABLE IF NOT EXISTS Abonner (
	numeroclient		CHAR(4)				NOT NULL,
	numeroplan			CHAR(4)				NOT NULL,
	dureee				INTEGER				NOT NULL,
	PRIMARY KEY (numeroclient, numeroplan),
	FOREIGN KEY (numeroclient) REFERENCES Client(numeroclient), 
	FOREIGN KEY (numeroplan)   REFERENCES Planrepas(numeroplan) ON DELETE CASCADE
);

-- Table : Contenir
CREATE TABLE IF NOT EXISTS Contenir (
	numerokitrepas		CHAR(4)				NOT NULL,
	numeroingredient	CHAR(4)				NOT NULL,
	PRIMARY KEY (numerokitrepas, numeroingredient),
	FOREIGN KEY (numerokitrepas) REFERENCES Kitrepas(numerokitrepas),
	FOREIGN KEY (numeroingredient)   REFERENCES Ingredient(numeroingredient) ON DELETE CASCADE
);