function myFunction() {
    document.getElementById("myForm").reset();
}

    var btn = document.getElementsByClassName("btn");
    var  banner = document.getElementById("ima");
    
    btn[0].onclick = function(){
        banner.src = "images/project1-min.png";
        animation();
        this.classList.add("active");
    }
    
    btn1[1].onclick = function(){
        banner.src = "images/project2-min.jpeg";
        animation();
        this.classList.add("active");
    }
    
    btn[2].onclick = function(){
        banner.src = "images/project6-min.jpeg";
        animation();
        this.classList.add("active");
    }
    
    
    
    function animation(){
        banner.classList.add("zoom");
        setTimeout(function(){
            banner.classList.remove("zoom");
        },500);
        
        for(b of btn){
            b.classList.remove("active");
        }
    }
