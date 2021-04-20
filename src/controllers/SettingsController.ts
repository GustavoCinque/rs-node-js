import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

class SettingsController {

    async create(request: Request, response: Response) {
        const repository = getCustomRepository(SettingsRepository);
        const { chat, username } = request.body;
        const setting = repository.create({ chat, username });
        await repository.save(setting);
        return response.json(setting);
    }

}

export { SettingsController };