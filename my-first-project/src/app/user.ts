export class User {
    //title : string ;
    sampleArray : string[] = ['react' , 'angular', 'Node.js'];
    addSkill(skill: string){
    this.sampleArray.push(skill)
  }
}