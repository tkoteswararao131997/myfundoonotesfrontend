export class Note {
  public noteId: number;
  public title: string;
  public description: string;
  public trashed: boolean;
  public isPinned: boolean;
  public isArchived: boolean;
  public color: string;
  public reminde: string;
  public createDate: string;
  public updateDate: string;
  public labels:Array<any>;
}