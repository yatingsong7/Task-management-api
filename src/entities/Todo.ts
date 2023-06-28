import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Task from "./Task";

@Entity()
export default class Todo {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  taskId: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  position: number;

  @Column({ default: false })
  checked: boolean;

  @ManyToOne(() => Task, (e) => e.todos, { onDelete: "CASCADE" })
  @JoinColumn({ name: "taskId", referencedColumnName: "id" })
  task: Task;
}
