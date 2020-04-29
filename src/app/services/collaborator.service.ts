import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from 'http.service';
import { Subject } from 'rxjs';
import {User} from 'src/app/models/user';
@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {
  baseUrl="http://localhost:8080/";
  constructor(private http : HttpClient,private httpuser : HttpService) { }
  public  httpOptions = {
    headers: new HttpHeaders({
      "content-type": "application/json",
      token: localStorage.getItem("token")
    })
  };

  private collab:User[]=[];
  private collabList=new Subject<User[]>();
  getCollabList()
  {
    return this.collabList.asObservable();
  }
  addCollaborator(colabEmail:string,noteId : number)
  {
    this.http.post(this.baseUrl+"addcollaborator/"+noteId,colabEmail,this.httpOptions).subscribe((result:any) => {
      this.collab.push(result.data);
      this.collabList.next([...this.collab]);
    });

  }
  getCollaborators(noteId : number)
  {
    return this.http.get(this.baseUrl+"getallcollaborators/"+noteId,this.httpOptions).subscribe((result:any)=>{
      this.collab=result["data"];
      this.collabList.next([...this.collab]);
      console.log("in service get",this.collab);
    });
  }
  removeCollaborator(colabEmail:string,noteId : number)
  {
    this.http.delete(this.baseUrl+"deletecollaborator/"+noteId+"/"+colabEmail,this.httpOptions).subscribe((result:any) => {
      this.collab=this.collab.filter(x => x.email != colabEmail);
      this.collabList.next([...this.collab]);
    });

  }
  getCollaboratorsList(noteId : number)
  {
    return this.http.get(this.baseUrl+"getallcollaborators/"+noteId,this.httpOptions);
  }
  getColab(colabEmail:string)
  {
    return this.http.get(this.baseUrl+"getcollaborator/"+colabEmail,this.httpOptions);
  }


}
