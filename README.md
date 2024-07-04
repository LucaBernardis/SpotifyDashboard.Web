
# Spotify Dashboard 🎧

This application use the Spotify-Api to retreive data and manipulate them to get only the necessary datas to make the widgets work.


## Tech Stack

**Client:** Angular, Typescript

**Server:** C# minimal Api, MongoDb

#### You can find the back-end project here [SpotifyDashboard.Server](https://github.com/LucaBernardis/SpotifyDashboard.Server)

The widgets that this dashboard contains are the following:

- user-data
- top-artist
- user-top-songs
- top-artist-albums
- top-artist-top-track
- recommended-tracks
    - Limited api requestes due to limited parameters being passed
- new-releases
- user-playlists
- song-player ( to implement it you need spotify premium )

#### Authentication Method

On the [Spotify-Api Authorization Documentation](https://developer.spotify.com/documentation/web-api) you will find four different types of OAuth flow to follow. Choose wisely wich authorization flow to use because they all some differences between one another. This application uses the Implicit Grant Authorization flow, it may not be the best but it works for the calls i need.




## API Reference
The apis call's start from the services on the front-end project and reach the backend dedicated endpoints.

In this version of the projects all the data are retrieved with a single api call to the DashboardEndpoint.

#### Get widgets usefull data

```http
  GET /ServerApi/dashboard/data
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `access_token` | `string` | **Required**. Your access_token |

Without the access_token parameter you wont be able to make any api call to the api, so make sure the provided token is in the right format and it's not expired


#### Return an object with all the needed properties of the widgets.

___

#### Get configuration data
Also, to get the widget configuration u need to make a call to a mongo client.
```http
  GET /ServerApi/dashboard/config
```
The configuration data are used to check if the widget have the correct key-pair parameters in the configuration collection on the db, if the key-pair doesn't match the component will not be shown on the dashboard.

In my case, the key pair will be widgetName - type.

The widgetLabel till be used as a title for the widget.

The mongo Output look somethig like this:

`````
{
  "_id": {
    "$oid": "66850572b8956085e90cb0e3"
  },
  "widgetName": "top-ten-songs",
  "widgetProperty": "topTenSongs",
  "widgetLabel": "Favourite Tracks",
  "type": "list"
}
`````

#### Returns a list of WidgetComponents 



## Authors

- [@LucaBernardis](https://www.github.com/LucaBernardis)

