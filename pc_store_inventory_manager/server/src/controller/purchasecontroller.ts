import { Controller } from "./base_controller";
import { AppDataSource } from "../data-source";
import { Purchase } from "../entity/Purchase";

export { Controller } from "./base_controller";
export class PurchaseController extends Controller {
    repository = AppDataSource.getRepository(Purchase);
}