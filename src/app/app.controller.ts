import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { Response } from "express";

@Controller()
export class AppController {

  @Get('health')
  getHealth(@Res() res: Response) {
    res.status(HttpStatus.OK).json([])
  }
}
