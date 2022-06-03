    document.getElementById('username').value=""; // Username between apostrophe
    document.getElementById('password').value=""; // Password between apostrophe
    let s=document.getElementById('login').childNodes[10].textContent;
    s=s.substring(2,s.length-15);
    if (s.substring(0,10)==="Please add") {
        let x = s.substring(13,s.length-3);
        document.getElementById('valuepkg3').value=eval(x);   
    }
    else if(s.substring(0,15)==="Please subtract") {
        let x = s.substring(18,s.length-3);
        document.getElementById('valuepkg3').value=eval(x);
    }
    else if(s.substring(0,24)==="Please enter first value") {
        document.getElementById('valuepkg3').value=parseInt(s.substring(27,s.length-3).split(",")[0]);
    }
    else {
        document.getElementById('valuepkg3').value=parseInt(s.substring(28,s.length-3).split(",")[1]);
    }
    let btn = document.getElementById('loginbtn');
    btn.click();