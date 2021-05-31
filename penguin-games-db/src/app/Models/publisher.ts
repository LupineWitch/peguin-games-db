export class Publisher {

    constructor(
        private _id: number, 
        private _name: string, 
        private _isIndie: boolean
    ) {}

    public set id(id: number)
    {
        this._id = id;
    }

    public set name(name: string)
    {
        this._name = name;
    }

    public set isIndie(isIndie: boolean)
    {
        this._isIndie = isIndie;
    }

    public get id():number
    {
        return this._id;
    }

    public get name():string
    {
        return this._name;
    }

    public get isIndie():boolean
    {
        return this._isIndie;
    }
}