export const clorChangeAPI=  (enable:boolean=false)=>{


    const color:any = '#232329' 

    const background:any = {
        'background-color':''
    }

    if (enable) {
        background['background-color'] =color
    }
  return background
}