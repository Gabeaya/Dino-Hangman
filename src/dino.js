export default class Dino{
  static getDinos() {
    let promise = new Promise(function(resolve,reject){
      let request = new XMLHttpRequest();
      const url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=3&words=5` ;
      request.onload = funtion() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}