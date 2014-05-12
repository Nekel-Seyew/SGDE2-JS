/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Vector2(x,y){
    if(x instanceof Vector2){
        this.x = x.x;
        this.y = x.y;
    }else{
        this.x = typeof x !== 'undefined' ? x : 0.0;
        this.y = typeof y !== 'undefined' ? y : 0.0;
    }
    
    this.dX = function(s){
      this.x += s;
    };
    this.dY = function(s){
        this.y += s;
    };
    
    this.clone = function(){
        var clo = new Vector2(this.x,this.y);
        return clo;
    };
    
    this.length = function(){
        return this.lengthMaker(this.x, this.y);
    };
    
    this.distance = function(x){
        return this.lengthMaker(this.x - x.x, this.y - x.y);
    }
    
    this.lengthMaker = function(x,y){
        return Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
    };
    
}

function Circle(c, radius){
    //Copy Constructor
    if(c instanceof Circle){
        this.center = c.center;
        this.radius = c.radius;
    }else{//Everything else constructor
        this.center = typeof center !== 'undefined'? center : new Vector2();
        this.radius = typeof radius !== 'undefined' ? radius : 0;
    }
    
    
}

function KeyBoard(){
    
}


function webGLStart(){
    //var canvas = document.getElementById("mahCanvas");
    
    var myVector = new Vector2(2,2);
    var newVector = new Vector2(myVector);
    
    console.log(myVector);
    console.log(newVector);
    
    myVector.dX(2);
    console.log(newVector);
    console.log(typeof myVector);
}

