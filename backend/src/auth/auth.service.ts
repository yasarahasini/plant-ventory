import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signup(dto: SignupDto) {
    const exists = await this.repo.findOne({
      where: { email: dto.email },
    });

    if (exists) throw new BadRequestException('Email already exists');

    const hashed = await bcrypt.hash(dto.password, 10);

    const user = this.repo.create({
      ...dto,
      password: hashed,
    });

    await this.repo.save(user);

    return { message: 'User created' };
  }

  async login(dto: LoginDto) {
    const user = await this.repo.findOne({
      where: { email: dto.email },
    });

    if (!user) throw new BadRequestException('Invalid credentials');

    const match = await bcrypt.compare(dto.password, user.password);

    if (!match) throw new BadRequestException('Invalid credentials');

    const token = this.jwtService.sign({ sub: user.id });

    return { token };
  }
}