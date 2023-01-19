export const switchTech = (param,lang,arr) => {
  switch (param) {
    case 'React': 
      if (lang === true){
        return arr.reactES
      } else {
        return arr.reactEN
      }
    
    case 'Javascript': {
      if (lang === true){
        return arr.javascriptES
      } else {
        return arr.javascriptEN
      }
    } 
    case 'HTML' : {
      if (lang === true){
        return arr.htmlcssES
      } else {
        return arr.htmlcssEN
      }
    }
    case 'CSS' : {
      if (lang === true){
        return arr.htmlcssES
      } else {
        return arr.htmlcssEN
      }
    }
    case 'SQL' : {
      if (lang === true){
        return arr.sqlES
      } else {
        return arr.sqlEN
      }
    }
    case 'MongoDB' : {
      if (lang === true){
        return arr.mongoES
      } else {
        return arr.mongoEN
      }
    }
    default :
      if (lang === true){
        return arr.reactES
      } else {
        return arr.reactEN
      }
  }
}

export const resetAnimations = () => {
  const paragraph = document.getElementById('techPara')

  paragraph.animate([
    {
      opacity: 0,
      color: "#fff"
    },
    {
      opacity: 1,
     color: "#000"
    }
  ], 1250)
}

export const resetAnimationsMain = () => {
  const paragraph = document.getElementById('mainPara')

  paragraph.animate([
    {
      opacity: 0,
      color: "#fff"
    },
    {
      opacity: 1,
     color: "#000"
    }
  ], 1250)
}