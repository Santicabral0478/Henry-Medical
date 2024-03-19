// credentials/Turn.ts
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({name: "turns"})
export class Turn {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column() 
    date: string;

    @Column() 
    time: string;

    @Column() 
    status: "active" | "cancelled";
    
    @Column() 
    details: string;
    
    @ManyToOne(() => User, (user) => user.turns) 
    user: User; 
}
