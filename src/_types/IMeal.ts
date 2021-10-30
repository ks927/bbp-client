/**EXAMPLE
 * IMeal {
 * id: 1;
 * name: Green Goddess Bowl
 * tags: [] 
 * }
 */

export interface IMeal {
    id: number,
    name: string,
    description?: string,
    week_of: Date,
    ingredients: ICuisine[]
}

export interface ICuisine {
  ethnicity?: IEthincity[],
  protein?: IProtein[],
  carb?: ICarb[],
  fat?: string[]
}

// american, mexican, italian, etc.
export interface IEthincity {
  
}
// chicken, beef, pork, etc.
export interface IProtein {

}
// rice, noodles, pasta, farro, etc.
export interface ICarb {

}
// paleo, vegan, high protein, etc
export interface IDiet {

}
