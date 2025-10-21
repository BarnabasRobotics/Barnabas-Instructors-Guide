function isTeacher() {
// Check browser support
    if (typeof(Storage) !== "undefined") {
    // Store  
    if(localStorage.getItem("user") == 'teacher')
    {
        localStorage.setItem("user", "student");
    } else {
        localStorage.setItem("user", "teacher");
    }
    teachChecked();
    // Retrieve
    console.log("Switch to " +localStorage.getItem("user"));
    } else {
    console.error("Sorry, your browser does not support Web Storage...");
    }
}

function codeMode() {
    // Check browser support
        if (typeof(Storage) !== "undefined") {
        // Store  
        if(localStorage.getItem("mode") == 'text')
        {
            localStorage.setItem("mode", "block");
        } else {
            localStorage.setItem("mode", "text");
        }
        textChecked();
        // Retrieve
        console.log("Code mode is " +localStorage.getItem("mode"));
        } else {
        console.error("Sorry, your browser does not support Web Storage...");
        }
    }

// this needs to go on page
document.addEventListener('DOMContentLoaded', function() {
    teachChecked();
}, false);

function teachChecked() {
    tTip = document.getElementById("tooltipteach");
    mssb = document.getElementById("modeshowsidebar");
    if(localStorage.getItem("user") == 'teacher')
    {
        document.getElementById("teacherCheck").checked = true;
        document.getElementById('teacher').style.display = '';
        tTip.innerHTML ="Teacher Mode";
        mssb.innerHTML ="Teacher Mode";
    }
    else {
        document.getElementById('teacher').style.display = 'none';
        tTip.innerHTML= "Student Mode";
        mssb.innerHTML= "Student Mode";
    }
}

function textChecked() {
    tTip = document.getElementById("tooltiptext");
    if(localStorage.getItem("mode") == 'text')
    {
        document.getElementById("textCheck").checked = true;
        for (let el of document.querySelectorAll('.block-based')) el.style.display = 'none';
        for (let el of document.querySelectorAll('.text-based')) el.style.display = '';
        tTip.innerHTML ="Text Mode";
    }
    else {
        for (let el of document.querySelectorAll('.block-based')) el.style.display = '';
        for (let el of document.querySelectorAll('.text-based')) el.style.display = 'none';
        tTip.innerHTML= "Block Mode";
    }
}