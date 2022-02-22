import { BaseEntity, PrimaryKey } from '@atom/common';
import { AutoMap } from '@automapper/classes';
import { GameLaunch } from '.';
import { BetStatusEnums } from '../models/enums';

export class BetEntity extends BaseEntity {
  @AutoMap()
  rgsTransactionId: string;

  @AutoMap()
  betAmount: number;

  @AutoMap()
  balanceBefore: number;

  @AutoMap()
  balanceAfter: number;

  @AutoMap()
  winAmount: number;

  @AutoMap()
  ggr: number;

  @AutoMap()
  roundId: PrimaryKey;

  @AutoMap()
  accountId: PrimaryKey;

  @AutoMap()
  gameLaunch: PrimaryKey;

  @AutoMap()
  betDate: string;

  @AutoMap()
  statusId: BetStatusEnums;

  @AutoMap()
  betTransactionDate: string;

  @AutoMap()
  resultTransactionDate: string;

  @AutoMap()
  betRGSTransactionId: string;

  @AutoMap()
  resultRGSTransactionId: string;

  @AutoMap()
  betPlatTransactionId: string;

  @AutoMap()
  resultPlatTransactionId: string;

  @AutoMap()
  betExternalTransactionId: string;

  @AutoMap()
  resultExternalTransactionId: string;

  @AutoMap()
  betBalanceBefore: number;

  @AutoMap()
  resultBalanceBefore: number;

  @AutoMap()
  betBalanceAfter: number;

  @AutoMap()
  resultBalanceAfter: number;

  @AutoMap()
  gameLaunchResponse: GameLaunch;
}
