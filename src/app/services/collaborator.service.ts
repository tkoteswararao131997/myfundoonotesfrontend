import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from 'http.service';

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

  addCollaborator(colabEmail:string,noteId : number)
  {
    console.log("service",colabEmail)
    return this.http.post(this.baseUrl+"addcollaborator/"+noteId,colabEmail,this.httpOptions);

  }
  getCollaborators(noteId : number)
  {
    return this.http.get(this.baseUrl+"getallcollaborators/"+noteId,this.httpOptions);
  }
  removeCollaborator(colabEmail:string,noteId : number)
  {
    return this.http.delete(this.baseUrl+"deletecollaborator/"+noteId+"/"+colabEmail,this.httpOptions);

  }


}
