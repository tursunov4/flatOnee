import React, { useEffect, useRef, useState } from "react";
import lupa from "../../assets/img/lupa.png";
import file from "../../assets/img/file2.svg";
import wife from "../../assets/img/wifeubos.svg";
import close2 from "../../assets/img/close2.svg";
import pdf from "../../assets/img/pdf.svg";
import planpentaj from "../../assets/img/planpentaj.svg";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import axios from "axios";
import http from "../../axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addkompleks = () => {
  const navigate = useNavigate()
 const [uslovi ,setUslovi] = useState('sale')
 const [name , setName] = useState("")
 const [sana ,setSana] = useState("")
 const [ploshad ,setPloshad] = useState("")
 const [ot ,setOt] = useState("")
 const [iz , setIz] = useState("")
 const [description ,setDescription] = useState('')
 const [kompleksimage , setKompleksimage] = useState([])
 const [infirastruktura ,setInfirastruktura] = useState([])
 const [lobbi , setLobbi] = useState([])
 const [videov ,setVideos] = useState([])
 const [dakument , setDakument] = useState([])
 const [money , setMoney] = useState("")
//  ----- infra struktura rayona --
 const [kids ,setKids] = useState(false)
 const [cafe ,setCafe] = useState(false)
 const [school , setSchool] = useState(false)
 const [restaran , setRestaran] = useState(false)
 const [park , setPark] = useState(false)
 const [magazin , setMagazin] = useState(false)
 const [hospital , setHospital] = useState(false)
 const [metro , setMetro] = useState(false)     
 const [plyaj, setPlayj] = useState(false)
 const [tz, setTz] = useState(false)
