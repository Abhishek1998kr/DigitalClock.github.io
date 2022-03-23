function showtime(){
var date=new Date();
var day=date.getDay();
var month=date.getMonth();
var cdate=date.getDate();
var year=date.getFullYear();
var h=date.getHours();
var m=date.getMinutes();
var s=date.getSeconds();
var session="AM";
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var ids=["day","month","daynum","year"];
var values=[week[day],months[month],cdate,year];
for (var i=0;i<ids.length;i++)
{
    document.getElementById(ids[i]).firstChild.nodeValue=values[i];
}
if (h==0)
{
    h=12;
}
if (h>12)
{
    h=h-12;
    session="PM";
}
if (h<10)
{
    h="0"+h;
}
if (m<10)
{
    m="0"+m;
}
if (s<10)
{
    s="0"+s;
}
var time=h+":"+m+":"+s+" "+session;
document.getElementById(`clockDisplay`).innerText=time;
document.getElementById(`clockDisplay`).textContent=time;
setTimeout(showtime,1000);
}
showtime();
