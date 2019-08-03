/* Data tree v1.01
 * Developed by Jagadeesan S
 * jagadeesanjd11@gamil.com
 * +919715059096
 */
/*{name:'root',d:[{name:'tree1',d:[{name:'test',d:[{name:'t1',d:[]},{name:'t2',d:[]}]}]},{name:'tree2',d:[]}]} ref data*/
class DataTree{
    constructor(dom,data=null,warn=true){
        this.dom=dom;
        this.data=(data) ? data : {name:'root',d:[]};
        this.printHtml();
        this.warn=warn;
    }
    add(tar,clCtr){
        if(tar=='root'){
            let name=prompt("Enter name");
            if(name){
               //console.log(clr);
               clCtr.data.d.push({name:name,d:[]});
            }
        } else {
            let name=prompt("Enter name");
            if(name){
                //console.log(clCtr.data,tar.getAttribute('dtcon'));
                eval(`clCtr.data.${tar.getAttribute('dtcon')}.d.push({name:name,d:[]});`);
            }
        }
        clCtr.printHtml();
    }
    getTarget(str){
        if(str){
            let ar=str.split('.');
            let lastElm=ar.pop();
            lastElm=lastElm.replace('d[','');
            lastElm=lastElm.replace(']','');
            return { element:ar.join('.') ,target:lastElm };
        }
    }

    delete(tar,clCtr){
        if(tar=='root'){
            alert("you can't delete, edit only");
        } else {
            let tarInfo=clCtr.getTarget(tar.getAttribute('dtcon'));
            let run=(tarInfo.element) ? `clCtr.data.${tarInfo.element}.d.splice(${tarInfo.target},1);` : `clCtr.data.d.splice(${tarInfo.target},1);` ;
            if(clCtr.warn){
                let conf=confirm('Are sure to delete');
                if(conf) eval(run);
            }else{
                eval(run);
            }
            clCtr.printHtml();
        }
    }

    editName(tar,clCtr){
        let tarInfo=(tar=='root')? tar :tar.getAttribute('dtcon'),exName;
        eval(`exName=(tarInfo=='root') ? clCtr.data.name : clCtr.data.${tarInfo}.name;`);
        let name=prompt("Edit name",exName);
        if(name){
            eval(`((tarInfo=='root') ? clCtr.data.name=name : clCtr.data.${tarInfo}.name=name);`);
            clCtr.printHtml();
        }
    }

    getDesign(d,dname,con){
        let clCtr=this;
        var table=document.createElement('table');
        table.setAttribute('align','center');
        //table.setAttribute('border','1');
        var tr=document.createElement('tr');
        tr.setAttribute('valign','top');

        for(var i=0; i<d.length; i++){
           let td=document.createElement('td');
           td.setAttribute('align','center');
           let div=document.createElement('div');
           div.setAttribute('dtcon',`${con}[${i}]`);

           let name=document.createElement('h3');
           name.setAttribute('class','dt-name');
           name.innerHTML=`${d[i].name}<small>(${dname})</small>`;
           div.appendChild(name);

           let btna=document.createElement('button');
           btna.setAttribute('class','dt-btn-add');
           btna.innerText='+';
           let clAdd=this.add; 
           btna.addEventListener('click', function(){ clAdd(div,clCtr); });
           div.appendChild(btna);
            
           let btne=document.createElement('button');
           btne.setAttribute('class','dt-btn-edit');
           btne.innerText='e';
           let clEditName=this.editName; 
           btne.addEventListener('click', function(){ clEditName(div,clCtr); });
           div.appendChild(btne);
           
           let btnd=document.createElement('button');
           btnd.setAttribute('class','dt-btn-delete');
           btnd.innerText='-';
           let clDelete=this.delete; 
           btnd.addEventListener('click', function(){ clDelete(div,clCtr); }); 
           div.appendChild(btnd);

           td.appendChild(div);

           if(d[i].d.length>0){
            let tmd=d[i].d; let tmname=d[i].name; let tmcon=`${con}[${i}].d`;
            td.appendChild(document.createElement('br'));
            td.appendChild(this.getDesign(tmd,tmname,tmcon));
           }
           tr.appendChild(td);
        }
        table.appendChild(tr);
       return table;
    }
    printHtml(){
        let clCtr=this;
        let table=document.createElement('table');
        table.setAttribute('align','center');
        //table.setAttribute('border','1');
        let tr=document.createElement('tr');
        tr.setAttribute('valign','top');
        let td=document.createElement('td');
        td.setAttribute('align','center');
        let div=document.createElement('div');
        div.setAttribute('dtcon','root');

        let name=document.createElement('h3');
        name.setAttribute('class','dt-name');
        name.innerText=this.data.name;
        div.appendChild(name);

        let btna=document.createElement('button');
        btna.setAttribute('class','dt-btn-add');
        btna.innerText='+';
        let clAdd=this.add; 
        btna.addEventListener('click', function(){ clAdd('root',clCtr) });
        div.appendChild(btna);

        let btne=document.createElement('button');
        btne.setAttribute('class','dt-btn-edit');
        btne.innerText='e';
        let clEditName=this.editName; 
        btne.addEventListener('click', function(){ clEditName('root',clCtr); });
        div.appendChild(btne);

        let btnd=document.createElement('button');
        btnd.setAttribute('class','dt-btn-delete');
        btnd.innerText='-';
        let clDelete=this.delete; 
        btnd.addEventListener('click', function(){ clDelete('root',clCtr); }); 
        div.appendChild(btnd);

        td.appendChild(div);
    
        td.appendChild(this.getDesign(this.data.d,this.data.name,'d'));

        tr.appendChild(td);
        table.appendChild(tr);
        this.dom.innerHTML='';
        this.dom.appendChild(table);
    }

    render(){
        this.printHtml();
    }

    getData(){
        return this.data;
    }
}
