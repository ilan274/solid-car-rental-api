import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);
    const { email, password } = request.body;

    const token = await authenticateUserUseCase.execute({
      email,
      password,
    });

    return response.status(201).json(token);
  }
}

export { AuthenticateUserController };
