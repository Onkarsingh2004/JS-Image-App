const API="https://pixabay.com/api/"
const key="47973660-f496339dc81e730132efb16bd"
function getImage(e){
 e.preventDefault()
 $('#result').empty()
 let q = $("#query").val()
 let req_url=API+"?key="+key+"&q="+q;
 let txt=""
 $.getJSON(req_url,function (data){
    $.each(data.hits, function(i,hit){
        txt+=`<div class="col-md-3"><a href='${hit.pageURL}'target='_blank' class='text-decoration-none'><img src="${hit.largeImageURL}" class="w-100 border p-2 " height="200px" title="${hit.type}"/><p class="text-center small text-muted py-1">${hit.tags}</p></a></div>`
    })
    $('#result').append(txt)
 })
}


