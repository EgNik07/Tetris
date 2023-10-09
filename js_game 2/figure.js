class figure{
    coo = [];
    type =null;
    x;
    y;
    fm = [];

    is_off = false;
    constructor(coo,type){
        console.log("new_figure")
        this.coo = coo;
        this.type=type;
        this.x = coo[1] / side;
        this.y = coo[0] / side;
        this.is_die=1;
        //console.log(this.type)

        if(type==0){
            this.fm =[
                [0,0,0,0],              
                [0,0,0,0],
                [0,1,1,0],
                [0,1,1,0],
            ]
        }
        else if(type==1){
            this.fm =[
                [0,0,0,0],
                [0,0,1,0],
                [0,0,1,0],
                [0,1,1,0],
            ]
        }
        else if(type==2){
            this.fm =[
                [0,0,0,0],
                [0,0,0,0],
                [0,0,1,1],
                [0,1,1,0],
            ]
        }
        else if(type==3){
            this.fm =[
                [0,0,0,0],
                [0,0,0,0],
                [0,0,1,0],
                [0,1,1,1],
            ]
        }
        else if(type==4){
            this.fm =[
                [0,0,0,0],
                [0,0,0,0],
                [0,1,1,0],
                [0,0,1,1],
            ]
        }
        else if(type==5){
            this.fm =[
                [0,0,0,0],
                [0,1,0,0],
                [0,1,0,0],
                [0,1,1,0],
            ]
        }
        else if(type==6){
            this.fm =[
                [0,0,1,0],
                [0,0,1,0],
                [0,0,1,0],
                [0,0,1,0],
            ]
        }
       
        
        for(let i =0; i<4;i++){
            for(let j =0; j<4;j++){
              
               if(this.fm[i][j]==0){
                   //console.log('sdf')
                matrix[coo[0]/side+i][coo[1]/side+j] = 0;
               }
               else{
                matrix[coo[0]/side+i][coo[1]/side+j] = 10;
               }
                
            }
        }

        // if(matrix[st_coo[0]/side+4][st_coo[1]/side+2] == 10 ){
        //     //console.log('sdfsdfdsfsdfsdf');
        //     this.is_die=2;
        // }
    }

   
}