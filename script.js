
//using function to create dom element
function element(tag, classname, text) {
    let tags = document.createElement(tag);
    tags.classList = classname;
    tags.innerHTML = text;
    return tags;
  }
  //creating a base(container,heading,row)
  let container = element("div", "container", "");
  let h1 = element(
    "h1",
    "text-center tittle",
    "Emoji Details"
  );
  const row = element("div", "row", "");
  
  //fetch part
  const response = fetch("https://emojihub.yurace.pro/api/all");
  //it return promise
  response
    .then((data) => data.json())
    //if any error accor error message will throw
    .catch(error => {
        console.error(error)
        })
    .then((result) => {
      //console.log(result);
      for (let i = 0; i < result.length; i++) {
        const col = document.createElement("div");
        col.classList = "col-sm-6 col-md-4 col-lg-4 col-xl-4";
        col.innerHTML = `
   <div class="card h-100">
   <div class="card-header">
   <h5 class="card-title text-center">${result[i].name}</h5>
   </div>
   <div class="card-body">
   <div class="card-text emoji text-center">
   ${result[i].htmlCode}</div>
   <div class="card-text text-center">
   ${result[i].group}</div>
   <div class="card-text text-center">
   Category:${result[i].category}</div>
   </div>
   <div class="card-text text-center">
   unicode:${result[i].unicode}</div>
      </div>
  </div>`;
        row.append(col);
      }
      
    });
  
  container.append(row);
  document.body.append(h1, container);
  