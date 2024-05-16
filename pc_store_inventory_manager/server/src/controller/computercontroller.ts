import { Controller } from "./base_controller";
import { AppDataSource } from "../data-source";
import { Computer } from "../entity/Computer";

export { Controller } from "./base_controller";
export class ComputerController extends Controller {
    repository = AppDataSource.getRepository(Computer);
}