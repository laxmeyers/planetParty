import { dbContext } from "../db/DbContext"

class SpeciesService {
    async birthSpecies(speciesData) {
        const specie = dbContext.Species.create(speciesData)
        return specie
    }
    async getSpecies() {
        const species = await dbContext.Species.find()
        return species
    }

}

export const speciesService = new SpeciesService()