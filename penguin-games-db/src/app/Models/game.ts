import { Observable } from "rxjs";
import { DataServiceService } from "../data-service.service";
import { Publisher } from "./publisher";

export class Game {

    constructor(
      private _id: number,
      private _name: string,
      private _distributionId: number,
      private _publisherId: number,
      private _releaseYear: string,
      private _genre:string[],
      private _averageRating:number,
      private _diskSpace:number
    ) { }

    public set id(id:number)
    {
        this._id=id;
    }

    public get id():number
    {
        return this._id;
    }
    
    public set name(name:string)
    {
        this._name=name;
    }

    public get name():string
    {
        return this._name;
    }

    public set distributionId(id:number)
    {
        this._distributionId=id;
    }

    public get distributionId():number
    {
        return this._distributionId;
    }

    public set publisherId(id:number)
    {
        this._publisherId=id;
    }

    public get publisherId():number
    {
        return this._publisherId;
    }

    public set releaseYear(year:string)
    {
        this._releaseYear=year;
    }

    public get releaseYear():string
    {
        return this._releaseYear;
    }

    public set genre(genre:string[])
    {
        this.genre = genre;
    }

    public get genre():string[]
    {
        return this._genre;
    }    

    public set averageRating(rating:number)
    {
        this._averageRating = rating;
    }

    public get averageRating():number
    {
        return this._averageRating;
    }

    public set diskSpace(size:number)
    {
        this._diskSpace = size;
    }  
    
    public get diskSpace():number
    {
       return  this._diskSpace;
    }    


  }