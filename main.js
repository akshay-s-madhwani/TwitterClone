/*-----Created By A.S.M. ----------*/
window.onload = function(){
    
alert("No need to add credentials, Press Login")
//Loader ----------
 let loader,logForm,main_body,login,head_bar,bottom_bar;

loader = document.querySelector(".loader");
 loader.style.display="none";
  logForm= document.querySelector(".login");
    logForm.style.display="block";
 
main_body =    document.querySelector(".main_body");
login = document.querySelector("#login_close");
head_bar = document.querySelector(".head_bar");
bottom_bar = document.querySelector(".bot_bar");
 
      login.onclick = function(){
logForm.style.display="none";
main_body.style.display="block";
head_bar.style.display="flex";
bottom_bar.style.display="block";
    };
    
    
  
//All Variables
  let 
  //feed page variables----------
   feed,div,trend,noti_f,p_c,switcher,sub_feed,dp_wrap,user,img,dp,id,txt,topic,icon_cont ,page,hr,atRate,content,contents,icon_add,tick,t,dropClick;
 //------------------------------
 //notification variables
 let notif_wrap,sub_notif,nstar_wrap,nhead,ntext,nstar;
 //------------------------------
   // trending page variables-------
 let showcase_wrap, showcase, trend_wrap, t_container, trend_head, t_drop, t_hash, tweet_count, happen_wrap, h_container, h_span, h_name, t_tick, t_time, h_headline, h_img, h_img_wrap;

    //-----------------------
//Message page variables------
    let p_wrap,pic,pic_wrap,p_container,p_span,p_name,p_id,p_time,p_msg;
    
//----------------------------
//Feed Page Array
 topic = new Array("","As the world is coping with the outbreak of COVID-19, We must not forget those without a voice. Let's make sure stray & abandoned animals are treated with care and compassion. <em>Help @amtmindia</em> via <em>https://t.co/IoZC3Y1mcI</em>","T 3405 - .... अच्छा , एक और बात तय है , इन दिनों  ... जब फ़ोन आए , तो ये भी नहीं कहा जा सकता की ' साहेब घर में नहीं है ' !!!😜 <em> https://t.co/NisaBoIO6p</em>","There’s an army of people working day and night to keep us safe, our families safe. Lets together say <em>#DilSeThankYou</em> to them because that’s the least we can do. <em>@mybmc</em><em> @MumbaiPolice</em>","Day 13. Starting to look like the Trivago guy: a bestubbled, transient loner who just wants to help you find cheap online travel packages. Someone should check on the Trivago guy.","Simply divine ✨ Happy Bday mommy 💜 ","So honoured to be a part of this prestigious list. Thank you <em> @BWBusinessworld </em>for considering me for this! Yay!","Knowledge of what truly matters in life is a blessing.","71 लाख राशन कार्ड धारकों को हम मुफ़्त राशन दे चुके हैं। जिनके पास राशन कार्ड नहीं है ऐसे 3.5 लाख लोगों को भी राशन दिया जा चुका है।ऐसे 31 लाख लोगों ने मुफ़्त राशन के लिए अपलाई किया है, उन सबको राशन मिलेगा।दिल्ली में किसिको भी राशन या भोजन की कमी नहीं होगी इसकी मैं गारंटी लेता हूं।","Save the planet? <br/>How can we be so arrogant? <br/>The planet is, was and always will be stronger than us. We can’t destroy it;<br/> if we overstep the mark, the planet will simply erase us from its surface and carry on existing.<br/>(Coelho, The Winner stands alone)","Namashkar Mitro<br/>Me aaj aap sabhi se nivedan karna chahunga,<br/>ki <b>25 April</b> ko,<br/>Theek <b>11 P.M.</b> bje,sabhi log apni apni balcony me Jayen<br/><em>Aur kood jayen</em><br/>Jai Hind","Just here to say Im alive and well.Also,if things work out and harmony is restored, I might start giving coaching to IIT-JEE Aspirants,Or maybe a little bit more<br/> For more info contact on this number-[<b>'e¹²','log1772.23','|√eπ|','√(1+ZT)-1/(√1+ZT)+T<sub>k</sub>=nc',<br/>'E=MC²'</b>]");
  
  id = new Array("","Shahrukh Khan","Amitabh Bacchan","Akshay Kumar","Jim Carrey","Shraddha Kapoor","Prajakta Koli","Virat Kohli","Arvind Kejriwal","paulo Coelho","Narendra Modi","Einstien Albert");
  
 atRate = new Array("","@Iamsrk","@SrBachchan","@AkshayKumar","@JimCarrey","@ShraddhaKapoor","@IamMostlySane","@iamVkohli","@ArvindKejriwal","@PauloCoelho","@narendramodi","@Einstien");
 
 dp = new Array("","https://pbs.twimg.com/profile_images/661679664/keep_it_onn.jpg","https://pbs.twimg.com/profile_images/1138177088136011776/Rnp146CU.jpg","https://pbs.twimg.com/profile_images/1085067824840822785/ychTUtB8.jpg","https://pbs.twimg.com/profile_images/866987562027692032/Ik5vMpOQ.jpg","https://www.dropbox.com/s/ou60hs2utwtyvik/EW_8NrPXQAEls-b.jpg?raw=1","https://pbs.twimg.com/profile_images/1130513717823598592/MKhcAT03.jpg","https://pbs.twimg.com/profile_images/1192077703609868289/huwMRG1W.jpg","https://pbs.twimg.com/profile_images/945853608389574656/REH_LpUJ.jpg","https://pbs.twimg.com/profile_images/1049667241166471168/i8pUC23c.jpg","https://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL.png","https://pbs.twimg.com/profile_images/433000823/einstein.jpg");
 contents = new Array("","https://www.dropbox.com/s/cx2xmg9o52tecsk/IMG_20200418_232110.jpg?raw=1","https://www.dropbox.com/s/q5ssvt77i0bf34d/IMG_20200418_234756.jpg?raw=1","https://www.dropbox.com/s/uvl9pz5kyelv5gn/IMG_20200419_012515.jpg?raw=1","https://www.dropbox.com/s/el7e58nr458d4ed/IMG_20200418_234556.jpg?raw=1","https://www.dropbox.com/s/du8488a3ta4czqq/IMG_20200419_004125.jpg?raw=1","https://www.dropbox.com/s/9lwbluvhzp2rswe/IMG_20200419_012402.jpg?raw=1","https://www.dropbox.com/s/kx9pdj20an5l1r9/IMG_20200419_003742.jpg?raw=1","","","","");
icons = new Array("https://img.icons8.com/metro/15/000000/topic.png","https://img.icons8.com/material-rounded/24/000000/retweet.png","https://img.icons8.com/white/15/ff0000/hearts.png","https://img.icons8.com/small/16/000000/share.png",
//drop-down
"https://img.icons8.com/android/24/000000/expand-arrow.png");
t = "https://www.dropbox.com/s/nvb70nk2rs2x8mk/iconfinder_tick_blue_619551.png?raw=1" ;
let times = ["1m","1h ago","1h ago","2h ago","5h ago","6h ago","6h ago","7h ago","10h ago","1d ago","3d ago","3d ago","3d ago","3d ago","4d ago"];    

 //Trend Arrays--------------------
 let trends = ["#KejriwalShowsTheWay","#IrrfanKhan","#TaskNiMIla","#NoSchoolFeeQ1","#ExamHatao","#AskPoonam"];
 let trend_heading = ["Politics.Trending","Entertainement.Trending","Trending in India","Politics.Trending","Trending in India","Entertainement.Trending"];
 let t_count = ["10.23k Tweets","20.8k Tweets","14k Tweets","15,240 Tweets","!0.56k Tweets","24k Tweets"];
 let happen_name = ["COVID-19","Times Of India","News18.com","PinkVilla","moneycontrol","World news"];
 let h_news = ["Coronavirus: EU Leaders pledge to raise billions of Dollars to find Vaccine","Armed Forces Salute India's CoronaVirus Warriors","Desperate to get home, 18 people found in travelling a Cement mixer","Happy Birthday Anushka Sharma","Stock Market updates,now Serving","Kim Jong-Un is alive , North Korean media reports."];
 let h_images = ["https://www.bmi.bund.de/SharedDocs/bilder/EN/schmuckbilder/bevoelkerungsschutz/corona-labor.jpg?__blob=poster&v=3","https://www.dropbox.com/s/dv6l81tqngspycr/download.jpg?raw=1","https://www.dropbox.com/s/ox01g9wwzim9tbb/Indore-18-Migrants-Found-In-Cement-Mixer-They-Were-Trying-To-Reach-Lucknow.jpg?raw=1","https://www.dropbox.com/s/do8ht3xf500b9g5/anushka.jpg?raw=1","https://www.dropbox.com/s/qzp3kq74l4kkvo8/stocks-cash-finance-money-banking.jpg?raw=1","https://www.dropbox.com/s/fr2ardqsw76mnvp/waste.jpg?raw=1"];
 
//Message Array-------
    
let pictures = [//tanay
"https://www.sololearn.com/avatars/f8149758-98c5-46bb-8064-27e0fda8f48f.jpg" ,
//satnam
"https://api.sololearn.com/Uploads/Avatars/9233826.jpg" ,
//zack
"https://api.sololearn.com/Uploads/Avatars/17292663.jpg" ,
//rishabh
"https://api.sololearn.com/Uploads/Avatars/8797547.jpg" ,
//sudeep
"https://api.sololearn.com/Uploads/Avatars/8843885.jpg" ,
//anmol
"https://assets.cdn.moviepilot.de/files/1287dac94550ff293c94e3ab957c052cba9eb651d44d4eb8ebfe1ab05210/fill/1024/492/wonder%20woman%202.jpg" ,
//skr
"https://api.sololearn.com/Uploads/Avatars/17665461.jpg" ,
//sam
"https://api.sololearn.com/Uploads/Avatars/17416214.jpg" ,
//akr
"https://api.sololearn.com/Uploads/Avatars/17786309.jpg" ,
//nilesh
"https://api.sololearn.com/Uploads/Avatars/17194531.jpg" ,

//sudarshan
"https://api.sololearn.com/Uploads/Avatars/4714357.jpg" ,
//avd
"https://api.sololearn.com/Uploads/Avatars/1577560.jpg" ,
//virat
 "https://api.sololearn.com/Uploads/Avatars/14875620.jpg" ,
//coder
"https://api.sololearn.com/Uploads/Avatars/11159966.jpg" ,
//rose
"https://api.sololearn.com/Uploads/Avatars/6241792.jpg" ];
let people = ["Tanay","Satnam Singh","Zack","Rishabh Singh","Sudeep Jaiswal","Anmol Advani","Skr","Prince Sam","Akr","Nilesh UK","Sudarshan Rai","AVD","Virat","Coder","Rose"];
    
let peopleId = ["@Bawaa_li","@Masum.Sher","@Raja.saab","@bookiya","@Mars_melow","@Hmmmm","@Black.heart","@Aashiq.af","@seriousSnape","@bawa_ra","@Busyhu","@Thor.ki","@Growth101","@TheChosen.JSON","@Gulabjal"];
let messages = ["Yahi to jeevan ka sar hai","Jo bole So nihal, Satsriakal!!","mujhsa shareef noob kaha milega tumhe sansar me","Books give you meaning, of words you never knew before.","Opened Ae , Ps and Android Studio together, You can guess what happened next :(","F.R.I.E.N.D.S. is truely the best Show ever!!","I dived into an O.S., and got stuck there, now I haunt everybody who uses my System 👻","Me Bill Gates ko Chai bana ke pilaunga, kadak wali","Tension mat lo, me sambhal lunga","Me himmat nhi harunga bilkul","ye wala Server theek kr diya, dusra dekh ke ata hu","Talk to me in hindi , I dont kn0w english","Teri udaan tere pankho ke size se nahi, tere Hausle tey karenge","My didi ,is MY didi. None of your Didi"," Black Heart is my favorite"];
    

//id name limit function
 function limit(array ,index){
     
  return array.slice(0,index).concat("...");
  }
  
 //page switch function
    feed = document.querySelector("#feed_wrapper");
    page = document.querySelectorAll(".page");
    switcher = document.querySelectorAll(".bot_icon");
 let l = document.querySelector(".tab_wrap");
    page[0].style.display = "flex";
      
      for(let i = 0;i < switcher.length;i++){
    
    switcher[i].onclick = function(){
    for(let i = 0;i < page.length;i++){
        page[i].style.display = "none";
        notifMake();
        }
   page[i].style.display = "flex";
   l.style.display = "flex";
    }
}
//bottom icon color function

const wrap = document.querySelector(".feed_card");
let ic_c="#1DA1F2";
let bot = document.querySelectorAll(".bot_icon");

for(let a = 0; a<bot.length;a++){

bot[a].onmouseup= () =>{
document.querySelectorAll(".ic")[a].style.fill = ic_c;
 }   
 bot[a].onmouseout= () =>{
document.querySelectorAll(".ic")[a].style.fill = "#404040" }

};

//****feed DOM creation*****
function feedmake(i,lenth){
    
for(;i<=lenth;i++){
 
    div = document.createElement("DIV");
    img = document.createElement("IMG");
    user = document.createElement("H5");
    text = document.createElement("P");
    content = document.createElement("img");
    sub_feed = document.createElement("div");
       dp_wrap = document.createElement("div")
    id_s = document.createElement("p");
     icon_cont =
  document.createElement("DIV");
  tick = document.createElement("IMG");
  drop = 
  document.createElement("IMG");
    f_time = document.createElement("P");
  
 
       div.className = "feed_card"; 
       dp_wrap.className="dp_wrap";
       sub_feed.className = "sub_feed";
       img.className = "dp";
       user.className ="usrname";
       text.className = "feed_text" ;  
       tick.className = "tick";
       content.className = "feed_img";
id_s.className = "id_s";
       icon_cont.className = "feed_icon_cont";
       drop.className = "drop";
       f_time.className = "f_time";
    
    text.innerHTML = topic[i];
    user.innerHTML = id[i];
    tick.src="https://www.dropbox.com/s/nvb70nk2rs2x8mk/iconfinder_tick_blue_619551.png?raw=1" ;
    img.src =dp[i];
    id_s.innerHTML = limit(atRate[i],4);
    drop.src = icons[4];
    content.src =contents[i];
    f_time.innerHTML = times[i];
           
    feed.appendChild(div);
    div.appendChild(dp_wrap);
dp_wrap.appendChild(img);    div.appendChild(sub_feed);  
    
    sub_feed.appendChild(user);
    
    user.appendChild(tick);
    
    user.appendChild(id_s);
    
    user.appendChild(f_time);
    
    user.appendChild(drop);
    
sub_feed.appendChild(text);
    sub_feed.appendChild(content);
 //like-share icons   
    for(let a = 0;a<=icons.length-2;a++){
     icon_add = document.createElement("img");
     icon_add.src = icons[a];
    
  icon_add.className = "feed_bot_icon";  

      icon_cont.appendChild(icon_add);

sub_feed.appendChild(icon_cont );
downNav();
        };
    }
};
    
    
//--Side navigation menu------    
 let oSlide = document.querySelector(".side_nav");
    let option = document.querySelector("#head_menu");
    let cross = document.querySelector("#cross");
    let pos_x = -300;
  option.onclick = function()
{
      let sideClick =     setInterval(moveLeft,-1000);
    function moveLeft(){
    if(pos_x==0){
       clearInterval(sideClick);
             }
     else{
        pos_x+=1; oSlide.style.left = pos_x + 'px';  
          }
      }
    
}
    cross.onclick = function()
{
     let sideClick1 =     setInterval(moveRight,-500);
     
    function moveRight(){
    if(pos_x==-300){
       clearInterval(sideClick1);
             }
     else{
        pos_x-=1; oSlide.style.left = pos_x+'px';  
          }
          
      }
}



/***notification DOM part**/
function notifMake(){
    let notif_len = atRate.length-1;
noti_f = document.querySelector(".notif_body");

for(var i=1;i<=notif_len ;i++){
    notif_wrap =document.createElement("DIV");
    nstar_wrap =
document.createElement("DIV");   
    nstar = document.createElement("img");
    sub_notif = document.createElement("DIV");
    ndp = document.createElement("img");
    nhead = document.createElement("h6");    
    ntext = document.createElement("p"); 
    ndrop = document.createElement("img");
    notif_wrap.className = "notif_card";
    sub_notif.className ="sub_notif";
    n_time = document.createElement("p");
    
nstar_wrap.className = "nstar_wrap";
ndrop.className = "drop";
nstar.className = "nstar";
nhead.className = "nhead";
ndp.className ="ndp";
ntext.className = "ntext";
n_time.className = "f_time";
    
    nstar.src = "https://www.dropbox.com/s/15z767ys5zu1ylr/5572-200%20%281%29.png?raw=1"
    ndp.src = dp[i]
    ndrop.src=icons[4];
    nhead.innerHTML = id[i];
    ntext.innerHTML = limit(topic[i],85);
    n_time.innerHTML = times[i];
    
    noti_f.appendChild(notif_wrap);
    notif_wrap.appendChild(nstar_wrap);
    nstar_wrap.appendChild(nstar);
    notif_wrap.appendChild(sub_notif);
    
    sub_notif.appendChild(ndp);
    sub_notif.appendChild(nhead);
    nhead.appendChild(n_time);
    nhead.appendChild(ndrop); sub_notif.appendChild(ntext);
    
    let men_page = document.querySelector(".men_wrap");
    let act = document.querySelector(".activity")
    let mention = document.getElementById("mentions");
    
  mention.addEventListener("click",ment);
    function ment(){
        mention.style.borderBottom ="3px solid #1DA1F2";
    
 act.style.borderBottom = "0px solid #1DA1F2";
notif_wrap.style.display = "none";
men_page.style.display = "flex" ;  
    }
    act.onclick = function(){
        act.style.borderBottom = "3px solid #1DA1F2";
      mention.style.borderBottom = "0px solid #1DA1F2";
          notif_wrap.style.display = "flex" ;     
        men_page.style.display = "none" ;    
    };
    
downNav();
        }
}
 function trendMake(){
trend = document.querySelector("#trend_wrapper");

//Showcase Image 
    showcase_wrap = document.createElement("DIV");
    showcase = document.createElement("IMG");
    
    showcase_wrap.className = "showcase_wrap";
     showcase.className = "showcase";
     
     showcase.src="https://www.dropbox.com/s/c2djp3q4b1igdla/photo-1584483766114-2cea6facdf57.jpg?raw=1";
     
     trend.appendChild(showcase_wrap);
     showcase_wrap.appendChild(showcase);
 
    let heading_t = document.createElement("Div");
let heading_trend = document.createTextNode("Trending Tweets");
    heading_t.className = "trending_header";
    heading_t.appendChild(heading_trend);
trend.appendChild(heading_t);
for(let i = 0; i <=5; i++)
{

//Trending sub part of trends
    trend_wrap = document.createElement("DIV");
   t_container  = document.createElement("DIV");
   trend_head = document.createElement("P");
    t_drop = document.createElement("IMG");
    t_hash = document.createElement("H4");
    tweet_count = document.createElement("P");
    
    trend_wrap.className = "trend_wrap";
    t_container.className = "t_container";
       trend_head.className = "trend_head";
     t_drop.className = "drop";
       
    //   t_drop.className = "t_drop";
      
       t_hash.className = "t_hash";
       tweet_count.className = "tweet_count";
     trend_head.innerHTML = trend_heading[i];
    
    t_drop.src = icons[4];
    
    t_hash.innerHTML = trends[i];
    
    tweet_count.innerHTML = t_count[i];
     
    trend.appendChild(trend_wrap);
     
    trend_wrap.appendChild(trend_head);     
    trend_wrap.appendChild(t_drop);
    trend_wrap.appendChild(t_hash);
    trend_wrap.appendChild(tweet_count);
    
            }
     
    //Whats Happening Part of Trends
 let heading_h = document.createElement("Div");
let heading_text = document.createTextNode("What's Happening");
    heading_h.className = "happen_header";
    heading_h.appendChild(heading_text);
trend.appendChild(heading_h);
for(let i = 0; i <=5; i++)
{
      happen_wrap = document.createElement("DIV");
   h_container  = document.createElement("DIV");
   h_span = document.createElement("SPAN");
    h_name = document.createElement("P");
    h_tick = document.createElement("IMG");
    h_time = document.createElement("p");
    h_headline = document.createElement("h4");
    h_img_wrap = document.createElement("DIV");
    h_img = document.createElement("IMG");
    
        happen_wrap.className = 'happen_wrap';
        h_container.className = "h_container";
        h_span.className = "h_span";
        h_name.className = "h_name";
        h_time.className = "h_time";
        h_tick.className = "tick";
        h_headline.className = "h_headline";
        h_img.className = "h_img";
        h_img_wrap.className = "h_img_wrap";
        
        h_name.innerHTML = happen_name[i];
        h_time.innerHTML = times[i];
        h_tick.src    ="https://www.dropbox.com/s/nvb70nk2rs2x8mk/iconfinder_tick_blue_619551.png?raw=1" ;
        h_headline.innerHTML = h_news[i];
        h_img.src = h_images[i];
    
        trend.appendChild(happen_wrap);
        happen_wrap.appendChild(h_container);
happen_wrap.appendChild(h_img_wrap);
        h_container.appendChild(h_span);
        h_container.appendChild(h_headline);
        h_span.appendChild(h_name);
        h_span.appendChild(h_time);
        h_span.appendChild(h_tick);    
        
        h_img_wrap.appendChild(h_img);
    
     }
 }
    
    /****message tab creation**/
    
let message = document.querySelector(".pc_body");
 
for(let i = 0;i <= 14; i++)
{
    p_wrap = document.createElement("DIV");
    pic = document.createElement("IMG");
    pic_wrap =     document.createElement("DIV");               
    p_container = document.createElement("DIV");
    p_span = document.createElement("span");
    p_name = document.createElement("H4");
    p_id = document.createElement("P");
    p_time = document.createElement("P");
    p_msg = document.createElement("P");
    
    p_wrap.className = "p_wrap";
    pic.className = "pic";
    pic_wrap.className = "pic_wrap";
    p_container.className = "p_container";
    p_name.className = "p_name";
    p_id.className = "p_id";
    p_span.className = "p_span";
    p_time.className = "p_time";
    p_msg.className = "p_msg";
    
    pic.src = pictures[i];
    p_name.innerHTML = people[i];
    p_id.innerHTML = peopleId[i];
    p_time.innerHTML = times[i];
    p_msg.innerHTML = messages[i];
    
    message.appendChild(p_wrap);
    p_wrap.appendChild(pic_wrap);
    pic_wrap.appendChild(pic);
    p_wrap.appendChild(p_container);
    p_container.appendChild(p_span);
    p_container.appendChild(p_msg);
    p_span.appendChild(p_name);
    p_span.appendChild(p_id);
    p_span.appendChild(p_time);
    
}

/*****down slide function**/
function downNav(){
    let dSlide = document.querySelector("#h_card");
    let d = document.querySelectorAll(".drop");
    let h =        document.querySelector(".hide_card");
    let pos = 0;
  for(let i =0; i<d.length ;i++){
d[i].onclick = function()
{
       dropClick = setInterval(moveUp,1);

    function moveUp(){
    if(pos==50){
       clearInterval(dropClick);
       console.log("Click gray handle for sliding down \n\n");
             }
     else{
        pos+=1; 
        dSlide.style.bottom = pos + 'px';  
          }
      }
      
    
}
  }
    h.onclick = function()
{
     let  dropClick1 =     setInterval(moveDown,1);
     
    function moveDown(){
    if(pos==-220){
       clearInterval(dropClick1);
             }
     else{
        pos-=1; dSlide.style.bottom = pos + 'px'; 
          }
          
      }
} 
}
 
let tab;
let bell = document.querySelector("#notif_icon");
bell.onfocus = function(){
     tab = document.querySelector(".ntab");
     tab.style.display = "flex";
     }
    
  try{
    let search = document.querySelector("#trend_icon");
    let head_bird = document.querySelector("#head_bird");
     let s_bar = document.createElement("INPUT");
        s_bar.setAttribute("type","search");
    s_bar.setAttribute("name","search");    
  s_bar.placeholder = " 🔎 Search";
        s_bar.className = "search";
    head_bar.appendChild(s_bar);
    search.addEventListener("focus", searchBar);
    s_bar.addEventListener("search", removeSearch);
    switcher[0].addEventListener("focus",removeSearch);
    switcher[2].addEventListener("focus",removeSearch);
    switcher[3].addEventListener("focus",removeSearch);
    
        function removeSearch(){
        head_bird.style.opacity = "1";
        s_bar.style.display = "none";
    }
    
        function searchBar(){
          
    head_bird.style.opacity = "0.0";
        s_bar.style.display = "block";
        }
    } catch(err){
    main_body.innerHTML = err.message;
}
let trend_tab= document.querySelectorAll(".t_tab");
     trend_tab.className = "hhh";
  let trend_tabs = document.querySelectorAll(".hhh");
  trend_tab[0].style.borderBottom = "3px solid #1DA1F2";
  
  for(let i = 0;i <= 4;i++){

    trend_tab[i].onclick = function(){
    for(let i = 0;i <= 4;i++)
    {
       trend_tab[i].style.borderBottom="0px solid #1DA1F2";
                 } 
  
    trend_tab[i].style.borderBottom = "3px solid #1DA1F2";
            }
        };
        
let tweet_body = document.querySelector("#tweet");
let text_area = document.querySelector("#tweets"); 
let tweet_close = document.querySelector(".tweet_close");
let tweet_it = document.querySelector(".tweet_button");
    function tweet(){
        return text_area.value;
    }
let feather = document.querySelector("#float");
   
    feather.onclick = function(){
        tweet_body.style.display = "block";
    };
    
    tweet_close.onclick = function(){
        tweet_body.style.display = "none";
    }
    tweet_it.onclick = function(){
       
        topic.splice(0,1,tweet());
        id.splice(0,1,"Akshay SM");
        dp.splice(0,1,"https://api.sololearn.com/Uploads/Avatars/8450145.jpg");
    atRate.splice(0,1, "@logicredefined");
    contents.splice(0,1,"");
    times.splice(0,1,"Just now");
    feedmake(0,0);

        tweet_body.style.display = "none";
        
    }
      let t_len = topic.length-1;
    feedmake(1,t_len);
       trendMake();
       let settings = document.querySelector("#head_settings").onclick = function(){
           alert("Nothing modifiable Here!!! :p");
       }
let credit = document.querySelector("#credit").onclick =function(){
//console.log("Thanks to Tanay Bhatt for his help");
console.log("................");
    //console.log("FlexBox taught by Satnam Singh and Rishabh Singh");
    console.log("................");
 //   console.log("Tested By : Tanay aka Thekedar, Rishabh Singh, Zack, SKR");
    console.log("................");
    console.log("Icons taken from Favicons and Icons8");
    console.log("................");
    console.log("Rest of the design and all contents are taken from Twitter App");
    console.log("................");
    console.log("Do try tweeting something");
    console.log("................");
    console.log("Thanks for visiting :D\n\n\n");
}
  
      
    }


    