import { Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Turn } from "./Turn";

@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column()
    email: string;

    @Column()
    birthdate: string;

    @Column()
    nDni: string;

    @Column()
    credentialsId: number;

    @OneToMany(()=> Turn, (turn => turn.users))
    turns:Turn[];

    // @OneToOne(() => Vehicle) // Definir la relación uno a uno con la entidad Vehicle
    // @JoinColumn()
    // vehicle: Vehicle; // Definir el tipo como Vehicle
}