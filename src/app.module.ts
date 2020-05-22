import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { Customer } from './customer/customer.entity';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { OrderController } from './order/order.controller';
import { ProductController } from './product/product.controller';
import { OrderService } from './order/order.service';
import { ProductService} from './product/product.service';
import { Order } from './order/order.entity';
import { OrderItem } from './orderitem/orderitem.entity';
import { Product } from './product/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'deliveryprova',
      entities: [
        Customer,
        Product,
        Order,
        OrderItem,
      
      ],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([
      Customer,
      Order,
      OrderItem,
      Product,

    ])
  ],
  controllers: [
    CustomerController,
    OrderController,
    ProductController,
  ],
  providers: [
    CustomerService,
    OrderService,
    ProductService,
  ],
})
export class AppModule {}