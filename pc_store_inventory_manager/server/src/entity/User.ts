import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { UserDTO } from '../../../models';

@Entity()
export class User implements UserDTO{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ unique: true })
    email: string;

    @Column({ select: false })
    password: string;

}