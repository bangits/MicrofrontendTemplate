import { Container } from 'inversify';

export class DiContainer {
  public diContainer: Container;

  public configure = () => {
    this.diContainer = new Container({
      defaultScope: 'Singleton'
    });

    // Services

    // Repositories

    // Use cases
  };
}

export const containerInstance = new DiContainer();
