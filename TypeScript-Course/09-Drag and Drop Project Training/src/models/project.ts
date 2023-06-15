// Project custom type
export enum ProjectStatus {
  Active,
  Finished,
}

export class project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}
