import { BaseEntity, PrimaryKey } from '@atom/common';
import { AutoMap } from '@automapper/classes';

export class GameLaunch extends BaseEntity {
  @AutoMap()
  deviceTypeId: PrimaryKey;

  @AutoMap()
  browserId: PrimaryKey;

  @AutoMap()
  providerName: string;

  @AutoMap()
  projectName: string;

  @AutoMap()
  currency: string;

  @AutoMap()
  playerId: number;

  @AutoMap()
  playerEmail: string;

  @AutoMap()
  gameId: string;

  @AutoMap()
  gameExternalId: string;

  @AutoMap()
  gameName: string;
}
