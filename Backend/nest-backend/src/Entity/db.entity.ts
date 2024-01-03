
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity('csv_data')
export class DbEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'jsonb', nullable: true })
  data: any; // You can use `user-defined` to represent JSONB data
}