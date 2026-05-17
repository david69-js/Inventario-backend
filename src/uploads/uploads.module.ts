import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { UploadController } from './uploads.controller';

@Module({
  imports: [
    MulterModule.register({ dest: './uploads' }),
  ],
  controllers: [UploadController],
})
export class UploadsModule {}
