let body = document.getElementsByTagName('body')[0];



home()
createNavBar()
socialLinks();
latestVideo();
eventsContainer()
songsList()
aboutUs();
booking()
footer()


function createWave(parent,extraClass){
    createElement('div',parent,'',[''],[''],['wave',extraClass],'','')
}
function footer(){
    let container = createElement('section',body,'footer',[''],[''],'','','');
    createElement('h1',container,'',[''],[''],'','','© 2021 PROVINSPROJEKTET')
}
function booking(){
    let container = createElement('section',body,'Booking',[''],[''],'','','');
    let leftSide = createElement('section',container,'leftSidePersona',[''],[''],'','','');
    let rightSide = createElement('section',container,'rightsidePersona',[''],[''],'','','');
    persona(leftSide, 'Jesper','Mansa','+45 20 42 02 02','jesper@mansa.dk')
    persona(leftSide,'Oscar', 'Mansa','+45 53 25 35 95','oscar@mansa.dk')
    createElement('h1',rightSide,'',[''],[''],'','','booking');
    createElement('input',rightSide,'',['placeholder','Email Address'],[''],'','','');
    createElement('button',rightSide,'',[''],[''],['btn'],'','book');

}
function persona(container,firstName, lastName, number, email){
    let span = createElement('span',container,'',[''],[''],'','','')
    createElement('h1',span,'',[''],[''],'','',firstName)
    createElement('h1',container,'',[''],[''],['surname'],'',lastName)
    createElement('p',container,'',[''],[''],'','',number)
    createElement('p',container,'',[''],[''],['mail'],'',email)

}
function aboutUs(){
    let container = createElement('section',body,'AboutUs',[''],[''],'','','');
    let leftSide = createElement('section',container,'leftSideAbout',[''],[''],'','','');
    let rightSide = createElement('section',container,'rightSideAbout',[''],[''],'','','');
    

    createElement('img',leftSide,'aboutUsPic',['src','./img/aboutUsPic.jpg'],[''],'','','');
    createElement('div',leftSide,'',[''],[''],['backgroundAboutUs'],'','')
    createElement('h1',leftSide,'',[''],[''],['headingAboutUs'],'','about us');
    createElement('p',rightSide,'',[''],[''],'','','PROVINSPROJEKTET IS A MAJOR SUPPLIER OF CHEERFUL FUNK, DISCO AND OLD SCHOOL HIP-HOP WITH COOL BEATS, DELICIOUS GROOVES AND CATCHY LYRICS.')
    createElement('p',rightSide,'',[''],[''],'','','OVER THE PAST 3 YEARS, THEY HAVE RELEASED SEVERAL SINGLES AND A SINGLE ALBUM AND CAN BE HEARD ON VARIOUS STREAMING SERVICES AND, NOT LEAST, SEEN ON YOUTUBE.')
    createElement('p',rightSide,'',[''],[''],'','','PROVINSPROJEKTET IS SOMETHING AS RARE AS A 2-GENERATION MUSIC PROJECT, WITH SON OSCAR')
    
}
function songsList(){
    let songsContainer= createElement('section',body,'songContainer',[''],[''],'','','');
    let songArr = ['Benzin ft. Migidi Mansa','Isabella','Kan Du Maerk Det','Sa Godt For Mig','Sommer Latino','Funk i Faest','Pigeglad','Kom og Dans','Sa Ruller Vi','En Nat- Provins Remix','Gi Den Gas Nu','Travlt Hversdag'];
    createElement('h1',songsContainer,'',[''],[''],'','','music');
    for(let i = 0; i< songArr.length; i++){
        let songContainer = createElement('div',songsContainer,'',[''],[''],['songContainer'],'','');
        createElement('p', songContainer,'',[''],[''],'','',i+1+'. ');
        createElement('p',songContainer,'',[''],[''],'','',songArr[i])
    }
    createWave(songsContainer,'wave3')
    createWave(songsContainer,'wave4')
    
}
function eventsContainer(){
    let eventConainer = createElement('section',body,'eventContainer',[''],[''],'','','');
    createElement('h1',eventConainer,'event',[''],[''],'','','events')
    createElement('p',eventConainer,'schedule',[''],[''],'','','none scheduled');

}
function latestVideo(){
    let container = createElement('section',body,'latest',[''],[''],'','','')
    createElement('h1',container, '',[''],[''],['h1Text','up'],'','latest')
    let video = createElement('video',container,'latestvideo',[''],['click',stopVideo],'','','');
    createElement('source',video,'latestVideo',['src','./img/video.mp4','controls',"''"],[''],'','','');
    createElement('h1',container, '',[''],[''],['h1Text','down'],'','video')

    video.play();
    //video.controls();

}
function stopVideo(){
    let video = document.getElementById('latestvideo');
    if(!video.paused){

        video.pause();
    }else{
        video.play();
    }
    
}
function socialLinks(){
    let socialLinksConatainer = createElement('section',body,'socialLinksContainer',[''],[''],'','','')
    createElement('p',socialLinksConatainer,'moreSays',[''],[''],'','','more');
    createElement('div',socialLinksConatainer,'underline',[''],[''],'','','');
    let linksContainer = createElement('div',socialLinksConatainer,'linksContainer',[''],[''],'','','');
    createElement('img',linksContainer,'spotify',['src','./img/spotify.png'],[''],'','','')
    createElement('img',linksContainer,'soundCloud',['src','./img/soundcloud.png'],[''],'','','')
    createElement('img',linksContainer,'youtube',['src','./img/youtube.png'],[''],'','','')
    createElement('img',linksContainer,'instagram',['src','./img/instagram.png'],[''],'','','')
}
function home(){
    let homeContainer = createElement('div',body,'video',[''],[''],'','');
    let videoContainer = createElement('div',homeContainer,'videoContainer',[''],[''],'','');
    let controlsContainer = createElement('div',homeContainer,'controlsContainer',[''],[''],'','');
    createElement('img',videoContainer,'logo',['src','./img/logo.png','alt','LogoMissing'],[''],'','');
    createElement('img',videoContainer,'showCase',['src','./img/firstPicture.jpg','alt','LogoMissing'],[''],'','');
    //let video = createElement('video',videoContainer,'videos',['preload','metadata'],[''],'','','');
    //createElement('source',video,'videos',['src','./img/video.mp4'],[''],'','','');
    createWave(videoContainer,'wave1')
    createWave(controlsContainer,'wave2')
    let logoContainer = createElement('section',controlsContainer,'logoAndNameContainer',[''],[''],'','','');
    createElement('h5',logoContainer,'',[''],[''],['songName'],'','Isabella');
    createElement('img',logoContainer,'imgSong',['src','./img/songPic.png','alt','SongMissing'],[''],'','')
    let ctrContainer = createElement('div',controlsContainer,'divCtrl',[''],[''],'','','');
    let lineAndPingContainer =  createElement('section',ctrContainer,'lineAndPing',[''],[''],['video-progress'],'','');
    createElement('div',lineAndPingContainer,'',[''],[''],['line'],'','')
    createElement('div',lineAndPingContainer,'seek',[''],[''],['ping'],'','')
    let btns = createElement('section',ctrContainer,'btns',[''],[''],'','','');
    createElement('img',btns,'',['src','./img/back.png'],['click',previousSong],'','','')
    let song= createSong(controlsContainer)
    createElement('img',btns,'play',['src','./img/play-button.png'],['click',playSong],'','','')
    createElement('img',btns,'paused',['src','./img/paused.png'],['click',playSong],['hidden'],'','')
    createElement('img',btns,'',['src','./img/next.png'],['click',nextSong],'','','')
    let timeGoing = createElement('section',controlsContainer,'timeContainer',[''],[''],'','','')
    createElement('time',timeGoing,'time-elapsed',[''],[''],'','','00:00')
    createElement('span',timeGoing,'',[''],[''],'','','/')
    createElement('time',timeGoing,'duration',[''],[''],'','','03:00')

}
function playSong(ele){
    let audio = document.getElementById('audio');
    let pausedBtn = document.getElementById('paused');
    let playBtn = document.getElementById('play');

    console.log(pausedBtn);
    if(ele.currentTarget.id == playBtn.id){
        audio.play()
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
    playBtn.classList.toggle('hidden')
    pausedBtn.classList.toggle('hidden');
    //ele.currentTime = 0 ;
   // ele.src = '';
   console.log(audio.querySelector('source').src)

}
function nextSong(){
    let audio = document.getElementById('audio');
   console.log(audio.querySelector('source').src)

    audio.src = './img/isabella.mp3';
    audio.play()
}
function previousSong(){
    let audio = document.getElementById('audio');
   console.log(audio.querySelector('source').src)

    audio.src = './img/fifty.mp3';
    audio.play()
}
function createNavBar(){
    let navBar = createElement('div',body,'navBar',[''],[''],'','');
    createElement('a',navBar,'',['href','#video'],[''],['navBarLink'],'','video');
    createElement('a',navBar,'',['href','#eventContainer'],[''],['navBarLink'],'','events');
    createElement('a',navBar,'',['href','#songContainer'],[''],['navBarLink'],'','music');
    createElement('a',navBar,'',['href','#AboutUs'],[''],['navBarLink'],'','about us');
    createElement('a',navBar,'',['href','#Booking'],[''],['navBarLink'],'','contact');
    createElement('div',navBar,'',[''],[''],['navBarBackground'],'');
 

}
function createElement(type, parent, id, attributeArr,
    eventListenerArr, classArr, action, context) {

    let container = document.createElement(type);
    while(attributeArr.length > 0){
        let href = attributeArr.shift();
        let path = attributeArr.shift();
        if (href !== undefined && path !== undefined) {
            container.setAttribute(href, path)
        }
    }

    if (context !== '') {
        container.textContent = context;
    }
    if (id !== '') {
        container.id = id;
    }
    
    while (classArr.length > 0 && classArr !== '') {
        container.classList.add(classArr.shift())
    }

    if (eventListenerArr !== '') {
        let event = eventListenerArr.shift();

        while (eventListenerArr.length > 0) {
            container.addEventListener(event, eventListenerArr[0]);
            eventListenerArr.shift();
        }
    }

    if (action == 'push') {
        parent.push(container)
    } else {
        parent.appendChild(container)
    }

    return container
}
function createSong(parent){
 let audio = createElement('audio',parent,'audio',[''],[''],'','','');
    createElement('source',audio,'',['src','./img/benzin-ft-migidi-mansa-official-video.mp3'],[''],'','','')
    return audio
}
