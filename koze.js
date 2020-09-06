window.onload = function() {

    
    
    //create a set of words with letters and Rank of the word, not randomized
    //try catch to continue the flow but not interrupt the process
    function createSet (dict,setLength,rank,letters) {
        
        let i = 0;
        let createdSet = [];
        
        while(i<setLength-1){
            console.log("the letter : "+letters[i]+", the rank : "+rank[i]) //a[0][1];
            //create the string "dict"+letters[i]+"["+rank[i]+"]";
            try {
            createdSet.push(dict[letters[i]][rank[i]])
            }
            catch(err) {
                console.log(err+": word with letter "+letters[i]+" and "+rank[i]+" is undefined")
            }
            i++;
        }
        createdSet.push(dict["W"][1]);
        return createdSet;
    }

    //verify if there is not a undefined value in the set
    function verifySet (dict) {
        let i = 0;
        let err= [];
        while(i< dict.length){
            if(dict[i]== undefined){
                err.push(i);
            }
            i++;
        }
        return err;
    }
    //create an error message
    function errorSet (err,letters) {
        let messageSet = "Set is clean"
        let i = 0;
        if(err.length>0){
            messageSet = "these indexes have an issue : "
            while(i<err.length){
                messageSet += "letter is "+letters[i]+" and index "+err[i];
                if( i<err.length-1){
                    messageSet +=", ";
                }
                i++;
            }
        }
        
        return messageSet;
    }
    //count elements in array
    function countElements (array) {
        let i = 0;
        while (array[i] !== undefined) {
            i++;
        }
        return i;
    }


    const dict = { 
                    "A" : [
                        {
                            "eng":"Achieve",
                            "fr" :"Réussir" ,
                            "seen" :false
                        },
                        
                        {
                            "eng":"Apply",
                            "fr" : "Candidater",
                            "seen" : true
                        },

                        {
                            "eng":"Alert",
                            "fr" : "Alerte",
                            "seen" : false
                        }

                        
                    ],
                    
                    "B" : {
                    
                        "Bean" : "Haricot",
                        "Bargain" : "Marchander",
                        "Build" : "Construire",
                    },
                    
                    "C" : {
                        "Cake" : "Gateau",
                        "Care" : "Prendre Soin",
                        "Crowdfunding": "financement participatif",
                    },
                    
                   "D" : {
                        "Debt" : "Dettes",
                        "Duty": "Devoir",
                        "Dessert" : "Dessert",
                    },
                    
                    
                    "E" : {
                        "Excuse Me" :"Pardon",
                        "Eat" : "Manger",
                        "Economics":"Economy"
                    },
                    
                    "F" : {
                        "Fly" : "Voler",
                        "Flat" : "appartement",
                        "Flavour" : "saveur",
                    },
                    
                    "G" : {
                        "Growth" : "Croissance",
                        "Gather" : "Rassembler",
                        "Gamble" : "Parier",
                        "Garlic" : "Gingembre",
                    },
                    
                    "H" : {
                        "Haste" : "Se hâter",
                        "Ham" : "Jambon",
                        "Harm" : "Blesser"
                    },
                    
                    "I" : {
                        "Interrupt" :"Intérompre",
                    },
                    
                    "L" : {
                        "Lemon" : {
                            "french":"Citron",
                            "seen" : "true",
                        },
                        "Loom" : "Se profiler",
                    },
                    "M" : {
                        "Merge": "Fusionner",
                        "Mango" : "Mangue",
                        "Miss" : "Manquer",
                    },
                    
                    "N" : {
                        "Nuts" : "Noix",
                        "Nurture" : {
                            "french":"Elever",
                            "seen" : "true",
                        },
                    },
                    
                    "O" : {
                        1 : {
                            "eng":"Outlook",
                            "fr" :"Perspective",
                            "seen" : false,
                        },
                        0 : {
                            "eng":"Open",
                            "fr" : "Ouvrir",
                            "seen" : false
                        },
                    },

                    
                    
                    "P" : {
                    
                    1 : {
                        "eng":"Pineapple",
                        "fr" :"ananas",
                        "seen" :false,
                    },
                    0 : {
                        "eng":"Piece",
                        "fr" : "part",
                    },

                    3 : {
                        "eng":"Poll",
                        "fr" : "voter",
                        "seen" : false
                    },
                     2 : {
                         "eng" : "PLumet",
                        "fr":"Dégringoler",
                        "seen" : true,
                        },
                    },
                    
                    
                    
                    "R" : {
                        0 : {
                            "eng": "Recession" ,
                            "fr": "Récession",
                            "seen" :false
                        },
                        "Ride" : "Rouler/Monter",
                        1 : {
                            "eng" : "Rice",
                            "french":"Riz",
                            "seen" : true,
                        },
                        
                    },
                    
                    "S" : {
                        0 : {
                            "eng": "Salt",
                            "fr":"Sel",
                            "seen" : true,
                        },

                        1 : {
                            "eng":"Swim",
                            "fr" : "Nager",
                            "seen" :false,
                        },

                        2 : {
                            "eng":"Slide",
                            "fr" : "glisser",
                            "seen" : false,
                        },
                        
                        
                        3 : {
                            "eng":"Seem",
                            "fr" : "Paraître",
                            "seen" :false
                        }
                       
                    },
                    
                    
                    "T" : {
                        0 : {
                            "eng":"Turn",
                            "fr" : "Tourner"
                        },
                        1 : {
                            "eng": "Tomato",
                            "fr" : "Tomate"
                        },
                        2 : {
                            "eng":"Tumble",
                            "fr" : "Dégringoler"
                        },
                    },
                    
                    "U" : {
                        0 : {
                            "eng":"Urge",
                            "fr" : "Pressant",
                            "seen" :"none"
                        },
                        1 : {
                            "eng":"Unite",
                            "fr" : "Unir",
                        }
                        
                    },
                    
                    "V" : {
                        0 : { 
                            "eng":"Venture",
                            "fr" : "Capital",
                            "seen" : false
                        }
                    },
                    
                    
                
                    "W" : [
                            {
                                "id" : 2,
                                "eng" : "Word",
                                "fr"  : "mot",
                                "seen" : true
                            },

                            {
                                "id" : 0,
                                "eng" : "Wild",
                                "fr":"Sauvage",
                                "seen" : true,
                            },
                        ],
                        
                    }

    



    
    
    const write = document.getElementById("write");
    write.style.display="none";
    const message = document.getElementById("message");
    message.style.display="block";
    const read = document.getElementById("read");
    read.style.display="none";

    const setLength = 20; 
    const letters = ["A","O","R","S","T","U","R","W","S","O","A","O","R","S","T","U","W","S","T","U"]//lettres
    const rank = [0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0];//rang

    console.log("there is "+countElements(letters)+" letters");
    console.log("there is "+countElements(rank)+" ranks\n");
    const newSet= createSet(dict,setLength,rank,letters);
    console.log("this is the first set : "+newSet)


    //console.log('first word is '+dict.W[0].eng+' which means '+dict.W[0].fr)
    const indexErrors = verifySet(newSet);
    console.log(errorSet(indexErrors,letters));
    
    const button_message = document.getElementsByClassName("button_message")[0];
    button_message.onclick = readProcess;//linked
   
    
    const word = document.getElementsByClassName("word")[0];
    const trad = document.getElementsByClassName("trad")[0];


   

    // after that I can Launch the process
    //Defiling the words
    
    
    function readProcess(){//works and so far isolated 070920
        message.style.display ="none";
        read.style.display ="block";
        var i =0;
        let readProcess=setInterval(function(){ 
            console.log(i);
            word.innerHTML= newSet[i].eng;
            trad.innerHTML= newSet[i].fr;
            i++; 
                if(i==newSet.length){
                    clearInterval(readProcess);
                    console.log("END OF GAME");
                    message.style.display ="block";
                    read.style.display ="none";
                }
                
            }, 200); 
        
    }
   
   console.log(HTMLButtonElement.onclick)

    /*process = SetInterval ( func(){
    ....opérations;
    ...clearInterval(process)// clearInterval lors d'un process qui s'arrete seul doit être dans la function

    } , 1000 )
    */
    

    
}