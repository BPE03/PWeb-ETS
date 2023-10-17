let url = "http://159.223.51.203:81/api/bio"

function loadDoc()
{
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            let doc = JSON.parse(xhttp.responseText);
            let name1 = doc[0].name;
            let id1 = doc[0].id;

            let head1 = document.getElementById("title1");
            let body1 = document.getElementById("value1");

            head1.innerHTML = name1;
            body1.innerHTML = id1;

            let name2 = doc[1].name;
            let id2 = doc[1].id;

            let head2 = document.getElementById("title2");
            let body2 = document.getElementById("value2");

            head2.innerHTML = name2;
            body2.innerHTML = id2;

            let name3 = doc[2].name;
            let id3 = doc[2].id;

            let head3 = document.getElementById("title3");
            let body3 = document.getElementById("value3");

            head3.innerHTML = name3;
            body3.innerHTML = id3;

            let name4 = doc[3].name;
            let id4 = doc[3].id;

            let head4 = document.getElementById("title4");
            let body4 = document.getElementById("value4");

            head4.innerHTML = name4;
            body4.innerHTML = id4;

            let name5 = doc[4].name;
            let id5 = doc[4].id;

            let head5 = document.getElementById("title5");
            let body5 = document.getElementById("value5");

            head5.innerHTML = name5;
            body5.innerHTML = id5;

            let name6 = doc[5].name;
            let id6 = doc[5].id;

            let head6 = document.getElementById("title6");
            let body6 = document.getElementById("value6");

            head6.innerHTML = name6;
            body6.innerHTML = id6;

            let name7 = doc[6].name;
            let id7 = doc[6].id;

            let head7 = document.getElementById("title7");
            let body7 = document.getElementById("value7");

            head7.innerHTML = name7;
            body7.innerHTML = id7;

            let name8 = doc[7].name;
            let id8 = doc[7].id;

            let head8 = document.getElementById("title8");
            let body8 = document.getElementById("value8");

            head8.innerHTML = name8;
            body8.innerHTML = id8;

            let name9 = doc[8].name;
            let id9 = doc[8].id;

            let head9 = document.getElementById("title9");
            let body9 = document.getElementById("value9");

            head9.innerHTML = name9;
            body9.innerHTML = id9;

            let name10 = doc[9].name;
            let id10 = doc[9].id;

            let head10 = document.getElementById("title10");
            let body10 = document.getElementById("value10");

            head10.innerHTML = name10;
            body10.innerHTML = id10;

            let name11 = doc[10].name;
            let id11 = doc[10].id;

            let head11 = document.getElementById("title11");
            let body11 = document.getElementById("value11");

            head11.innerHTML = name11;
            body11.innerHTML = id11;

        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}

loadDoc();

