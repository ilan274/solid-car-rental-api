import { Category } from '../../entities/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../implementations/ICategoriesRepository';

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async findByName(name: string): Promise<Category | undefined> {
    const category = this.categories.find((cat) => cat.name === name);

    return category;
  }
  async list(): Promise<Category[]> {
    const allCategories = this.categories;

    return allCategories;
  }
  async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const category = new Category();

    Object.assign(category, { name, description });

    this.categories.push(category);

    return category;
  }
}

export { CategoriesRepositoryInMemory };
