// 
// const costumerBtn = document.getElementById("costumer-button");
// const  costumerTxt= document.getElementById("costumer-text");
const totalSize=10;
var saver=0;
var sizeLeft=totalSize-saver;
var precent = 100*(saver/totalSize);
document.getElementById("box2").style.width=precent.toString(10)+"%";
document.getElementById("totalSize").innerText = totalSize + " MB";
document.getElementById("sizeLeft").innerText=sizeLeft;
document.getElementById("saver").innerText=saver;


const addSaver =(s)=>{
    s/=Math.pow(1024,2);
    if(saver+s < totalSize){
        saver+= s; 
        document.getElementById("saver").innerText=f(saver);
        sizeLeft=totalSize-saver;
        document.getElementById("sizeLeft").innerText=f(sizeLeft);
        precent = 100*(saver/totalSize);
        document.getElementById("box2").style.width=precent.toString(10)+"%";
    }

}
const f=(x)=>{
    return Number.parseFloat(x).toFixed(2);
}
var realFileBtn = document.getElementById("upload");
    realFileBtn.addEventListener("change", ()=>{
        var fileSize=realFileBtn.files[0].size;
        const pattern = new RegExp('(\.(gif|jpe?g|jpg|png|JPE?G|))');
        if(pattern.test(realFileBtn.files[0])){
                addSaver(fileSize);
                 realFileBtn.files[0].name="";
         }
      else 
          alert("Wrong type of file!");
});