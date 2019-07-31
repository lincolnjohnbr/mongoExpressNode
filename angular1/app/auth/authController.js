(function () {
  angular.module('primeiraApp').controller('AuthCtrl',[
    '$location',
    'msgs',
    'auth',
    AuthController
  ])

  function AuthController($location, msgs, auth) {
    const vm = this

    vm.loginMode = true

    vm.changeMode = () => vm.loginMode = !vm.loginMode

    vm.login = () =>{
      // console.log(`Login....${vm.user.email}`);
      auth.login(vm.user, err => err ? msgs.addError(err): $location.path('/'))
    }

    vm.signup = () =>{
      // console.log(`Signup....${vm.user.email}`);
      auth.signup(vm.user, err => err ? msgs.addError(err): $location.path('/'))
    }

    vm.getUser = ()=> auth.getUser()

    vm.logout = () =>{
      auth.logout(()=> $location.path('/'))
    }
  }
})()
