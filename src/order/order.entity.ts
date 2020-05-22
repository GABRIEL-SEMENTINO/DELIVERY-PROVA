import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Customer } from "src/customer/customer.entity";
import { OrderItem } from "src/orderitem/orderitem.entity";


@Entity("order")
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'orderNumber', type: 'varchar', length: '8' })
    orderNumber: string;

    @Column({ name: 'orderDate', type: 'date' })
    orderDate: Date;

    @Column({ name: 'total', type: 'numeric', precision : 10, scale : 2 })
    total: number;

    @ManyToOne(type => Customer, customer => customer.order)
    customer: Customer;

    @OneToMany(type => OrderItem, orderitem => orderitem.order, { cascade: true, eager: true })
    orderItems: OrderItem[];
}