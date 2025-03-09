import { Router } from "express";


import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";


const categoryRouter = Router();

const categoriesRepository = new CategoriesRepository();

categoryRouter.post('/', (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

    
  createCategoryService.execute({ name, description });
    

});

categoryRouter.get('/', (req, res) => {
  const all = categoriesRepository.list();

  return res.json(all);
});


export  {categoryRouter};