console.log("start")

let st_coo = [50,200];
let side = 25;

let matrix = [];
let cl_matrix = [];
let num = 0;
let new_num= 0;

let new_figure=true;

let fg;

let H = 800;
let W = 500;

let lr = 0;




createMatrix(W,H);
console.log(matrix);
console.log(cl_matrix);
//finctions 
function rand(max) {
    return Math.floor(Math.random() * max);
  }
//finctions 


let canvas = document.getElementById("canvas");

let score = document.getElementById("score");

let img_fig = document.getElementById("img_fig");

function setup() {
   
    createCanvas(500, 800,canvas);
  }

let g=0;
let score_count = -10;
num = rand(6);
function draw() {
    if(g >= 10){

        //console.log("fps:"+g)
        background(210,210,210);

        

        if(new_figure){
            
            if(matrix[5][9] == 1 ){
                console.log("sfgsgsadfgsdfgsdfgsdgsdfg")
                matrix = [];
                cl_matrix = [];
                createMatrix(W,H);
            }
            else{
                num = new_num;
                new_num = rand(6);
                

                fg = new figure(st_coo,num);
                score_count +=10;
                score.innerHTML = score_count;

               
                
                img_fig.src = "img/figure-"+new_num+".png";
                
               
                //console.log(matrix);
                new_figure= false;
            
            }
            
            
            //console.log(fg.x+ " / " +fg.y);
        }
        else{
            let res = figure_transform(lr);
            lr = 0;
            if(res == 0){
                new_figure = false;
                
                //console.log(res);
            }
            else if(res == 1){
                
                console.log("die");
                matrixVer();
               
                new_figure= true;
                

            }
            
        }
        
        
        g=0;
    }
    else{
        g++;
    }
    for(let i =0; i<matrix.length; i++){
        for(let j =0; j<matrix[0].length; j++){
            //console.log("dsfgsg");
            if(matrix[i][j] == 0){
                fill(210,210,210)
                if(i == 0 || j ==0){
                    fill(110,210,210)
                }
                rect(side*j,side*i,side,side);
            }
            else if(matrix[i][j] == 2){
                fill(50,150,100)
                rect(side*j,side*i,side,side);
            }
            else{
            
                fill(100,100,100)
                rect(side*j,side*i,side,side);
            }
            
        }
    }
    

}
