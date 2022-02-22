import { PagedModel, PrimaryKey } from '@atom/common';
import { AutoMap } from '@automapper/classes';
import { BetStatusEnums } from '../enums';

export class GetBetsRequestModel extends PagedModel {
  @AutoMap()
  betDateFrom: string;

  @AutoMap()
  betDateTo: string;

  @AutoMap()
  gameName: string;

  @AutoMap()
  rgsTransactionId: string;

  @AutoMap()
  platTransactionId: string;

  @AutoMap()
  betExternalTransactionId: string;

  @AutoMap()
  playerId: PrimaryKey;

  @AutoMap()
  projectIds: PrimaryKey[];

  @AutoMap()
  providerIds: PrimaryKey[];

  @AutoMap()
  currencyIds: PrimaryKey[];

  @AutoMap()
  deviceTypesIds: PrimaryKey[];

  @AutoMap()
  browserIds: PrimaryKey[];

  @AutoMap()
  statusIds: BetStatusEnums[];
}
