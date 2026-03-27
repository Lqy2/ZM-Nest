import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Body,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { RolesGuard } from './roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/role.enum';
import { LoggingInterceptor } from './logging.interceptor';

@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  @Roles(Role.ADMIN)
  findAll(): Cat[] {
    return this.catsService.findAll();
  }

  @Get('async')
  @UseInterceptors(new LoggingInterceptor())
  async findAllAsync() {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      },
      HttpStatus.FORBIDDEN,
    );
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
