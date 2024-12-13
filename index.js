let nivelDeXp = 500
let ranking = ""
let nomeDoPersonagem = "Kricked"

if(nivelDeXp < 1000){
    ranking = "Ferro"
    for(nivelDeXp < 1000; nivelDeXp < 1001; nivelDeXp += 1000){
    console.log("O Herói de nome " + nomeDoPersonagem + " está no nível " + ranking)
} 

}
if(nivelDeXp >= 1001 && nivelDeXp <= 2000){

    ranking = "Bronze"
    for(nivelDeXp <= 1001; nivelDeXp < 2000; nivelDeXp += 1000){
    console.log("O Herói de nome " + nomeDoPersonagem + " está no nível " + ranking)
    }
}
if(nivelDeXp >= 2001 && nivelDeXp <= 5000){
    ranking = "prata"
    for(nivelDeXp <= 2001; nivelDeXp < 5000; nivelDeXp += 3000){
        console.log("O Herói de nome " + nomeDoPersonagem + " está no nível " + ranking)
        }   
}
if(nivelDeXp >= 5001 && nivelDeXp <= 7000){
    ranking = "ouro"
    for(nivelDeXp <= 5001; nivelDeXp < 7000; nivelDeXp += 2000){
        console.log("O Herói de nome " + nomeDoPersonagem + " está no nível " + ranking)
        }   
}
if(nivelDeXp >= 7001 && nivelDeXp < 8000){
    ranking = "Platina"
    for(nivelDeXp <= 7001; nivelDeXp < 8000; nivelDeXp += 1000){
        console.log("O Herói de nome " + nomeDoPersonagem + " está no nível " + ranking)
        }   
}
if(nivelDeXp >= 8001 && nivelDeXp < 9000){
    ranking = "Ascendente"
    for(nivelDeXp <= 8001; nivelDeXp < 9000; nivelDeXp += 1000){
        console.log("O Herói de nome " + nomeDoPersonagem + " está no nível " + ranking)
        } 
}
if(nivelDeXp >= 9001 && nivelDeXp < 10000){
    ranking = "Imortal"
    for(nivelDeXp <= 9001; nivelDeXp < 10000; nivelDeXp += 1000){
        console.log("O Herói de nome " + nomeDoPersonagem + " está no nível " + ranking)
        } 
}
if(nivelDeXp >= 10000){
    ranking = "Radiante"
    console.log("O Herói de nome " + nomeDoPersonagem + " está no nível " + ranking)
}

