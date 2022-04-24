export class CreateDto {
    constructor({name,done,description}) {
        this.name = name;
        this.done = done;
        this.description = description;
    }
    name: String;
    done: Boolean;
    description: String;
}