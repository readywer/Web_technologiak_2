import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { Computer } from './Computer';
import { ComputerDTO, PurchaseDTO } from "../../../models";
import { Customer } from "./Customer";

@Entity()
export class Purchase implements PurchaseDTO {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    deliverytype: string;

    @ManyToOne(() => Computer, (computer) => computer.purchase, { eager: true })
    computer: ComputerDTO;

    @ManyToOne(() => Customer, (customer) => customer.purchase, { eager: true })
    customer: ComputerDTO;
}