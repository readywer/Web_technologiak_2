import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { DriverDTO } from "../../../models";
import { Travel } from "./Travel";

@Entity()
export class Driver implements DriverDTO {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    driversLicenseId: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    licenseExpireDate: string;

    @Column({ type: 'date' })
    dateOfBirth: string;

    @OneToMany(() => Travel, (travel) => travel.driver)
    travels: Travel[];
}
