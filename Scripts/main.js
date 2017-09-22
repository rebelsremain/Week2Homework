var vid = document.getElementById("playing");

function showControls() { 
    vid.controls = true;
    vid.load();
} 

function disableControls() { 
    vid.controls = false;
    vid.load();
} 

function checkControls() { 
    alert(vid.controls);
} 

