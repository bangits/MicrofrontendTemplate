import { BetEntity } from '@/domain/entities';
import { PagedResult } from '@atom/common';

export class GetBetsResponseModel extends PagedResult<BetEntity> {}
