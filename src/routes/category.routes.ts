import { Router } from "express";
import { v4 as uuidV4 } from "uuid";
import { request, response } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";


const categoryRouter = Router();

const categoriesRepository = new CategoriesRepository();

categoryRouter.post('/', (req, res) => {
  const { name, description } = req.body;

  categoriesRepository.create({ name, description });

    return res.status(201).send();

});

categoryRouter.get('/', (req, res) => {
  const all = categoriesRepository.list();

  return res.json(all);
});


export  {categoryRouter};