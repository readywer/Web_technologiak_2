import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Car } from './Car';
import { Driver } from './Driver';
import { CarDTO, DriverDTO, TravelDTO, TravelType } from "../../../models";

@Entity()
export class Travel implements TravelDTO {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Driver, (driver) => driver.travels, { eager: true })
    driver: DriverDTO;

    @ManyToOne(() => Car, (car) => car.travels, { eager: true })
    car: CarDTO;

    @Column({ type: 'date' })
    date: string;

    @Column({
        type: 'enum',
        enum: TravelType,
        default: TravelType.Work
    })
    type: TravelType;

    @Column()
    startPlace: string;

    @Column()
    endPlace: string;

    @Column()
    traveledDistance: number;

    @Column()
    newMilage: number;

}