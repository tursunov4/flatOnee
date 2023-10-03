import React, { useRef, useState } from "react";
import "./addobject.css";
import lupa from "../../assets/img/lupa.png";
import file from "../../assets/img/file2.svg";
import wife from "../../assets/img/wifeubos.svg";
import close2 from "../../assets/img/close2.svg";
import pdf from "../../assets/img/pdf.svg"
import planpentaj from "../../assets/img/planpentaj.svg"
import axios from "axios";
import http from "../../axios";
import { useToast } from "react-toastify";
import { useNavigate } from "react-router-dom";
let id = localStorage.getItem("id")
const Addobject = () => {
  const [name , setName] = useState('')
  const [sana ,setSana] = useState("")
  const [ploshad ,setPloshad] = useState("")
  const [ot ,setOt] = useState("")
  const [iz , setIz] = useState("")
  const [description ,setDescription] = useState('')
  const [planirovka , setPalnirovka]= useState("")
  const [planpentaj1 ,setPlanpentaj1] = useState("")
  const [money , setMoney] = useState("")
  const [postojniymoney , setPostojneymony] = useState("")
  const [dologomoney , setDologomoney] = useState("")
  const [planpentaj2 , setPlanpentaj2]  = useState("")
  const [nvm , setNvm] = useState("")
  const [irr , setIrr] = useState('')
  const [roc ,setRoc] = useState("")
  const [pi , setPi] = useState("")
  const [roi , setRoi] = useState("")
  const [otdelka , setOdelka] = useState("beton")
  const [comnat , setComnat] = useState(0)
  const [snazul , setSnazul] = useState(1)
  const navigate = useNavigate()
 
  // ------ hashtag uchun ----- 
 const [hastagsData , setHashtagsData] = useState([])
const [searchList , setSearchList] = useState(false)
const [hashtagarraypost ,setHashtagarrayPost] = useState([])
const inputRef = useRef()
const handleChange =(evt)=>{
  if(evt.target.value===""){
    setSearchList(false)
  }
  else{
    setSearchList(true)
    http.get(`/catalog/tags/?name=${evt.target.value}`).then((res)=>{
      setHashtagsData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
   }
  }
  const handleList =(evt)=>{
    inputRef.current.value = ""
    setHashtagarrayPost([...hashtagarraypost , {id:evt.target.id , name:evt.target.textContent}])
    setSearchList(false)
    console.log(evt.target.id)
  }
  const handleHashtagDelete =(id)=>{
    const indexToDelete = hashtagarraypost.findIndex(item => item.id === id);
    if (indexToDelete !== -1) {
      const newItems = [...hashtagarraypost];
      newItems.splice(indexToDelete, 1);
      setHashtagarrayPost(newItems); 
    }
  }
  const handleHashtagsubmit =(e)=>{
    e.preventDefault()
    http.post("/catalog/tags/", {
      name:inputRef.current.value
    }).then((res)=>{
      if(res.status === 201){
        inputRef.current.value = ""
        setHashtagarrayPost([...hashtagarraypost , {id:res.data.id , name:res.data.name}])
       }
    }).catch((err)=>{
      console.log(err)
    })      
  }
  //  ---- Image va Docmnet uchun ---
  const [kompleksimage , setKompleksimage] = useState([])
  const [infirastruktura ,setInfirastruktura] = useState([])
  const [lobbi , setLobbi] = useState([])
  const [videov ,setVideos] = useState([])
  const [photoplanirovka ,setPhotoplanirovka] = useState([])
  const [dakument , setDakument] = useState([])
  const handlePlanirovka =(e)=>{
    setPhotoplanirovka([...photoplanirovka , {file:e.target.files[0] , id:photoplanirovka.length , img: URL.createObjectURL(e.target.files[0])}])
  }
  const handleKompleks =(e) =>{
    setKompleksimage([...kompleksimage , {file:e.target.files[0] , id:kompleksimage.length , img: URL.createObjectURL(e.target.files[0])}])
  }
  const handleLobbi =(e) =>{
    setLobbi([...lobbi , {file:e.target.files[0] , id:lobbi.length , img: URL.createObjectURL(e.target.files[0])}])
  }
  const handleInfra =(e) =>{
    setInfirastruktura([...infirastruktura , {file:e.target.files[0] , id:infirastruktura.length , img: URL.createObjectURL(e.target.files[0])}])
  }
  const handleVideov =(e) =>{
    setVideos([...videov , {file:e.target.files[0] , id:videov.length , img: URL.createObjectURL(e.target.files[0])}])
  }
  const handleDakument =(e) =>{
   setDakument([...dakument , {file:e.target.files[0] , id:dakument.length , name: e.target.files[0].name}])
  }
  const handleDeletPlanirovka =(id)=>{
   const indexToDelete = photoplanirovka.findIndex(item => item.id === id);
   if (indexToDelete !== -1) {
     const newItems = [...photoplanirovka];
     newItems.splice(indexToDelete, 1);
     setPhotoplanirovka(newItems); 
   }
  } 
  const handleDeletDokument =(id)=>{
   const indexToDelete = dakument.findIndex(item => item.id === id);
   if (indexToDelete !== -1) {
     const newItems = [...dakument];
     newItems.splice(indexToDelete, 1);
     setDakument(newItems); 
   }
  } 
  const handleDeletKompleks =(id)=>{
   const indexToDelete = kompleksimage.findIndex(item => item.id === id);
   if (indexToDelete !== -1) {
     const newItems = [...kompleksimage];
     newItems.splice(indexToDelete, 1);
     setKompleksimage(newItems); 
   }
  } 
  const handleDeletLobbi =(id)=>{
   const indexToDelete = lobbi.findIndex(item => item.id === id);
   if (indexToDelete !== -1) {
     const newItems = [...lobbi];
     newItems.splice(indexToDelete, 1);
     setLobbi(newItems); 
   }
  } 
  const handleDeletInfra =(id)=>{
   const indexToDelete = infirastruktura.findIndex(item => item.id === id);
   if (indexToDelete !== -1) {
     const newItems = [...infirastruktura];
     newItems.splice(indexToDelete, 1);
     setInfirastruktura(newItems); 
   }
  } 
  const handleDeletVideov =(id)=>{
   const indexToDelete = videov.findIndex(item => item.id === id);
   if (indexToDelete !== -1) {
     const newItems = [...videov];
     newItems.splice(indexToDelete, 1);
     setVideos(newItems); 
   }
  } 

  const postAllData =(type) =>{
   const form  = new FormData()
 
  videov.map((item , index)=>(  
   form.append("vid",item.file)
  ))
  dakument?.map((item , index) =>(
   form.append("documents",item.file)
  ))
 kompleksimage?.map((item, index)=>(
   form.append("kuxni", item.file)
  ))
  infirastruktura?.map((item,index)=>(
   form.append("komnat", item.file)
  ))
  lobbi?.map((item, index)=>(
     form.append("spalni", item.file)
    ))
    photoplanirovka?.map((item , index)=>(
      form.append("planirovki" , item.file)
    ))
  hashtagarraypost?.map((item, index)=>(
     form.append( "tags",item.id)
    ))
    form.append("name" ,name)
    form.append("owner" ,id)
    form.append("otdelka" ,otdelka)
    form.append("planirovki_count" ,planirovka)
    form.append("comnat" ,comnat)
    form.append('sanzul' , snazul)
    form.append('square' , ploshad)
    form.append('etaj1' , ot)
    form.append('etaj2' , iz)
    form.append('description' , description)
    form.append("price" , money)
    form.append("is_active" , type)
    form.append("nvp" ,nvm)
    form.append("irr" , irr)
    form.append("roc" , roc)
    form.append("pi" , pi)
    form.append("roi" , roi)     
    form.append("perviy_vznos" , planpentaj1) 
    form.append("posutochno",postojniymoney )
    form.append("dolgo",dologomoney )
    form.append("sena" ,planpentaj2 )
    http.post("/catalog/complex/" , form).then((res)=>{
      console.log(res.data)
      if(res.status ===201){
        navigate("/brokermain")
        window.location.reload()
      }
      
    }).catch((err)=>{
      console.log(err)
    })
  }  

  return (
    <main>
      <section className="addobject">
        <div className="container">
          <div className="addobject__wrapper">
            <div className="addobject__list1">
              <h2>Добавить объект</h2>
            </div>
            <div className="addobject__list2">
              <div className="addobject-kopleks">
                <h2>Добавить в комплекс</h2>
                <form action="">
                  <label className="addmap__label" >
                    <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Dubai Marina" />
                  </label>
                </form>
              </div>
              <div className="addobject-addhash">
                <h2>Добавить хештеги</h2>
                <form onSubmit={(e)=>handleHashtagsubmit(e)} action="">
                  {
                      searchList && hastagsData.length>=1 ?
                  <ul className="addhashtag__tagslist">
                     {
                    
                      hastagsData?.map((item , index) =>(
                        <li onClick={handleList} key={item.id} id={item.id} >{item.name}</li>
                      ))
                     }
                  </ul> :""
                  }
                  <label className="addmap__label" for="">
                    <input onBlur={() => {setTimeout(()=>{setSearchList(false)},[150])}} ref={inputRef}  onChange={handleChange} type="text" placeholder="#вид на море" />
                     
                  </label>
                </form>
                <ul className="addobject-addhash__list">
                  {
                    hashtagarraypost?.map((item , index)=>(
                      <li key={index} className="addobject-addhash__list-item">
                      <p>{item.name}</p>
                      <img onClick={()=>handleHashtagDelete(item.id)} width={14} src={close2} alt="" />
                    </li>
                    ))
                  }               
           
                </ul>
              </div>
              <div className="addobeject__ploshad">
                <h2>Общая площадь</h2>
                <label className="addobejectploshad__label" htmlFor="">
                  <input onChange={(e)=>setPloshad(e.target.value)} placeholder="120 м2" type="text" />
                </label>
              </div>
              <div className="addobject__etaj2">
                <h2>Этаж</h2>
                <div className="addobject__etajwrap2">
                  <span>от</span>
                  <label className="addobejectploshad__label" htmlFor="">
                    <input onChange={(e)=>setOt(e.target.value)} placeholder="36" type="text" />
                  </label>
                  <span>из</span>
                  <label className="addobejectploshad__label" htmlFor="">
                    <input onChange={(e)=>setIz(e.target.value)} placeholder="85" type="text" />
                  </label>
                </div>
              </div>

              <div className="addobeject__tipobj">
                <h2>Отделка</h2>
                <div className="tipobj__btnswrap">
                  <button onClick={()=>setOdelka("beton")} className={otdelka==="beton" ? "addtip__btn1 addtip__btn1-active":'addtip__btn1'}>
                    Бетон
                  </button>
                  <button onClick={()=>setOdelka("bez_otdelki")} className={otdelka==="bez_otdelki" ? "addtip__btn1 addtip__btn1-active":'addtip__btn1'} >Без отделки</button>
                  <button onClick={()=>setOdelka("baytboks")} className={otdelka==="baytboks" ? "addtip__btn1 addtip__btn1-active":'addtip__btn1'}>Вайтбокс</button>
                  <button onClick={()=>setOdelka("chistovaya")} className={otdelka==="chistovaya" ? "addtip__btn1 addtip__btn1-active":'addtip__btn1'}>Чистовая</button>
                  <button onClick={()=>setOdelka("chistovaya_mebel")} className={otdelka==="chistovaya_mebel" ? "addtip__btn1 addtip__btn1-active":'addtip__btn1'}>Чистовая с мебелью</button>
                </div>
              </div>
              <div className="addobeject__addmap">
                <div id="list2" className="addobeject__kaches">
                  <h2>Количество комнат</h2>
                  <div className="kached__btnwrap">
                    <button  onClick={()=>setComnat(0)} className={comnat===0 ? "addtip__btn1 addtip__btn1-active":'addtip__btn1'}>
                      Студия
                    </button>
                    <button onClick={()=>setComnat(1)} className={comnat===1 ? "addtip__btn1 addtip__btn1-active":'addtip__btn1'}>1</button>
                    <button onClick={()=>setComnat(2)} className={comnat===2 ? "addtip__btn1 addtip__btn1-active":'addtip__btn1'}>2</button>
                    <button onClick={()=>setComnat(3)} className={comnat===3 ? "addtip__btn1 addtip__btn1-active":'addtip__btn1'}>3</button>
                    <button onClick={()=>setComnat(4)} className={comnat===4 ? "addtip__btn1 addtip__btn1-active":'addtip__btn1'}>4</button>
                    <button onClick={()=>setComnat(5)} className={comnat===5 ? "addtip__btn1 addtip__btn1-active":'addtip__btn1'}>5</button>
                    <button onClick={()=>setComnat(6)} className={comnat===6 ? "addtip__btn1 addtip__btn1-active":'addtip__btn1'}>6</button>
                  </div>
                </div>
                <div className="addobeject__etaj">
                  <h2>Количество санузлов</h2>
                  <div className="kached__btnwrap">
                  <button onClick={()=>setSnazul(1)} className={snazul===1 ? "addtip__btn1 addtip__btn1-active":'addtip__btn1'}>1</button>
                    <button onClick={()=>setSnazul(2)} className={snazul===2 ? "addtip__btn1 addtip__btn1-active":'addtip__btn1'}>2</button>
                    <button onClick={()=>setSnazul(3)} className={ snazul===3 ? "addtip__btn1 addtip__btn1-active":'addtip__btn1'}>3</button>
                    <button onClick={()=>setSnazul(4)} className={ snazul===4 ? "addtip__btn1 addtip__btn1-active":'addtip__btn1'}>4</button>
                    <button onClick={()=>setSnazul(5)} className={snazul===5 ? "addtip__btn1 addtip__btn1-active":'addtip__btn1'}>5</button>
                  </div>
                </div>
                <div className="addobject__ubostva">
                  <h2>Удобства</h2>
                  <ul className="object__ubostva-list">
                    <li className="object__ubostva-listitem">
                      <img src={wife} alt="" />
                      <p>Wi Fi: Есть</p>
                    </li>
                    <li className="object__ubostva-listitem">
                      <img src={wife} alt="" />
                      <p>Санузел: Совмещенный</p>
                    </li>
                    <li className="object__ubostva-listitem">
                      <img src={wife} alt="" />
                      <p>Лифт: 4</p>
                    </li>
                    <li className="object__ubostva-listitem">
                      <img src={wife} alt="" />
                      <p>Грузовой лифт: 4</p>
                    </li>
                    <li className="object__ubostva-listitem">
                      <img src={wife} alt="" />
                      <p>Территория: Закрытая</p>
                    </li>
                  </ul>
                </div>
                <div id="list5" className="addobject__opisane">
                  <h2>Описание</h2>
                  <textarea onChange={(e)=>setDescription(e.target.value)} placeholder="Опишите ваш объект"></textarea>
                </div>
                <div id="list4" className="addobject__foto">
                <h2>Фото</h2>
                <label className="addobject__fotoinput">
                  <input onChange={(e)=>handleKompleks(e)} type="file" />
                  <img src={file} alt="file" />
                  <p>Фото кухни</p>
                </label>
                <ul className="addobject__fotolist">
                  {
                    kompleksimage?.map((item ,index)=>(
                      <li  key={index} className="addobject__fotolistitem">
                        <img className="addobject__fotolistitemimg" src={item.img} alt="" />
                      <img onClick={()=>handleDeletKompleks(item.id)} className="addobject__fotolistitemimgclose" width="16" src={close2} alt="close" />
                    </li>
                    ))
                  }

                </ul>
              </div>
              <div id="list4" className="addobject__foto">
                <label className="addobject__fotoinput">
                  <input onChange={(e) => handleInfra(e)} type="file" />
                  <img src={file} alt="file" />
                  <p>Фото комнаты</p>
                </label>
                <ul className="addobject__fotolist">
                  {
                    infirastruktura?.map((item ,index)=>(
                      <li  key={index} className="addobject__fotolistitem">
                        <img className="addobject__fotolistitemimg" src={item.img} alt="" />
                      <img onClick={()=>handleDeletInfra(item.id)} className="addobject__fotolistitemimgclose" width="16" src={close2} alt="close" />
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div id="list4" className="addobject__foto">
                <label className="addobject__fotoinput">
                  <input onChange={(e) => handleLobbi(e)}  type="file" />
                  <img src={file} alt="file" />
                  <p>Фото спальни</p>
                </label>
                <ul className="addobject__fotolist">
                {
                    lobbi?.map((item ,index)=>(
                      <li  key={index} className="addobject__fotolistitem">
                        <img className="addobject__fotolistitemimg" src={item.img} alt="" />
                      <img onClick={()=>handleDeletLobbi(item.id)} className="addobject__fotolistitemimgclose" width="16" src={close2} alt="close" />
                    </li>
                    ))
                  }
                </ul>
              </div>
              <div id="list4" className="addobject__foto">
                <label className="addobject__fotoinput">
                  <input onChange={(e) => handleVideov(e)} type="file" />
                  <img  src={file} alt="file" />
                  <p>Фото видов</p>
                </label>
                <ul className="addobject__fotolist">
                  {
                    videov?.map((item ,index)=>(
                      <li  key={index} className="addobject__fotolistitem">
                        <img className="addobject__fotolistitemimg" src={item.img} alt="" />
                      <img onClick={()=>handleDeletVideov(item.id)} className="addobject__fotolistitemimgclose" width="16" src={close2} alt="close" />
                    </li>
                    ))
                  }
                </ul>
              </div>
                <div id="list4" className="addobject__foto">
                  <label className="addobject__fotoinput">
                    <input onChange={(e) => handlePlanirovka(e)}  type="file" />
                    <img src={file} alt="file" />
                    <p>Фото планировки</p>
                  </label>
                  <ul className="addobject__fotolist">
                  {
                    photoplanirovka?.map((item ,index)=>(
                      <li  key={index} className="addobject__fotolistitem">
                        <img className="addobject__fotolistitemimg" src={item.img} alt="" />
                      <img onClick={()=>handleDeletPlanirovka(item.id)} className="addobject__fotolistitemimgclose" width="16" src={close2} alt="close" />
                    </li>
                    ))
                  }
                  </ul>
                </div>
                <div className="addobeject__ploshad">
                <h2>Количество объектов в данной планировке</h2>
                <label className="addobejectploshad__label" >
                  <input onChange={(e)=>setPalnirovka(e.target.value)} placeholder="12" type="text" />
                </label>
                </div>
              <div className="addobject-addhash">
                <h2>Документация</h2>
                <label className="addobject__fotoinput">
                  <input onChange={(e)=>handleDakument(e)} type="file" />
                  <img  src={file} alt="file" />
                  <p>Добавить документ</p>
                </label>
                <ul className="addobject-addhash__list">
                  {
                    dakument?.map((item, index)=>(
                      <li key={index} className="addobject-addhash__list-item">
                      <p>
                        <img src={pdf} alt="" /> {item.name}
                      </p>
                      <img onClick={()=>handleDeletDokument(item.id)} width={14} src={close2} alt="" />
                    </li>
                    ))
                  }
                </ul>
              </div>
                <div className="addobject-planpentaj">
                  <h2>План платежей</h2>
                  <img   src={planpentaj} alt="" />
                  <div className="addobject-plan__list">
                    <p>Первый взнос</p>
                    <label className="addobejectploshad__label" >
                     <input onChange={(e)=>setPlanpentaj1(e.target.value)} placeholder="+ 8%" type="text" />
                   </label>
                  </div>
                </div>
                <div className="addobject__sena">
                  <h2>Минимальная цена</h2>
                  
                  <input onChange={(e)=>setMoney(e.target.value)} type="text" placeholder="45 000 000 USD" />

                </div>
                <div className="addobeject__ploshad">
                <h2>Прибыль с посуточной сдачи</h2>
                <label className="addobejectploshad__label2" >
                  <input onChange={(e)=>setPostojneymony(e.target.value)} placeholder="3 000 $/мес" type="text" />
                </label>
                </div>  
                <div className="addobeject__ploshad">
                <h2>Прибыль с долгосрочной сдачи</h2>
                <label className="addobejectploshad__label2" >
                  <input onChange={(e)=>setDologomoney(e.target.value)} placeholder="3 000 $/мес" type="text" />
                </label>
                </div>  
                <div className="addobject-planpentaj">
                  <h2>План платежей</h2>
                  <p className="planpentaj__p">Введите значения предположительного роста или снижения цены</p>
                  <img   src={planpentaj} alt="" />
                  <div className="addobject-plan__list">
                    <p>2024</p>
                    <label className="addobejectploshad__label" >
                     <input onChange={(e)=>setPlanpentaj2(e.target.value)} placeholder="+ 8%" type="text" />
                   </label>
                  </div>
                </div>
                <ul className="addobject__nvm">
                  <li>
                    <div>
                    <h3>NVP</h3>
                    <label className="addobejectploshad__label" >
                     <input onChange={(e)=>setNvm(e.target.value)} placeholder="120" type="text" />
                   </label>
                    </div>
                    <div>
                    <h3>IRR</h3>
                    <label className="addobejectploshad__label" >
                     <input onChange={(e)=>setIrr(e.target.value)} placeholder="120" type="text" />
                   </label>
                    </div>
                    <div>
                    <h3>ROC</h3>
                    <label className="addobejectploshad__label" >
                     <input onChange={(e)=>setRoc(e.target.value)} placeholder="120" type="text" />
                   </label>
                    </div>
                  </li>
                  <li>
                    <div>
                    <h3>PI</h3>
                    <label className="addobejectploshad__label" >
                     <input onChange={(e)=>setPi(e.target.value)} placeholder="120" type="text" />
                   </label>
                    </div>
                    <div>
                    <h3>ROI</h3>
                    <label className="addobejectploshad__label" >
                     <input onChange={(e)=>setRoi(e.target.value)} placeholder="120" type="text" />
                   </label>
                    </div>
                 
                  </li>
                 </ul>            
                <div className="addobjectbtns">
                  <button onClick={()=>postAllData(false)} className="addobjectbtns1">В черновик</button>
                  <button onClick={()=>postAllData(true)} className="addobjectbtns1 addtip__btn1-active">
                    Добавить
                  </button>
                </div>
                <h4 onClick={()=>window.location.reload()}  className="addobject__udalit">Удалить черновик</h4>
              </div>
            
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Addobject;
