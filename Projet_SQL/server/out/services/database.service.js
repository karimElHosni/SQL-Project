"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const inversify_1 = require("inversify");
const pg = require("pg");
require("reflect-metadata");
let DatabaseService = class DatabaseService {
    constructor() {
        this.connectionConfig = {
            user: "sysadmin",
            database: "TP4_Livraison",
            password: "1234",
            port: 5432,
            host: "127.0.0.1",
            keepAlive: true
        };
        this.pool = new pg.Pool(this.connectionConfig);
    }
    getPlansRepas() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            const res = yield client.query('SELECT * FROM Planrepas');
            client.release();
            return res;
        });
    }
    getSuppliers() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            const res = yield client.query('SELECT * FROM Fournisseur');
            client.release();
            return res;
        });
    }
    addPlanRepas(planRepas) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            const values = [
                planRepas.numeroplan,
                planRepas.categorie,
                planRepas.frequence.toString(),
                planRepas.nbrpersonnes.toString(),
                planRepas.prix.toString(),
                planRepas.numerofournisseur,
                planRepas.nbrcalorie.toString(),
            ];
            const queryText = "INSERT INTO Planrepas VALUES ($1, $2, $3, $4, $5, $6, $7);";
            const res = yield client.query(queryText, values);
            client.release();
            return res;
        });
    }
    updatePlanrepas(planRepas) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            const values = [
                planRepas.numeroplan,
                planRepas.categorie,
                planRepas.frequence.toString(),
                planRepas.nbrpersonnes.toString(),
                planRepas.prix.toString(),
                planRepas.numerofournisseur,
                planRepas.nbrcalorie.toString(),
            ];
            const queryText = "UPDATE planrepas SET categorie=$2, frequence=$3, nbrpersonnes=$4, prix=$5, numerofournisseur=$6, nbrcalorie = $7 WHERE numeroplan=$1";
            const res = yield client.query(queryText, values);
            client.release();
            return res;
        });
    }
    deletePlanRepas(planNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            const value = [planNumber];
            const queryText = "DELETE FROM planrepas where numeroplan =$1;";
            const res = yield client.query(queryText, value);
            client.release();
            return res;
        });
    }
};
DatabaseService = __decorate([
    (0, inversify_1.injectable)()
], DatabaseService);
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=database.service.js.map