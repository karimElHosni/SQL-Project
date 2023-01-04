import { injectable } from "inversify";
import * as pg from "pg";
import "reflect-metadata";
import { PlansRepas } from './PlansRepas';


@injectable()
export class DatabaseService {
  public connectionConfig: pg.ConnectionConfig = {
    user: "sysadmin",
    database: "TP4_Livraison",
    password: "1234",
    port: 5432,          // Attention ! Peut aussi être 5433 pour certains utilisateurs
    host: "127.0.0.1",
    keepAlive: true
  };

  public pool: pg.Pool = new pg.Pool(this.connectionConfig);

  public async getPlansRepas() : Promise<pg.QueryResult> {
    const client = await this.pool.connect();
    const res = await client.query('SELECT * FROM Planrepas')
    client.release();
    return res;
  }

  public async getSuppliers() : Promise<pg.QueryResult> {
    const client = await this.pool.connect();
    const res = await client.query('SELECT * FROM Fournisseur')
    client.release();
    return res;
  }

  public async addPlanRepas(planRepas : PlansRepas) : Promise<pg.QueryResult> {
    const client = await this.pool.connect();

    const values : string[] = [
      planRepas.numeroplan,
      planRepas.categorie,
      planRepas.frequence.toString(),
      planRepas.nbrpersonnes.toString(),
      planRepas.prix.toString(),
      planRepas.numerofournisseur,
      planRepas.nbrcalorie.toString(), 
    ];

    const queryText : string = "INSERT INTO Planrepas VALUES ($1, $2, $3, $4, $5, $6, $7);";

    const res = await client.query(queryText, values);
    client.release();
    return res;
  }

  public async updatePlanrepas(planRepas : PlansRepas){
    const client = await this.pool.connect();

    const values : string[] = [
      planRepas.numeroplan,
      planRepas.categorie,
      planRepas.frequence.toString(),
      planRepas.nbrpersonnes.toString(),
      planRepas.prix.toString(),
      planRepas.numerofournisseur,
      planRepas.nbrcalorie.toString(), 
    ];

    const queryText : string = "UPDATE planrepas SET categorie=$2, frequence=$3, nbrpersonnes=$4, prix=$5, numerofournisseur=$6, nbrcalorie = $7 WHERE numeroplan=$1";

    const res = await client.query(queryText, values);
    client.release();
    return res;

  }


  public async deletePlanRepas(planNumber : string) : Promise<pg.QueryResult> {
    const client = await this.pool.connect();

    const value : string[] = [planNumber];
    const queryText : string = "DELETE FROM planrepas where numeroplan =$1;";

    const res = await client.query(queryText, value);
    client.release();
    return res;
  }

 
}
