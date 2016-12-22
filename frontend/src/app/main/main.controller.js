export class MainController {
  constructor ($http) {
    'ngInject';
    this.$http = $http;
    this.getMessages();
  }

  getMessages(){
  	var vm = this;
  	this.$http.get('http://localhost:9000/api/messages').then(function(result){
  		vm.messages = result.data;
  	})
  }

  postMessage(){
	  this.$http.post('http://localhost:9000/api/messages', {msg: this.message });
  }

}
