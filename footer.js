const footerDIVDIV = document.querySelector('footer div div');

footerDIVDIV.innerText = "경기도 오산시 은계동\n사업자등록번호 : 111-22-33333\n전화번호 : 1577-0000\nCopyright © 2020 Gyeonggido Food Information All Right Reserved.\n";


const instagramICON = document.querySelector('#instagramICON');
const facebookICON = document.querySelector('#facebookICON');
const nblogICON = document.querySelector('#nblogICON');


let createA = document.createElement("a");
createA.setAttribute("href", "*");
createA.setAttribute("target", "_blank");


let createSPAN = document.createElement("span");
createSPAN.setAttribute("title", "인스타그램");


let createIMG = document.createElement("img");
createIMG.setAttribute("src", "/image/instagram_logo.png");
createIMG.setAttribute("alt", "인스타그램로고");

createSPAN.appendChild(createIMG);

createA.appendChild(createSPAN);

instagramICON.appendChild(createA);



createA = document.createElement("a");
createA.setAttribute("href", "*");
createA.setAttribute("target", "_blank");


createSPAN = document.createElement("span");
createSPAN.setAttribute("title", "페이스북");


createIMG = document.createElement("img");
createIMG.setAttribute("src", "/image/facebook_logo.png");
createIMG.setAttribute("alt", "페이스북로고");

createSPAN.appendChild(createIMG);

createA.appendChild(createSPAN);

instagramICON.appendChild(createA);




createA = document.createElement("a");
createA.setAttribute("href", "*");
createA.setAttribute("target", "_blank");


createSPAN = document.createElement("span");
createSPAN.setAttribute("title", "네이버블로그");


createIMG = document.createElement("img");
createIMG.setAttribute("src", "/image/nblog_icon.png");
createIMG.setAttribute("alt", "네이버블로그로고");

createSPAN.appendChild(createIMG);

createA.appendChild(createSPAN);

instagramICON.appendChild(createA);


                                        // const icon = document.querySelector('.icon');

                                        // const li = document.createElement("li");
                                        // const a = document.createElement("a");
                                        // const img = document.createElement("img");
                                        // img.setAttribute("src", "C:/Users/11/OneDrive/바탕 화면/project/image");
                                        // img.setAttribute("alt", "인스타그램로고");

                                        // a.appendChild(img);
                                        // li.appendChild(a);
                                        // icon.appendChild(li);

// createA.setAttribute("href", "*");
// createA.setAttribute("target", "_blank");


// createSPAN.setAttribute("title", "응모사이트 페이스북");


// createIMG.setAttribute("src", "/image/facebook_logo.png");
// createIMG.setAttribute("alt", "페이스북로고");

// createSPAN.appendChild(createIMG);

// createA.appendChild(createSPAN);

// footerDIV.appendChild(createA);