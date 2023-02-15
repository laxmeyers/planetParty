import { galaxiesService } from "../services/GalaxiesService";
import { planetsService } from "../services/PlanetsService";
import BaseController from "../utils/BaseController";

export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxies')

        this.router
            .get('', this.getGalaxies)
            .get('/:galaxyId/planets', this.getPlanetsByGalaxyId)
            .post('', this.createGalaxy)
    }

    async getPlanetsByGalaxyId(req, res, next) {
        try {
            const galaxyId = req.params.galaxyId
            const galaxyPlanets = await planetsService.getPlanetsByGalaxyId(galaxyId)

            return res.send(galaxyPlanets)
        } catch (error) {
            next(error)
        }
    }
    async createGalaxy(req, res, next) {
        try {
            const galaxyData = req.body
            const galaxy = await galaxiesService.createGalaxy(galaxyData)
            return res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async getGalaxies(req, res, next) {
        try {
            const galaxies = await galaxiesService.getGalaxies()
            return res.send(galaxies)
        } catch (error) {
            next(error)
        }
    }
}