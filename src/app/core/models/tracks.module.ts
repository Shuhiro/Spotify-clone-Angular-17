import { ArtistModel } from "./artist.module";

export interface TrackModel{
    name: string;
    album: string;
    cover: string;
    url:string;
    _id:string | number;
    artist?: ArtistModel;
}