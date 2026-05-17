import { Controller, Get, Post, Param, Body, Query, UseGuards } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Role } from '../generated/client/enums.js';

@Controller('inventory')
@UseGuards(JwtAuthGuard, RolesGuard)
export class InventoryController {
  constructor(private service: InventoryService) {}

  @Get()
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Get('product/:productId')
  findByProduct(@Param('productId') productId: string) {
    return this.service.findByProduct(productId);
  }

  @Post('incoming')
  @Roles(Role.ADMIN, Role.INVENTORY_MANAGER)
  incoming(@Body() body: any, @CurrentUser('id') userId: string) {
    return this.service.register({ ...body, type: 'INCOMING' as any, quantity: Math.abs(body.quantity), userId });
  }

  @Post('outgoing')
  @Roles(Role.ADMIN, Role.INVENTORY_MANAGER)
  outgoing(@Body() body: any, @CurrentUser('id') userId: string) {
    return this.service.register({ ...body, type: 'OUTGOING' as any, quantity: -Math.abs(body.quantity), userId });
  }

  @Post('adjust')
  @Roles(Role.ADMIN, Role.INVENTORY_MANAGER)
  adjust(@Body() body: any, @CurrentUser('id') userId: string) {
    return this.service.register({ ...body, type: 'ADJUSTMENT' as any, userId });
  }
}
