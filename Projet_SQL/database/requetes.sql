-- 4.1
SELECT C.numeroclient, C.nomclient 
FROM Client C, Abonner A, Planrepas P
WHERE C.numeroclient = A.numeroclient
AND A.numeroplan = P.numeroplan
AND P.prix BETWEEN 20 AND 40

-- 4.2
SELECT P.numeroplan
FROM Planrepas P, Fournisseur F
WHERE P.numerofournisseur = F.numerofournisseur
AND F.nomfournisseur <>'QC Transport'

-- 4.3
SELECT F.numeroplan
FROM Planrepas P, Famille F
WHERE F.numeroplan = P.numeroplan
AND P.categorie = 'cetogène'

-- 4.4
SELECT COUNT(numerofournisseur)
FROM Fournisseur
WHERE nomfournisseur IS NULL

-- 4.5
SELECT F.nomfournisseur
	FROM Fournisseur F, Planrepas P
	WHERE F.numerofournisseur = P.numerofournisseur
	AND P.prix > 
 		(SELECT MAX(P2.prix) 
 		FROM Fournisseur F2, Planrepas P2
		WHERE F2.numerofournisseur = P2.numerofournisseur
		AND F2.nomfournisseur = 'AB Transport')
		GROUP BY F.nomfournisseur
	

-- 4.6
SELECT F.nomfournisseur, F.adressefournisseur, SUM(P.prix) AS Total
	FROM Fournisseur F, Planrepas P
	WHERE F.numerofournisseur = P.numerofournisseur
	GROUP BY P.prix, F.nomfournisseur, F.adressefournisseur
	ORDER BY P.prix DESC LIMIT 2

-- 4.7 
SELECT COUNT(K.numeroplan)
FROM Kitrepas K
WHERE K.numeroplan IN (SELECT P.numeroplan
			FROM Planrepas P
			EXCEPT
			SELECT DISTINCT A.numeroplan
			FROM Abonner A)


-- 4.8
SELECT C.numeroclient, C.nomclient, C.prenomclient
	FROM Client C, Fournisseur F
	WHERE LOWER(C.prenomclient) NOT LIKE ('a%')
	AND LOWER(C.prenomclient) NOT LIKE ('e%')
	AND LOWER(C.prenomclient) NOT LIKE ('i%')
	AND LOWER(C.prenomclient) NOT LIKE ('o%')
	AND LOWER(C.prenomclient) NOT LIKE ('u%')
	AND LOWER(C.prenomclient) NOT LIKE ('y%')
	AND C.villeclient = F.adressefournisseur
	AND F.nomfournisseur = 'Benjamin'
	ORDER BY C.nomclient ASC

-- 4.9
SELECT I.paysingredient, COUNT(I.nomingredient)
	FROM Ingredient I
	WHERE I.paysingredient NOT LIKE ('%g__')
	GROUP BY I.paysingredient
	ORDER BY I.paysingredient DESC

-- 4.10
CREATE VIEW V_fournisseur (V_categorie, V_adrresse, V_tot) AS
		SELECT P.categorie, F.adressefournisseur, SUM(P.prix)
		FROM Planrepas P, Fournisseur F
		WHERE P.numerofournisseur = F.numerofournisseur
		AND P.categorie LIKE ('%e%')
		AND P.categorie LIKE ('%o__')
		GROUP BY P.categorie, F.adressefournisseur
		HAVING SUM(P.prix) > 12500
		ORDER BY P.categorie ASC, SUM(P.prix) DESC
SELECT * FROM V_fournisseur
