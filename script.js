//your JS code here. If required.
let name = document.getElementById("name");
let pass = document.getElementById("pass");
let num = document.getElementById("num");
let check = document.getElementById("check");
let btn = document.getElementById("btn");
let form = document.getElementById("form");

check.addEventListener("click", () =>{
  if (check.checked) {
    btn.disabled = false
  } else {
    btn.disabled = true
  }
})
form.addEventListener("submit", (e) => {
  e.preventDefault();
	if(name.value != "" && pass.value != "" && num.value != ""){
		form.submit();
	}
});
