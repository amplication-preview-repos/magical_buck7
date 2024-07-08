/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Operation as PrismaOperation,
  History as PrismaHistory,
} from "@prisma/client";

export class OperationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.OperationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.operation.count(args);
  }

  async operations(
    args: Prisma.OperationFindManyArgs
  ): Promise<PrismaOperation[]> {
    return this.prisma.operation.findMany(args);
  }
  async operation(
    args: Prisma.OperationFindUniqueArgs
  ): Promise<PrismaOperation | null> {
    return this.prisma.operation.findUnique(args);
  }
  async createOperation(
    args: Prisma.OperationCreateArgs
  ): Promise<PrismaOperation> {
    return this.prisma.operation.create(args);
  }
  async updateOperation(
    args: Prisma.OperationUpdateArgs
  ): Promise<PrismaOperation> {
    return this.prisma.operation.update(args);
  }
  async deleteOperation(
    args: Prisma.OperationDeleteArgs
  ): Promise<PrismaOperation> {
    return this.prisma.operation.delete(args);
  }

  async findHistories(
    parentId: string,
    args: Prisma.HistoryFindManyArgs
  ): Promise<PrismaHistory[]> {
    return this.prisma.operation
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .histories(args);
  }
}
