export const switchTech = (param,lang,arr) => {
  switch (param) {
    case 'React': 
      if (lang === true){
        return arr.reactES
      } else {
        return arr.reactEN
      }
    
    case 'Javascript': {
      console.log('Javascript')
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