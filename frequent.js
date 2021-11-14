const arr1 =[3,5,6,3,5,7,9,3]
let mf = 1;
let m = 0;
let item;


for( var i=0;i<(arr1.length);i++)
{
    for(var j=i;j<(arr1.length);j++){
        if(arr1[i]==arr1[j])
        m++;
        if(mf<m){
        mf=m;
        item = arr1[i];
        }
    }
    m=0;
     
}