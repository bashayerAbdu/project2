/*
  Please add all Javascript code to this file.

*/

function first() {
  $.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=29a810abcc224b3eadc6b110c4174147",
    function (res) {
      console.log(res.articles);
      res.articles.forEach(element => {
        // console.log(element.title)
        $("#main").append(`<article class="article" data-title="${element.title}" data-content="${element.content}">
        <section class="featuredImage">
          <img src="images/article_placeholder_1.jpg" alt="" />
        </section>
        <section class="articleContent">
            <a href="#"><h3>${element.title}</h3></a>
            <h6>Lifestyle</h6>
        </section>
        <section class="impressions">
        ${element.source.name}
        </section>
        <div class="clearfix"></div>
      </article>`
      )
      })
    })
    
     //create aritcle 
      //   //  $(".art1").append(`<li>${element.title}</li>`);
      // for (let i = 0; i < 4; i++) {
      //   $(".art" + i).append(`<li>${res.articles[i].title}</li>`)
      //   if (res.articles[i].title)
      // $(".articleContent").on("click", function () {
      //   $(".container" ).append(`<p>${res.articles.content}</p>`);
      // })
    

$("#popUp").hide();


$("#main").on("click", ".article",function () {
 $("#popUp").removeClass("hidden");
 $("#popUp").show()
 $("#popUp.loader .container").css("display", "block")
 $(".tit").text($(this).attr("data-title"));
 $(".cont").text($(this).attr("data-content"));
// alert("ok")
// alert($(this))
 console.log($(this).attr("data-content"));
//$(".loader").removeClass("hidden");
})

$(".closePopUp").click(function() {
  $("#popUp").hide();

 });
}
$(".source1").click(function() {
  function first() {
    $.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=29a810abcc224b3eadc6b110c4174147",
      function (res) {
        console.log(res.articles);
        res.articles.forEach(element => {
          // console.log(element.title)
          $("#main").append(`<article class="article" data-title="${element.title}" data-content="${element.content}">
          <section class="featuredImage">
            <img src="images/article_placeholder_1.jpg" alt="" />
          </section>
          <section class="articleContent">
              <a href="#"><h3>${element.title}</h3></a>
              <h6>Lifestyle</h6>
          </section>
          <section class="impressions">
          ${element.source.name}
          </section>
          <div class="clearfix"></div>
        </article>`
        )
        })
      })
      
       //create aritcle 
        //   //  $(".art1").append(`<li>${element.title}</li>`);
        // for (let i = 0; i < 4; i++) {
        //   $(".art" + i).append(`<li>${res.articles[i].title}</li>`)
        //   if (res.articles[i].title)
        // $(".articleContent").on("click", function () {
        //   $(".container" ).append(`<p>${res.articles.content}</p>`);
        // })
      
  
  $("#popUp").hide();
  
  
  $("#main").on("click", ".article",function () {
  // $("#popUp").toggle();
   $("#popUp").removeClass("hidden");
   $("#popUp").show()
   $("#popUp.loader .container").css("display", "block")
   $(".tit").text($(this).attr("data-title"));
   $(".cont").text($(this).attr("data-content"));
  // alert("ok")
  // alert($(this))
   console.log($(this).attr("data-content"));
 // $(".loader").removeClass("hidden");

  })
  //$(".loader").toggle("hidden");
  
  $(".closePopUp").click(function() {
    $("#popUp").hide();
  
   });
  }
  console.log("source")
  first()
//  $("#popUp .loader").hide();
 });

$.get("https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=F4YVbaooO73XeXAM0Nfs8dK25PB9DUMu",
function (res) {
  console.log(res.results);
  // res.articles.forEach(element => {
  //   // console.log(element.title)
  //   $("#main").append(`<article class="article" data-title="${element.title}" data-content="${element.content}">
  //   <section class="featuredImage">
  //     <img src="images/article_placeholder_1.jpg" alt="" />
  //   </section>
  //   <section class="articleContent">
  //       <a href="#"><h3>${element.title}</h3></a>
  //       <h6>Lifestyle</h6>
  //   </section>
  //   <section class="impressions">
  //   ${element.source.name}
  //   </section>
  //   <div class="clearfix"></div>
  // </article>`
  // )
  // })
})