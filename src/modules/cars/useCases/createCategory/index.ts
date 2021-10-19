import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const categoryController = new CreateCategoryController(createCategoryUseCase);

export { categoryController };