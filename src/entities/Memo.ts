import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Memo {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  content: string;

  @Column({ default: false })
  checked: boolean;

  @CreateDateColumn({ type: "datetime", default: () => "CURRENT_TIMESTAMP(6)" })
  date: string;
}
