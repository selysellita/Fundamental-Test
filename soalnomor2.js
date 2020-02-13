class Data{
    constructor(username,password,role){
        this.username=username,
        this.password=password,
        this.role=role
    }
}

var data=[
    new Data('admin','admin','admin'),
    new Data('lyli',54321,'user'),
    new Data('lita',34512,'user')
]



var userlogin=[]
const login=()=>{
    var username=document.getElementById("username").value
    var password=document.getElementById("password").value
    if(username&&password){
        var cekdata=data.filter((val)=>val.username==username&&val.password==password)
        if (cekdata.length===1){
            userlogin=cekdata[0]
            document.getElementById('username').value=''
            document.getElementById('password').value=''                   
            if(userlogin.role==='admin'){
                var output=`<h2>${userlogin.username}</h2>
                            <br><br>
                            <button onclick="logout()">LOGOUT</button>
                            `
                document.getElementById('isi').innerHTML=output
                printkegiatan()
            }else if(userlogin.role==='user'){
                var output=`<h1>${userlogin.username}</h1>
                            <br><br>
                            <button onclick="logout()">LOGOUT</button>
                            `
                document.getElementById('isi').innerHTML=output
                printkegiatanuser()
            }
        }else{
            output=`<h2>Password Salah!!!</h2>`
            document.getElementById('isi').innerHTML=output            
        }
    }else{
        alert ('Username dan Password tidak boleh kosong!')
    }
}

const logout=()=>{
    userlogin=[]
    document.getElementById('isi').innerHTML=''
    document.getElementById('printkegiatan').innerHTML=''
    
}

class Kegiatan{
    constructor(aktivitas,hari,foto){
        this.aktivitas=aktivitas,
        this.hari=hari,
        this.foto=foto
    }
}

var kegiatan=[
    new Kegiatan('lari','senin','https://cdn.idntimes.com/content-images/post/20190717/rsz-jogging-9a44c9d37546ae15ad215d61f14bc2f3_600x400.jpg'),
    new Kegiatan('estafet','selasa','https://images.immediate.co.uk/production/volatile/sites/3/2019/12/dancing_on_ice_sr12_14-cea42e2-scaled.jpg?quality=45&resize=620,413'),
    
]

var indexdelete=-1         
var indexedit=-1
const printkegiatan=()=>{
    output=''
    kegiatan.forEach((val,index)=>{
        if(index==indexdelete){
            output+=`   <tr>
                            <td>${index+1}</td>
                            <td>${val.aktivitas}</td>
                            <td>${val.hari}</td>
                            <td><img src=${val.foto} alt=${index} height='100px'></td>
                            <td>
                                <button onclick="acceptDelete(${index})">Yes</button>
                                <button onclick="canceldelete()">No</button>
                            </td>
                        </tr>`
        }else if(index==indexedit){
            output+=`<tr>
                        <td>${index+1}</td>
                        <td><input type="text" id="editkegiatan" placeholder="nama kegiatan" value=${kegiatan[indexedit].aktivitas}></td>
                        <td>
                            <select id="edithari" >
                                <option hidden value="">pilih hari ..</option>
                                <option value="senin">senin</option>
                                <option value="selasa">selasa</option>
                                <option value="rabu">rabu</option>
                                <option value="kamis">kamis</option>
                                <option value="jumat">jumat</option>
                                <option value="sabtu">sabtu</option>
                                <option value="minggu">minggu</option>
                            </select>
                        </td>
                        <td><input type="text" id="editfoto" placeholder="Foto" value=${kegiatan[indexedit].foto}></td>
                        <td>
                            <button onclick="updatedata(${index})">Save</button>
                            <button onclick="cancelupdatedata()">Cancel</button>
                    </tr>`
        }
        else{
            output+=`   <tr>
                            <td>${index+1}</td>
                            <td>${val.aktivitas}</td>
                            <td>${val.hari}</td>
                            <td><img src=${val.foto} alt=${index} height='100px'></td>
                            <td>
                                <button onclick="editkegiatan(${index})">edit</button>
                                <button onclick="deletekegiatan(${index})">delete</button>
                            </td>
                        </tr>`
        }    
    })
    output+=`<tr>
                <td></td>
                <td><input type="text" id="aktivitas" placeholder="Nama Aktivitas"> </td>
                <td>
                    <select id="hari">
                        <option hidden value="">pilih hari ..</option>
                        <option value="senin">senin</option>
                        <option value="selasa">selasa</option>
                        <option value="rabu">rabu</option>
                        <option value="kamis">kamis</option>
                        <option value="jumat">jumat</option>
                        <option value="sabtu">sabtu</option>
                        <option value="minggu">minggu</option>
                    </select>
                </td>
                <td><input type="text" id="foto" placeholder="Foto"></td>
                <td>
                <button onclick="inputdataonClick()">input data</button>
                </td>
            </tr>`
    document.getElementById("printkegiatan").innerHTML=output
}

const editkegiatan=(indexed)=>{
    indexedit=indexed
    printkegiatan()
}

const updatedata=(indexed)=>{
    var newaktivitas=document.getElementById("editkegiatan").value
    var newhari=document.getElementById("edithari").value
    var newimage=document.getElementById("editfoto").value
    if(newaktivitas===''){
        newaktivitas=kegiatan[indexed].aktivitas
    }
    if(newhari===''){
        newhari=kegiatan[indexed].hari
    }
    if(newimage===''){
        newimage=kegiatan[indexed].foto
    }
    kegiatan.splice(indexed,1,new Kegiatan(newaktivitas,newhari,newimage))   
    indexedit=-1
    printkegiatan()
}

const cancelupdatedata=()=>{
    indexedit=-1
    printkegiatan()
}

const deletekegiatan=(indexdel)=>{
    indexdelete=indexdel
    printkegiatan()
}
const acceptDelete=(indexdel)=>{
    kegiatan.splice(indexdel,1)
    indexdelete=-1
    printkegiatan()

}
const canceldelete=()=>{
    indexdelete=-1
    printkegiatan()
}

const inputdataonClick=()=>{
    var aktivitas=document.getElementById('aktivitas').value
    var hari=document.getElementById('hari').value
    var foto=document.getElementById('foto').value
    if(aktivitas==''||hari==''||foto==''){
        alert('coba input semua dulu')
    }else{
        kegiatan.push(new Kegiatan(aktivitas,hari,foto))
        document.getElementById('aktivitas').value=''
        document.getElementById('hari').value=''
        document.getElementById('foto').value=''
        printkegiatan()
    }
}

const printkegiatanuser=()=>{
    output=''
    kegiatan.forEach((val,index)=>{
        output+=`   <tr>
                        <td>${index+1}</td>
                        <td>${val.aktivitas}</td>
                        <td>${val.hari}</td>
                        <td><img src=${val.foto} alt=${index} height='100px'></td>
                        <td></td>
                    </tr>`    
    }) 
    document.getElementById("printkegiatan").innerHTML=output
}

