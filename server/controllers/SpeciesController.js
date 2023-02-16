import { speciesService } from "../services/SpeciesService";
import BaseController from "../utils/BaseController";

export class SpeciesController extends BaseController{
    constructor() {
        super('api/species')

        this.router
            .get('', this.getSpecies)
        .post('', this.birthSpecies)
    }
    async birthSpecies(req, res, next) {
        try {
            const speciesData = req.body
            const specie = await speciesService.birthSpecies(speciesData)
            return res.send(specie)
        } catch (error) {
            next(error)
        }
    }
    async getSpecies(req, res, next) {
        try {
            const species = await speciesService.getSpecies()

            return res.send(species)
        } catch (error) {
            next(error)
        }
    }
}