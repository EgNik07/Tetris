


function createMatrix(w,h){
    for (let i = 0; i <h/side; i++) {
        //console.log(i);
        matrix.push([]);
        cl_matrix.push([]);
        for (let j = 0; j <w/side; j++) {
            
            matrix[i].push(0);
            cl_matrix[i].push(0);
        
        }
        
    }
}
function newClmatrix(w,h){
    cl_matrix=[];
    for (let i = 0; i <h/side; i++) {
        //console.log(i);
       
        cl_matrix.push([]);
        for (let j = 0; j <w/side; j++) {
            
            if(matrix[i][j] == 1){
                cl_matrix[i].push(1);
            }
            else{
                cl_matrix[i].push(0);
            }
        }
        
    }
}
function matrixVer(){
    for(let i =0; i<matrix.length; i++){
        for(let j =0; j<matrix[0].length; j++){
            
            if(matrix[i][j] == 10){
                matrix[i][j]=1;
                cl_matrix[i][j]=1;
            }
           
        }
    }
}
function figure_transform(lr){
    let lrb = 0;
    if(lr == 1){
        lrb = 1;
    }
    else if (lr == 2){
        lrb = -1;
    }

    let is_way=true;
    for (let i = H/side-1; i >0; i--) {
        //console.log(i);
        is_way=true;
        for (let j = W/side-1; j >0; j--) {
            if(matrix[i][j] == 10){
                if(i+1 < H/side){
                    if(matrix[i+1][j+lrb]==1){
                        is_way =false;
                    }
                }
                
            }
        }
        if(!is_way){
            
            return 1;

        }
        for (let j = W/side-1; j > 0; j--) {   
            if(matrix[i][j] == 10){
                if(lr == 2){
                    if(j+lrb-1 < 0){
                        lrb = 0;
                    }
                }
            }   
          }
        for (let j = W/side-1; j >0; j--) {
            
          if(matrix[i][j] == 10){
            if(!(j+lrb <W/side)){
                lrb = 0;
            }
            if(lr == 2){
                if(!(j+lrb-1 >-1)){
                    console.log("2345352362345625346")
                    lrb = 0;
                }
            }
            
           
            
            if(i+1 < H/side && matrix[i+1][j+lrb] == 0){
                matrix[i][j]=0;
                
                cl_matrix[i+1][j+lrb]=10;
            }
            else{
                return 1;
            }
           
               
            
            
          }
          else if(matrix[i][j] == 1){
            if(i < H/side ){
                cl_matrix[i][j]=1;
            }
            
          }
        }
        
    }
    matrix = [...cl_matrix];
    newClmatrix(W,H);
    console.log(matrix);
    console.log(cl_matrix);
    //cl_matrix=[];
    return 0;
}