// --- infra proekta 
const [restaran2 ,setRestaran2] = useState(false)
const [park2 ,setPark2] = useState(false)
const [kids2 ,setKids2] = useState(false)
const [bassen2 ,setBassen2] = useState(false)
const [sport2 ,setSport2] = useState(false)
const [fitnes2 ,setFitnes2] = useState(false)
const [spacenter , setSpacenter] = useState(false)
const [catalogtypes ,setCatalogtypes] = useState([])
const [typenejvisot ,setTypenejvisot] = useState("")
const [typezastroy ,setTypeZastroy ] = useState("")
const [typeEtap , setTypeEtap] = useState("")
const [placmarkcord , setPlacmarkcord]= useState([])
const [addresname , setAddresname] = useState("")
const [yandexcenter ,setYandexcenter] = useState([55.684758, 37.738521])
const [country , setCountry] = useState("")
const [gorod , setGorod] = useState("")
// ------- hashtag 
const [hastagsData , setHashtagsData] = useState([])
const [searchList , setSearchList] = useState(false)
const [hashtagarraypost ,setHashtagarrayPost] = useState([])
const inputRef = useRef()
const inputRef2 = useRef()
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

 useEffect(()=>{
   getCatalogtypes()
 },[])

 const getCatalogtypes = ()=>{

  http.get("/catalog/types/").then((res)=>{
    setCatalogtypes(res.data)
  }).catch((err)=>{
    console.log(err)
  })
  
 }
 const handleKompleks =(e) =>{
  const form = new FormData()
  form.append("file", e.target.files[0])
   setKompleksimage([...kompleksimage , {file:e.target.files[0] , formData:form, id:kompleksimage.length , img: URL.createObjectURL(e.target.files[0])}])
 }
 const handleLobbi =(e) =>{
   const form = new FormData()
   form.append("file", e.target.files[0])
   setLobbi([...lobbi , {file:e.target.files[0] , id:lobbi.length , formData:form ,img: URL.createObjectURL(e.target.files[0])}])
 }
 const handleInfra =(e) =>{
  const form = new FormData()
  form.append("file", e.target.files[0])
   setInfirastruktura([...infirastruktura , {file:e.target.files[0] ,formData :form, id:infirastruktura.length , img: URL.createObjectURL(e.target.files[0])}])
 }
 const handleVideov =(e) =>{
   const form = new FormData()
   form.append("file", e.target.files[0])
   setVideos([...videov , {file:e.target.files[0] , formData :form ,id:videov.length , img: URL.createObjectURL(e.target.files[0])}])
 }
 const handleDakument =(e) =>{
  const form = new FormData()
  form.append("file", e.target.files[0])
  setDakument([...dakument , {file:e.target.files[0] , id:dakument.length ,formData :form  ,name: e.target.files[0].name}])
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

 let districtinfrastructure = [
  kids && "kids" ,
  cafe && "cafe" ,
  school && 'school' ,
  park && "park" ,
  magazin &&"magazin" ,
  hospital &&"hospital" ,
  metro &&"metro" ,
  plyaj &&"plyaj" ,
  tz &&"tz" ,
  restaran &&"restaran" 
]
let projectinfrastructure =[
 restaran2 && "restaran",
 park2 && "park",
 bassen2 && "bassen",
 sport2 && "sport",
 fitnes2 && "fitnes",
 spacenter && "spa",
 kids2 && "kids"
]
 const pushallData = (type) => {
  const lobb = new FormData()
  districtinfrastructure?.map((item , index)=>(
     item && lobb.append("districtinfrastructure" , item)    
  ))
  projectinfrastructure?.map((item , index)=>(
    item &&  lobb.append("projectinfrastructure" , item)
  ))
   videov.map((item , index)=>(  
    lobb.append("vid",item.file)
   ))
   dakument?.map((item , index) =>(
    lobb.append("documents",item.file)
   ))
  kompleksimage?.map((item, index)=>(
    lobb.append("complex", item.file)
   ))
   infirastruktura?.map((item,index)=>(
    lobb.append("infra", item.file)
   ))
    lobbi?.map((item, index)=>(
      lobb.append("lobbi", item.file)
     ))
     hashtagarraypost?.map((item, index)=>(
      lobb.append( "tags",item.id)
     ))

  lobb.append('owner' , 1)
  lobb.append('country' ,country-0  )
  lobb.append("city" , gorod)
  lobb.append('name' , name)
  lobb.append('property_type' , typeEtap)
  lobb.append('development_type' , typenejvisot)
  lobb.append('construction_phase' , typezastroy)
  lobb.append('deadline' , sana)
  lobb.append('square' , ploshad)
  lobb.append('lat' , placmarkcord[0])
  lobb.append('long' , placmarkcord[1]) 
  lobb.append('etaj1' , ot)
  lobb.append('etaj2' , iz)
  lobb.append('transaction_type' , uslovi)
  lobb.append('description' , description)
  lobb.append("price" , money)
  lobb.append("is_active", type)

  // axios.post(`http://164.92.172.190:8000/catalog/offices/` , lobb).then((res)=>{
  //    console.log(res.data)
  // })
    http.post('/catalog/offices/' ,lobb).then((res)=>{
      if(res.status ===201){
        toast.success(  `Добавить комплекс !!!`, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        navigate("/brokermain")
        window.location.reload()
      }
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
      toast.error( 'В введенных данных ошибка!!!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    })
 
};

const handleMapClick = (event) => {
  const clickedCoordinates = event.get("coords");
  setPlacmarkcord([...clickedCoordinates])
  axios.get( `https://geocode-maps.yandex.ru/1.x/?apikey=ca60917c-ba3d-485a-8711-39fad57f4fe2&format=json&geocode=${clickedCoordinates[1]},${clickedCoordinates[0]}`).then((res)=>{
    setAddresname(res.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.formatted)
    inputRef2.current.value =res.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.formatted
}).catch((err)=>{
  console.log(err)
})
};
const handleYandex = (e)=>{
  e.preventDefault()
  axios.get( `https://geocode-maps.yandex.ru/1.x/?apikey=a1790995-bbe5-41eb-8c22-35713a9dbbb8&format=json&geocode=${inputRef2.current.value}`).then((res)=>{
    setPlacmarkcord([res.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')[1]-0 , res.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')[0]-0])    
    setYandexcenter([res.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')[1]-0 , res.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')[0]-0])
  }).catch((err)=>{
    console.log(err)
    
  })
}

  return (
    <main>
      <ToastContainer/>
      <section className="addobject">
        <div className="container">
          <div className="addobject__wrapper">
            <div className="addobject__list1">
              <h2>Добавить комплекс</h2>
            </div>
            <div className="addobject__list2">
              <div className="addobject__nazvaniya">
                <h2>Название объекта</h2>
                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Введите название" />
              </div>
              <div className="addobject__nazvaniya">
                <h2>Введите страну</h2>
                  <select onChange={(e)=>setCountry(e.target.value)} name="" id="" >
                    {
                    
                       <option  selected hidden  value="Введите страну">Введите страну</option>
                    }
                    <option value="1">ОАЭ</option>
                    <option value="2">Индонезия</option>
                    <option value="3">Тайланд</option>
                    <option value="4">Турция</option>  
                  </select>
              </div>
              <div className="addobject__nazvaniya">
                <h2>Введите город</h2>
                  <select onChange={(e)=>setGorod(e.target.value)} name="" id="" >
                    {
                       <option  selected hidden  value="Введите страну">Введите  город</option>
                    }
                    {
                      country === "1" &&
                      <>
                      <option value={1}>Дубай</option>
                      <option value={2}>Абу-Даби</option>
                      </>
                    }
                    {
                      country === "2" &&
                      <>
                      <option value={1}>Бали</option>
                      </>
                    }
                    {
                      country === "3" &&
                      <>
                      <option value={1}>Паттайя</option>
                      <option value={2}>Пхукет</option>
                      <option value={3}>Самуи</option>
                      </>
                    }
                    {
                      country === "4" &&
                      <>
                      <option value={1}>Аланья</option>
                      <option value={2}>Бодрум</option>
                      <option value={3}>Стамбул</option>
                      <option value={4}>Фетхие</option>
                      </>
                    }
                  </select>
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
              <div className="addobeject__etaj">
                <h2>Тип недвижимости</h2>
                <div className="kached__btnwrap">
                  {
                    catalogtypes.construction_phase?.map((item , index)=>(
                      <button onClick={()=>setTypenejvisot(item.id)}  className={typenejvisot === item.id ? "addtip__btn1 addtip__btn1-active " :"addtip__btn1 "}>{item.name}</button>
                    ))
                  }               
                </div>
              </div>

              <div id="list2" className="addobeject__tipobj">
                <h2>Вид застройки</h2>
                <div className="tipobj__btnswrap">
                  {
                       catalogtypes.development_type?.map((item , index)=>(
                        <button onClick={()=>setTypeZastroy(item.id)}  className={typezastroy === item.id ? "addtip__btn1 addtip__btn1-active " :"addtip__btn1 "}>{item.name}</button>
                      ))
                  }                
                </div>
              </div>
              <div className="addobeject__etaj">
                <h2>Этап строительства</h2>
                <div className="kached__btnwrap">
                   {
                       catalogtypes.property_type?.map((item , index)=>(
                        <button onClick={()=>setTypeEtap(item.id)}  className={typeEtap === item.id ? "addtip__btn1 addtip__btn1-active " :"addtip__btn1 "}>{item.name}</button>
                      ))
                   }       

                </div>
              </div>
              <div className="addobeject__etaj">
                <h2>Срок сдачи</h2>
                <div className="kached__btnwrap">
                  <button onClick={()=>setSana("")} className={sana=== "" ? "addtip__btn1 addtip__btn1-active" :"addtip__btn1 "}>Сдан</button>
                  <button onClick={()=>setSana(2023)} className={sana=== 2023 ? "addtip__btn1 addtip__btn1-active" :"addtip__btn1 "} >2023</button>
                  <button onClick={()=>setSana(2024)} className={sana=== 2024 ? "addtip__btn1 addtip__btn1-active" :"addtip__btn1 "} >2024</button>
                  <button onClick={()=>setSana(2025)} className={sana=== 2025 ? "addtip__btn1 addtip__btn1-active" :"addtip__btn1 "}>2025</button>
                  <button onClick={()=>setSana(2026)} className={sana=== 2026 ? "addtip__btn1 addtip__btn1-active" :"addtip__btn1 "}>2026</button>
                  <button onClick={()=>setSana(2027)} className={sana=== 2027 ? "addtip__btn1 addtip__btn1-active" :"addtip__btn1 "}>2027</button>
                  <button onClick={()=>setSana(2028)} className={sana=== 2028 ? "addtip__btn1 addtip__btn1-active" :"addtip__btn1 "} >2028</button>
                </div>
              </div>
              <div className="addobeject__etaj">
                <h2>Условия сделки</h2>
                <div className="kached__btnwrap">
                  <button onClick={()=>setUslovi("sale")} className={uslovi === "sale" ? "addtip__btn1 addtip__btn1-active" :'addtip__btn1 '}>
                    Полная оплата
                  </button>
                  <button onClick={()=>setUslovi("rent")} className={uslovi === "rent" ? "addtip__btn1 addtip__btn1-active" :'addtip__btn1 '} >Рассрочка</button>
                  <button onClick={()=>setUslovi("sale_rent")} className={uslovi === "sale_rent" ? "addtip__btn1 addtip__btn1-active" :'addtip__btn1 '} >В пуле инвесторов</button>
                </div>
              </div>
              <div className="addobeject__ploshad">
                <h2>Площадь</h2>
                <label className="addobejectploshad__label" htmlFor="">
                  <input onChange={(e)=>setPloshad(e.target.value)} placeholder="120 м2" type="text" />
                </label>
              </div>
              <div className="addobject__etaj2">
                <h2>Этаж</h2>
                <div className="addobject__etajwrap2">
                  <span>от</span>
                  <label className="addobejectploshad__label" htmlFor="">
                    <input onChange={(e)=>setIz(e.target.value)} placeholder="36" type="text" />
                  </label>
                  <span>из</span>
                  <label className="addobejectploshad__label" htmlFor="">
                    <input onChange={(e)=>setOt(e.target.value)} placeholder="85" type="text" />
                  </label>
                </div>
              </div>
              <div className="addobeject__addmap">
                <h2>Объект на карте</h2>
                <div className="addmap__mapwrap">
                  <div className="mapouter">
                  <YMaps
                  
                    query={{ apikey: "ca60917c-ba3d-485a-8711-39fad57f4fe2" }}
                  >
                    <Map
                    width={`100%`}
                    height={"321px"}
                      defaultState={{
                        center: placmarkcord.length === 0 ? [55.684758, 37.738521]: placmarkcord ,
                        zoom: 5,
                      }}
                      onClick={handleMapClick}
                    >
                        <Placemark geometry={placmarkcord} />
                    </Map>
                  </YMaps>
                  </div>
                </div>
                <form onSubmit={(e)=>handleYandex(e)} action="">

                <label className="addmap__label" for="">
                  <img src={lupa} alt="lupa" />
                  <input 
                  ref={inputRef2}
                    type="text"
                    placeholder="1-й Красногвардейский пр-д ..."
                  />
                </label>
                </form>
              </div>
              <div id="list4" className="addobject__foto">
                <h2>Фото</h2>
                <label className="addobject__fotoinput">
                  <input onChange={(e)=>handleKompleks(e)} type="file" />
                  <img src={file} alt="file" />
                  <p>Фото комплекса</p>
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
                  <p>Фото инфраструктуры</p>
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
                  <p>Фото лобби</p>
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
              <div className="addobject__opisane">
                <h2>Описание</h2>
                <textarea onChange={(e)=>setDescription(e.target.value)} placeholder="Опишите ваш объект"></textarea>
              </div>
              <div id="list3" className="addobject__sena">
                <h2>Минимальная цена</h2>
                <input onChange={(e)=>setMoney(e.target.value)} type="text" placeholder="45 000 000 USD" />
             
              </div>
              <div className="addkom__chekk">
                <h2> Инфраструктура проекта </h2>
                <div className="addobject__chek">
                  <ul className="addobject__cheklist">
                    <li>
                      <label className="addobject__cheklistinput" for="">
                        <input defaultChecked={restaran2} onChange={()=>setRestaran2(!restaran2)} type="checkbox" />
                        <p>Ресторан</p>
                      </label>
                      <label className="addobject__cheklistinput" for="">
                        <input defaultChecked={spacenter} onChange={()=>setSpacenter(!spacenter)} type="checkbox" />
                        <p>Спа центр</p>
                      </label>
                      <label className="addobject__cheklistinput" for="">
                        <input defaultChecked={bassen2} onChange={()=>setBassen2(!bassen2)} type="checkbox" />
                        <p>Бассен</p>
                      </label>
                      <label className="addobject__cheklistinput" for="">
                        <input defaultChecked={fitnes2} onChange={()=>setFitnes2(!fitnes2)} type="checkbox" />
                        <p>Фитнес центр</p>
                      </label>
                    </li>
                  </ul>
                  <ul className="addobject__cheklist">
                    <li>
                      <label className="addobject__cheklistinput" for="">
                        <input defaultChecked={park2} onChange={()=>setPark2(!park2)} type="checkbox" />
                        <p>Парк</p>
                      </label>
                      <label className="addobject__cheklistinput" for="">
                        <input defaultChecked={kids2} onChange={()=>setKids2(!kids2)} type="checkbox" />
                        <p>Детская площадка</p>
                      </label>
                      <label className="addobject__cheklistinput" for="">
                        <input defaultChecked={sport2} onChange={()=>setSport2(!sport2)} type="checkbox" />
                        <p>Спорт площадка</p>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="addkom__chekk">
                <h2> Инфраструктура района </h2>
                <div className="addobject__chek">
                  <ul className="addobject__cheklist">
                    <li>
                      <label className="addobject__cheklistinput" for="">
                        <input defaultChecked={kids} onChange={()=>setKids(!kids)} type="checkbox" />
                        <p>Детсад</p>
                      </label>
                      <label className="addobject__cheklistinput" for="">
                        <input defaultChecked={school} onChange={()=>setSchool(!school)} type="checkbox" />
                        <p>Школа</p>
                      </label>
                      <label className="addobject__cheklistinput" for="">
                        <input defaultChecked={metro} onChange={()=>setMetro(!metro)} type="checkbox" />
                        <p>Метро 230м</p>
                      </label>
                      <label className="addobject__cheklistinput" for="">
                        <input defaultChecked={hospital} onChange={()=>setHospital(!hospital)} type="checkbox" />
                        <p>Больница</p>
                      </label>
                      <label className="addobject__cheklistinput" for="">
                        <input defaultChecked={tz} onChange={()=>setTz(!setTz)} type="checkbox" />
                        <p>ТЦ</p>
                      </label>
                    </li>
                  </ul>
                  <ul className="addobject__cheklist">
                    <li>
                      <label className="addobject__cheklistinput" for="">
                        <input defaultChecked={cafe} onChange={()=>setCafe(!cafe)} type="checkbox" />
                        <p>Кафе</p>
                      </label>
                      <label className="addobject__cheklistinput" for="">
                        <input defaultChecked={restaran} onChange={()=>setRestaran(!restaran)} type="checkbox" />
                        <p>Ресторан</p>
                      </label>
                      <label className="addobject__cheklistinput" for="">
                        <input defaultChecked={magazin} onChange={()=>setMagazin(!magazin)} type="checkbox" />
                        <p>Магазины</p>
                      </label>
                      <label className="addobject__cheklistinput" for="">
                        <input defaultChecked={park} onChange={()=>setPark(!park)} type="checkbox" />
                        <p>Парк</p>
                      </label>
                      <label className="addobject__cheklistinput" for="">
                        <input defaultChecked={plyaj} onChange={()=>setPlayj(!plyaj)} type="checkbox" />
                        <p>Пляж 240м</p>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="addobjectbtns">
                <button onClick={()=>pushallData(false)} className="addobjectbtns1">В черновик</button>
                <button onClick={()=>pushallData(true)} className="addobjectbtns1 addtip__btn1-active">
                  Добавить
                </button>
              </div>
              <h4 className="addobject__udalit">Удалить черновик</h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Addkompleks;
