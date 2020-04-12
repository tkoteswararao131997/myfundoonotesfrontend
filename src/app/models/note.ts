export class Note {
  public noteId: number;
  public title: String;
  public description: String;
  public trashed: boolean;
  public isPinned: boolean;
  public isArchived: boolean;
  public color: String;
  public reminder: String;
  public remainderTime: string;
  public createDate: String;
  public updateDate: string;
  public labels:Array<any>;
}