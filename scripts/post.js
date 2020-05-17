var newNode = "Node.js treats each JavaScript file as a seperate module. For instance, if you have a file containing some code and this file is name xyz.js, then this file is treated"+
    "as a module in Node, and you can say that you have created a module named xyz. Let's take an example to understand this better. You have a file named circle.js which consists of logic"+
    "for calculating the area and circumference of the circle of given radius. You can call circle.js file a module named circle. You might be wondering why there a need to have multiple modules"+
    "You could have just written all the code in a single module. Well, it is very important to write modular code. By modular, I mean to say that code should be loosely coupled and independent"+
    "Imagine there is a large application and you have all your code written in just one place, just one file. "+
    "written inside a module, node takes the entire code written in just one place,and encloses it in a function wrapper."+"Imagine that there are two modules-A and B. The code written inside the module a is enclosed within the function wrapper corressponding to the module A."+
    "Similar things happen with the code written inside the module B. Because the code pertaining to both the modules in enclosed within different functions, these functions will not be able to accessed the code of each other. (Remember each function in javascript has its own local scope?) This is the reason why module a cannot access the code written inside module B and vice-versa."+ 
    "The five parameters -- exports, require, module, _filename,_dirname are available inside each module in node."+
    "Though these parameters are global to the code within the module yet they are local to the module (because of the function wrapper as explained above)."+
    "These parameters provide valuable info related to module."+
    "There are three constructs define in this module- a constant variable PI, a function name calculateArea and another function name calculateCircumference."+
    "An important point to keep in mind is that all these construct are private to the circle module by deflault."+
    "It means you cannot use these constructs in any module unless explicitly specified.";

document.getElementById('para').innerHTML = newNode;

var c=0;
document.getElementById("box").onclick=function(){
    c++;
    document.getElementById("likeBtn").innerText="Liked";
    if(c==0){
        document.getElementById("liked").innerHTML="Be the first one to like this";
    }else if(c==1){
        document.getElementById("liked").innerHTML="1 person likes this!";        
    }else{
        document.getElementById("liked").innerHTML=c+' people have liked this!';
    }
}

function addComments(id){
    var valve = id.value + '<br>'
    var n = document.getElementById('comment');
    document.getElementById('extra').innerHTML+='<p id="newer">'+valve+'</p>';
    n.value = n.defaultValue;
}

var edit = false;

function editable(){
    if (edit) {
        document.getElementById('para').setAttribute('contenteditable', false);
        document.getElementById('head1').setAttribute('contenteditable', false);
		document.getElementById('edit').innerHTML = 'Edit '+'<i class="fas fa-edit"></i>';
	} else {
        document.getElementById('para').setAttribute('contenteditable', true);
        document.getElementById('head1').setAttribute('contenteditable', true);
		document.getElementById('edit').innerHTML = 'Save '+'<i class="far fa-save"></i>';
	}
	edit = !edit;
}