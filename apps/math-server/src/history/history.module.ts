import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HistoryModuleBase } from "./base/history.module.base";
import { HistoryService } from "./history.service";
import { HistoryController } from "./history.controller";
import { HistoryResolver } from "./history.resolver";

@Module({
  imports: [HistoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [HistoryController],
  providers: [HistoryService, HistoryResolver],
  exports: [HistoryService],
})
export class HistoryModule {}
