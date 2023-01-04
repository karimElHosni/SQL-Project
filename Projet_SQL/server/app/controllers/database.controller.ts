import { Router } from "express";
import { inject, injectable } from "inversify";
import { DatabaseService } from "../services/database.service";
import Types from "../types";

@injectable()
export class DatabaseController {
  router : Router;
  public constructor(
    @inject(Types.DatabaseService) private readonly databaseService: DatabaseService
  ) {
    this.configureRouter();
  }
    
  private configureRouter(){
    this.router = Router();
    
    this.router.get('/plansrepas', async(req, res ) => {
      try{
        this.databaseService.getPlansRepas()
        .then((repas) => {
          res.status(200).send(repas.rows)});
      }
      catch (e) {
        res.status(404).send();
    }
  });
      
      
    this.router.get('/fournisseurs', async(req, res ) => {
      try{
        this.databaseService.getSuppliers()
        .then((suppliers) => {
          res.status(200).send(suppliers.rows)});
      }
      catch (e) {
        res.status(404).send();
    }
     
    });

    this.router.post('/insert', async(req, res) => {
      if (!req.body) {
        res.status(400).send();
        return;
    }
    try{
      this.databaseService.addPlanRepas(req.body.planRepas)

    }
    catch (e) {
      res.status(404).send();
  }
    });
    
    this.router.delete('/options', async(req, res ) => {
      if (!req.body) {
        res.status(400).send();
        return;
    }
    try{
      this.databaseService.deletePlanRepas(req.body.planNumber)

    }
    catch (e) {
      res.status(404).send();
  }
});

  this.router.patch('/insert', async(req, res) => {
    if (!req.body) {
      res.status(400).send();
      return;
  }
  try{
    this.databaseService.updatePlanrepas(req.body.planRepas)

  }
  catch (e) {
    res.status(404).send();
  }
  });
}

      

}
