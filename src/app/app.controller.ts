import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { Response } from "express";
import { Public } from "../auth/guard/public.decorator";

@Controller()
export class AppController {

  @Public()
  @Get('health')
  getHealth(@Res() res: Response) {
    res.status(HttpStatus.OK).json([])
  }

}
