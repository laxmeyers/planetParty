import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class PlanetsService{
    async createPlanet(planetData) {
        const planet = await dbContext.Planets.create(planetData)
        return planet
    }

    async getPlanetsByGalaxyId(galaxyId) {
        const galaxyPlanets = await dbContext.Planets.find({ galaxyId })
        if (!galaxyId) {
            throw new BadRequest('Bad galaxy ID' + galaxyId)
        }
        return galaxyPlanets
    }

}

export const planetsService = new PlanetsService()