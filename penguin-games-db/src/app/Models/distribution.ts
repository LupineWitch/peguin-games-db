export class Distribution {

    constructor(
        private _id: number, 
        private _name: string, 
        private _version: string, 
        private _kernelVersion: string
    ) {}

    public set id(id: number)
    {
        this._id = id;
    }

    public set name(name: string)
    {
        this._name = name;
    }

    public set version(version: string)
    {
        this._version = version;
    }

    public get id():number
    {
        return this._id;
    }

    public get name():string
    {
        return this._name;
    }

    public get version():string
    {
        return this._version;
    }

    public get kernelVersion():string
    {
        return this._kernelVersion;
    }
}