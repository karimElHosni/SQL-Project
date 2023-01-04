INSERT INTO Client VALUES ('c001', 'Bedard', 'Laurie', 'laurie.bedard@gmail.com', 'rue Crescent', 'Montreal', 'H7L 3P2');
INSERT INTO Client VALUES ('c002', 'ElHosni', 'Karim', 'karim.elhosni@gmail.com', 'avnenue Mont-Royal', 'Montreal', 'H7L 9W2');

INSERT INTO Telephone VALUES ('c001', '514-123-4567');
INSERT INTO Telephone VALUES ('c002', '514-987-6543');

INSERT INTO Fournisseur VALUES ('f001', 'Tremblay', 'boul St-Laurent, Montreal');
INSERT INTO Fournisseur VALUES ('f002', 'Cote', 'boul Henri-Bourrassa Montreal');

INSERT INTO Planrepas VALUES ('p001', 'Italien', 2, 2,39.99, 'f001',3000);
INSERT INTO Planrepas VALUES ('p002', 'Asiatique', 2, 2, 29.99, 'f002', 5000);
INSERT INTO Planrepas VALUES ('p003', 'Sante', 2, 2,34.99, 'f001', 2500);
INSERT INTO Planrepas VALUES ('p004', 'Francais', 2, 2, 59.99, 'f002', 4500);

INSERT INTO Famille VALUES ('p001');
INSERT INTO Famille VALUES ('p002');

INSERT INTO Vegetarien VALUES ('p002');
INSERT INTO Vegetarien VALUES ('p003');

INSERT INTO Pescetarien VALUES ('p003', 'morue');
INSERT INTO Pescetarien VALUES ('p004', 'saumon');

INSERT INTO Rapide VALUES ('p001', 30);
INSERT INTO Rapide VALUES ('p002', 20);

INSERT INTO Facile VALUES ('p001', 8);
INSERT INTO Facile VALUES ('p002', 11);

INSERT INTO Ingredient VALUES ('i001', 'tomate', 'Canada');
INSERT INTO Ingredient VALUES ('i002', 'fromage', 'France');

INSERT INTO Kitrepas VALUES ('k001', 'repas sante', 'p001', 10);
INSERT INTO Kitrepas VALUES ('k002', 'repas avec du poisson', 'p002', 12);

INSERT INTO Image VALUES (1, '101110100101', 'k001');
INSERT INTO Image VALUES (2, '101110111110', 'k002');

INSERT INTO Etape VALUES ('k001', 'bouillir eau', 5, 'k001');
INSERT INTO Etape VALUES ('k002', 'cuire le poisson', 30);

INSERT INTO Abonner VALUES ('c001', 'p001', 4);
INSERT INTO Abonner VALUES ('c002', 'p002', 3);

INSERT INTO Contenir VALUES ('k001', 'i001');
INSERT INTO Contenir VALUES ('k002', 'i002');