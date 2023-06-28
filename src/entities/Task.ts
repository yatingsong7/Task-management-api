import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PRIORITY } from "../enums/priorityEnum";
import { STATUS } from "../enums/statusEnum";
import Note from "./Note";
import Todo from "./Todo";

@Entity()
export default class Task {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  title: string;

  @Column({ type: "longtext", nullable: true })
  description: string;

  @Column({ nullable: true })
  date: string;

  @Column()
  status: STATUS;

  @Column({ nullable: true })
  priority: PRIORITY;

  @Column({ default: false })
  cycle: boolean;

  @OneToMany(() => Todo, (e) => e.task, { onDelete: "CASCADE" })
  todos: Todo[];

  @OneToMany(() => Note, (e) => e.task, { onDelete: "CASCADE" })
  notes: Note[];
}
