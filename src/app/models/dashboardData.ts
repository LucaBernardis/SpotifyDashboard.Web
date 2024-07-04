import { Artist } from "./artist";
import { ListItem } from "./listItem";
import { Track } from "./track";
import { User } from "./user";

export interface DashboardData{
    user: User // User data
    topArtist: Artist // data about the user favourite artist
    artistTopTrack: Track // data ofbest song of the user fvaourite artist
    newReleases: ListItem[] // List of new Releases
    artistAlbums: ListItem[] // list of albums from the user's favourite artist
    userTopTracks: ListItem[] // user favourite tracks
    userPlaylists: ListItem[] // list of user playlists
    recommendedTracks: ListItem[] // list of recommended tracks
}