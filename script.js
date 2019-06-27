var loginScreen = $(`.loginbox`);
var button = $(`.login`);

button.on('click',openScreen)

function openScreen(){
  event.preventDefault;
  loginScreen.append(`
    <form class="signinform">
      <input class="checkbox" type="checkbox">
      <h2>SIGN IN</h2>
      <label>Email*</label>
      <input type="email">

      <label>Password*</label>
      <input type="password">
      <a class="password" href="https://kodewithklossycamps19.slack.com/messages/GKLQ8HZKJ/convo/GKLQ8HZKJ-1561041323.000800/">Forgot Your Password?</a>
      <div>
        <button class="signin">Sign In</button>
        <a class="cancel" href="https://kodewithklossycamps19.slack.com/messages/GKLQ8HZKJ/convo/GKLQ8HZKJ-1561041323.000800/">Cancel</a>
      </div>
      <hr/>
      <button class="create"> <span class="text"> Create an Account </span> </button>
    </form>


`)
  
  
var checkbox = $('.checkbox');
checkbox.on("click", remove);

function remove(){

  event.target.parentNode.remove();
}


}

