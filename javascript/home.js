let apiProductApi = new TempApi.ProductApi();import TempApi from '../src/index';document.getElementById('ihlfpa').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/home/','');
      if(productId === '/home' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ihlfpa")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/home' ;}}});};document.getElementById('ig55ql').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/home/','');
      if(productId === '/home' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ig55ql")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/home' ;}}});};document.getElementById('imgvrc').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/home/','');
      if(productId === '/home' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("imgvrc")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/home' ;}}});};document.getElementById('i2yfu6').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/home/','');
      if(productId === '/home' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i2yfu6")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/home' ;}}});};document.getElementById('itmg3').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/home/','');
      if(productId === '/home' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("itmg3")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/home' ;}}});};document.getElementById('ilhcn').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/home/','');
      if(productId === '/home' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ilhcn")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/home' ;}}});};document.getElementById('ik5nk').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/home/','');
      if(productId === '/home' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ik5nk")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/home' ;}}});};document.getElementById('i7ulh').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/home/','');
      if(productId === '/home' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i7ulh")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/home' ;}}});};window.onload = () => {apiProductApi.getAllproduct((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("ia1qd").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'pimage']");
if(insideSubDataElement !== null && data[data.length -i -1].pimage !== undefined){
  insideSubDataElement.src = data[data.length -i -1].pimage.data;
  insideSubDataElement.name = data[data.length -i -1].pimage.name;
}
else if(subDataElements[i].getAttribute('annotationname') === 'pimage' && data[data.length -i -1].pimage !== undefined){
  subDataElements[i].src = data[data.length -i -1].pimage.data;
  subDataElements[i].name = data[data.length -i -1].pimage.name;
}
 } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'ptitle']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].ptitle;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'ptitle'){
        subDataElements[i].textContent = data[data.length -i -1].ptitle;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};