
  
function talk() {
  var know = {
    "hello": ["Hello! How can I assist you today?", "Hello! How can I help you?"],
    "how are you": ["Good :)", "Fine! What about you?"],
    
    
  };

  var user = document.getElementById('userBox').value;
  document.getElementById('chatLog').innerHTML = user + "<br>";
  let text = user.toLowerCase();
  
  if (text in know) {
    var responses = know[text];
    var randomIndex = Math.floor(Math.random() * responses.length);
    var response = responses[randomIndex];
    document.getElementById('chatLog').innerHTML = response + "<br>";
  } 
  else 
  {
    document.getElementById('chatLog').innerHTML = "Sorry, I didn't understand.<br>";
  }
}


let load=document.getElementById("glass");
function myfunc1()
{
  load.classList.add("glass1")
}
