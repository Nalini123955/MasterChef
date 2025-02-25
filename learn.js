// Keyboard Events
// document.addEventListener("keydown", (event) => {
//   console.log("keydown", event);
// });

// document.addEventListener("keyup", (event) => {
//     // console.log(`keyup: key: ${event.key}, code: ${event.code}`);
//     console.log(event);
//   });
  
//   // Task: Build a simple typing-test screen.
//    document.addEventListener("keyup", (event) => {
//     switch (event.key) {
//     case "ArrowUp":
//       alert("You have pressed ArrowUp Key");
//       break;
//     case "ArrowDown":
//      alert("You have pressed ArrowDown Key");
//      break;
//   case "ArrowLeft":
//       alert("You have pressed ArrowLeft Key");
//       break;
//      case "ArrowRight":
//        alert("You have pressed ArrowRight Key");
//        break;
//    default:
//      alert("Unknown key detected");
//       break;
//     }
//    });
//  const fullnameEl=document.querySelector('.fullname');
//  console.log(fullnameEl);
//const formEl=document.forms[0];//by index
 //const formel=document.forms.feedback;//by name
// // by name
// //get elements from form
// //form.elements
// //const fullnameEl=formel.elements[0];
//  const fullnameEl2=formel.elements.fullname;//by name
// const typeEl=formel.elements.type;
//  const emailEl=formel.elements.email;
// const descEl=formel.elements.description;
//  const termsEl=formel.elements.terms;
//  //const {fullname}=formel.elements;
 //object  destructing
//  const formel=document.forms.feedback;
//  const btnEl=document.querySelector("form button");

//  const handleSubmit=(event)=>{
//   event.preventDefault();

// //     //Backend API
//      const formData= new FormData(formel);
//      // 1.querystring:content-type:application/x-www-form-urlencoded
//      //fullname=Alea+Bishop&type=general-feedback&email=haqyvel%40mailinator.com&description=Non+enim+fugiat+ali
//     const data=[...formData.entries()];
//     const datastring=data
//     .map(([key,value])=>
//      `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// )
// .join('&');//ols way of doing

//      console.log(datastring);
//      //2.JSON
     
//      const jsondata=JSON.stringify(Object.fromEntries(formData))
//      //send to backend
     
//      console.log("JSON data",jsondata);
     
// //     console.log();
//  };

// //  const handleFormData=(e)=>{
// //   console.log("formdata fired");

// //   const formData=e.formData;
// //   //usefull methods
// //   formData.append("api-key","skhkhfkhkhkhfkhk")
  
// //   console.log([...formData.entries()]);
// //   console.log([...formData.values()]);
// //   console.log(formData.get("api-key"));
// // console.log([...formData.getAll("type")]);
// // console.log(formData.has("email"));
// // formData.set("hobbyies","learning new things");
// //   console.log([...formData.values()]); 
// //   formData.delete("terms");
// //   console.log([...formData.values()]);



// //  }
//  formel.addEventListener("submit",handleSubmit);
// //  formel.addEventListener("formdata",handleFormData);
  

// // ///

 


///JSON data
//1.how to use
// const formEl=document.forms.feedback;
// const nameEl=formEl.elements.fullname;

// console.log(nameEl);

// //1
// // .Attributes

// // const handlesubmit=(event)=>{
// // event.preventDefault();
// // //1.Attributes
// // nameEl.value="Anbu";
// // nameEl.readOnly=true;
// // nameEl.readOnly=true;
// // console.log(nameEl.min);

// //2. Events
// // nameEl.addEventListener("focus",()=>console.log("focused!"));
// // nameEl.addEventListener("blur",()=>console.log("blur"));
// // nameEl.addEventListener("input",(e)=>console.log(`you have entered:${e.target.value}`)
// // );
// // nameEl.addEventListener("change",(e)=>console.log(`changed value:${e.target.value}`));
// // //other events
// // nameEl.addEventListener("cut",()=>console.log('cut'));
// // nameEl.addEventListener("copy",()=>console.log('copy'));
// // nameEl.addEventListener("paste",()=>console.log('paste'));

// // //3.methods
// // nameEl.focus();
// // nameEl.blur();

// const handlesubmit=(event)=>{
//     event.preventDefault();
//    const formData=new FormData(formEl);
// }
// formEl.addEventListener("submit",handlesubmit);

