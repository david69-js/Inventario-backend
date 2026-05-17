import { Controller, Get, UseGuards } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('reports')
@UseGuards(JwtAuthGuard)
export class ReportsController {
  constructor(private service: ReportsService) {}

  @Get('dashboard')
  getDashboard() {
    return this.service.getDashboard();
  }

  @Get('monthly-movements')
  getMonthlyMovements() {
    return this.service.getMonthlyMovements();
  }

  @Get('low-stock')
  getLowStock() {
    return this.service.getLowStock();
  }

  @Get('product-analytics')
  getProductAnalytics() {
    return this.service.getProductAnalytics();
  }

  @Get('inventory-value')
  getInventoryValue() {
    return this.service.getInventoryValue();
  }
}
