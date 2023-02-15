import { dbContext } from "../db/DbContext"

class GalaxiesService{

    async createGalaxy(galaxyData) {
        const galaxy = await dbContext.Galaxies.create(galaxyData)
        return galaxy
    }

    async getGalaxies() {
        const galaxies = await dbContext.Galaxies.find()
        return galaxies
    }

}

export const galaxiesService = new GalaxiesService()