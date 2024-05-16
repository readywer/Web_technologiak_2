import { Controller } from "./base_controller";
import { AppDataSource } from "../data-source";
import { Customer } from "../entity/Customer";

export { Controller } from "./base_controller";
export class CustomerController extends Controller {
    repository = AppDataSource.getRepository(Customer);
}