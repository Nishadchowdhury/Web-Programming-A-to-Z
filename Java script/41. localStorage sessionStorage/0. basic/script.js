const petCookie = name => {
     const cookie =  document.cookie;
     const allCookie = cookie.split('; ');
     const findCookie = allCookie.find(singleCoockie => singleCoockie.includes(name));
     if(findCookie){
          'country=US'
          const cookieNmaeValue = findCookie.split('=');
          return cookieNmaeValue[1];
     }
}