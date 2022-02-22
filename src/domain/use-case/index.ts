import { DI_CONSTANTS } from '@/di';
import { mapper } from '@/mapper';
import { inject, injectable } from 'inversify';
import { IAuthRepository } from '../boundaries';
import { GetBetsRequestModel, GetBetsResponseModel } from '../models';

@injectable()
export class AuthUseCase {
  @inject(DI_CONSTANTS.AuthRepository)
  private readonly authRepository: IAuthRepository;

  getBets = async (getBetsViewModel: {}): Promise<{}> => {
    const getBetsRequestModel = mapper.map(getBetsViewModel, GetBetsRequestModel, {});

    return mapper.map(getBetsRequestModel, {}, GetBetsResponseModel);
  };
}
