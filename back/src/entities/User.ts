import { Column, Entity, OneToOne, OneToMany, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Turn } from "./Turn";
import { Credential } from "./Credential"; 

@Entity({name: "users"})

export class User {
    @PrimaryGeneratedColumn() id: number;

    @Column() name: string;

    @Column() email: string;

    @Column() birthdate: string;

    @Column() nDni: string;

    @OneToMany(() => Turn, turn => turn.user) turns: Turn[];

    @OneToOne(() => Credential)
    @JoinColumn() credential: Credential;
}
