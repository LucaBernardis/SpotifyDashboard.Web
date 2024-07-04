export interface ListItem{

    // Common format model for all elements of a list in the dashboard
    // They all have the same structure, but with differents value 
    // so we can use e general model to represent them

    mainText: string
    secondText: string | null // nullable for albums
    numericText: string | null // needed for albums, nullable for everything else
    image: string
    spotifyUrl: string
}