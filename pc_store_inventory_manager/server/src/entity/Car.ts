import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { CarDTO } from "../../../models";
import { Travel } from "./Travel";

@Entity()
export class Car implements CarDTO {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    licensePlate: string;

    @Column()
    type: string;

    @Column()
    fuelType: string;

    @Column()
    fuelConsuption: number;

    @Column()
    startingMileage: number;

    @OneToMany(() => Travel, (travel) => travel.car)
    travels: Travel[];
}