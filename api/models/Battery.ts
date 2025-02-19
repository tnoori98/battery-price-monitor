import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BatteryPrice } from "./BatteryPrice";

@Entity({ name: 'batteries' })
export class Battery {
  [key: string]: string | number | BatteryPrice[] | undefined;

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  eanGtin!: string;

  @Column({ type: 'float' })
  weight!: number;

  @Column({ type: 'float' })
  length!: number;

  @Column({ type: 'float' })
  width!: number;

  @Column({ type: 'varchar', length: 255 })
  brand!: string;

  @Column({ type: 'varchar', length: 255 })
  model!: string;

  @Column({ type: 'varchar', length: 255 })
  size!: string;

  @Column({ type: 'varchar', length: 255 })
  chemistry!: string;

  @Column({ type: 'float' })
  voltage!: number;

  @Column({ type: 'float' })
  minCapacity!: number;

  @Column({ type: 'float' })
  typCapacity!: number;

  @Column({ type: 'varchar', length: 255 })
  version!: string;

  @Column({ type: 'float' })
  dischargeCurrent!: number;

  @Column({ type: 'varchar', length: 255 })
  circuitProtection!: string;

  @Column({ type: 'float' })
  height!: number;

  @Column({ type: 'float' })
  diameter!: number;

  @Column({ type: 'timestamp' })
  createdAt!: string;

  @Column({ type: 'timestamp' })
  updatedAt!: string;


  @OneToMany(() => BatteryPrice, batteryPrice => batteryPrice.battery)
  batteryPrices!: BatteryPrice[];
}