// // const jsonst handlesubmit=(event);
// //onData=JSON.stringify(Object.fromEntries(formData));
// // //send to backend
// // //1.XMLHttpRequest
// //  let xhr=new XMLHttpRequest()
// // .open("GET","https://reqres.in/api/users/2",true);
// //  xhr.onload = function(){
// //     const obj  =JSON.parse(xhr.responseText)
// //     console.log(obj.data.first_name);
// //         document.getElementById("response").innerText = xhr.responseText;   
// //  };
// //   xhr.send();
// // //console.log("JSON BODY",jsonData);

// //2.fetch(),
  
// // fetch("https://reqres.in/api/users/2",{
// //      method:"GET",
// // //      headers:{
// // //           'content-type':'application/json'//mime

// // //      },
// // //      body:jsonData,
// // }                                                                                                                                                                                                                                                                                                                                                                                                                                  
// // ).then((res)=>res.json())
// // .then(data=>{
// //      document.getElementById("response").innerText=JSON.stringify

// //      console.log(data.data);
     
// // });


// formEl.addEventListener("submit",handlesubmit);



// ///Task :create a one-way binding when the name field changes,it should great 
// // like hellp,(enteredinput) in real time

//  //const nameGreetEl=document.querySelector("#namegreet")


//  nameEl.addEventListener("change",(event)=>{
//     document.querySelector(
//         "#namegreet").innerText=`hello${event.target.value},`;
//  });

//  ////HANDLING RADIO INPUT ELEMENTS................>>>>>>>>>>>>>>>


//const formEl=document.forms.feedback;
//const countryEl=formEl.elements.country;
//console.log(countryEl[2].value);//properties
//  console.log(countryEl.value);//get
 //countryEl.value="IND";//set
//console.log(countryEl[1]); 
//console.log(countryEl.options);
//console.log(countryEl);


// countryEl.selectedlIndex=3;
// //Events 
// countryEl.addEventListener("change",(event)=>{
//     console.log(event.target.options[event.target.selectedlIndex]);
//     console.log(event.target.options[event.target.selectedlIndex].value)//get value;
//     console.log(event.target.options[event.target.sekctedIndex].text);//get text
//   });
  //options
//   const optionEl=document.createElement("option")
//   optionEl.value="FAZ";
//   optionEl.text="south Africa";
//    const option2=new Option("Indonesia","IDN");
//   //adding option to select tag
//   countryEl.add(optionEl,2);
//   countryEl.add(option2,10);
// countryEl.remove(4);
// console.log(countryEl);
 const formEl=document.forms.feedback;

const handleSubmit=(event)=>{
  event.preventDefault();
  const formData=new FormData(formEl);
  alert("Thank you for your feedback");
}
formEl.addEventListener("Submit",handleSubmit);


 
//const hobbiesList= [...hobbiesEl]

 //console.log(termsEl);
//  hobbiesList.forEach((hob)=>{
//    console.log(hob.checkedlist);
   //return hob.checkedlist;

 //})
//  const categoryEl=document.forms.feedback.type;
//  // 
//  const inputcategory=document.querySelector("#input-categories")

//  const allcategories=[...categoryEl]

 //Get properties & methods
 
//  termsEl.indeterminate=true;
//  console.log(termsEl);
 
//console.log(termsEl);


// console.log(categoryEl);
// console.log(allcategories);


// //console.log(inputcategory);
//  //console.log(allcategories);

 
//  //1.Attributes
//   allcategories.forEach((category) =>{
//    console.log(category.value);
//    console.log(category.checked);
// })
//hobbiesEl[2].checked=true;termsEl.indeterminate=true;
//  console.log(termsEl);
 

// termsEl.indeterminate=true


  //2.Eventst

 
  // termsEl.addEventListener("change",(event)=>{
  //   console.log(event.target.checked);

  // })

//   inputcategory.addEventListener("change",(event)=>{
//    const checked=allcategories.find((category)=>{
//       return category.checked;
//    });
//    console.log('selected:',checked.value);
//    console.log('simple:',event.target.value);
// });
//  //3.Methods
//  allcategories[1].select()
//  allcategories[2].checked=true;
// termsEl.select();b
// termsEl.checked=true;


//  const handleSubmit=(event)=>{
//     event.preventDefault();
  
//     const formData = new FormData(formEl);
//  };
//  formEl.addEventListener("submit",handleSubmit);

 //Task: if contribution radio button clicked,then show and alert message of "thankyou for contributing."after 1
 //sec.
//  inputcategory.addEventListener("change",(event)=>{
//     const checked=allcategories.find((category)=>category.checked);
//     // const checked=event.target;
//     if(checked.value === "contribution"){
//       setTimeout(()=>{
//        alert("Thank you for contributing!")
//       },1000);
// }
