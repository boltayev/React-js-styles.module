async function getInfo(url){

    let res = await fetch(url)
    
    if (!res.ok){
        throw new Error("biror bir narsa xato junatildi")
    }

    return await res.json()
}

export default getInfo