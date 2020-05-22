import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.entity';

@Controller('order')
export class OrderController {

    constructor(private readonly order: OrderService) { }

    @Post()
    save(@Body() Order: Order) {
        return this.order.save(Order);
    }

    @Get()
    findAll() {
        return this.order.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) {
        return this.order.findById(id);
    }

    @Delete(":id")
    remove(@Param() id: number) {
        return this.remove(id);
    }

}