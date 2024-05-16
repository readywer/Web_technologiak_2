import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { ComputerDTO } from "../../../models";
import { Purchase } from "./Purchase";

@Entity()
export class Computer implements ComputerDTO {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: string;

    @Column()
    cpu: string;

    @Column()
    cooler: string;

    @Column()
    mobo: string;

    @Column()
    ram: string;

    @Column()
    gpu: string;

    @Column()
    psu: string;

    @Column()
    case: string;

    @OneToMany(() => Purchase, (purchase) => purchase.computer)
    purchase: Purchase[];
}