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


export const  getPrevQuntity =(items:any,id:string)=>{

if (items.length>0) {
    items.filter((e: { id: any })=>e.id === id)
}
return []

}