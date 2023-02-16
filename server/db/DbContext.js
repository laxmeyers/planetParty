import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { GalaxySchema } from '../models/Galaxy';
import { PlanetSchema } from '../models/Planet';
import { SpeciesSchema } from '../models/Species';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Galaxies = mongoose.model('Galaxy', GalaxySchema)
  Planets = mongoose.model('Planet', PlanetSchema)
  Species = mongoose.model('Specie', SpeciesSchema)
}

export const dbContext = new DbContext()
