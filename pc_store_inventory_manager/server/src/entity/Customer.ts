import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { CustomerDTO } from "../../../models";
import { Purchase } from "./Purchase";

@Entity()
export class Customer implements CustomerDTO {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    email: string;

    @OneToMany(() => Purchase, (purchase) => purchase.customer)
    purchase: Purchase[];

}