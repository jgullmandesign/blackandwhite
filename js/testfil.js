/*=============================================================================
  Prototype kod för att testa skall vara under denna linje
  Under utveckling, skall bli att man ser vilken fotograf som har
  tagit bilden.
  
  Denna kod skall klistras in längst ner i image.js filen
  =============================================================================*/

    var imageListNew = [];
    var tempName = [];
    var one = [];


  for(var i = 0; i < photoG.length; i++){
    tempName = [photoG[i].name];
    imageListNew.push(tempName.push(photoG[i].images));
    for(var j = 0; j < 1 ; j++){
      one.push(tempName);
    }
  }

    
    var findPhotographer = photoG;
    var photographersName = [];
    var photographersImages = [];
    var photographersProperty = [];

    for(var i = 0; i < findPhotographer.length; i++){
      photographersName.push(findPhotographer[i].name);
    }

    for(var i = 0; i < findPhotographer.length; i++){
      photographersImages.push(findPhotographer[i].images);
    }

    for(var i = 0; i < photographersName.length; i++){
      photographersProperty.push([photographersName[i]].concat(photographersImages[i]));
    }
    
    
    var imgNew = [];
    var photogNew = [];

    for (var i = 0; i < photographersProperty.length; i++){
      for (var j = 1; j < photographersProperty[i].length; j++){
       imgNew.push(photographersProperty[i][j]); 
      }
    }


    for (var i = 0; i < photographersProperty.length; i++){
      for (var j = 1; j < photographersProperty[i].length; j++){
       photogNew.push(photographersProperty[i][j]); 
      }
    }

    imgNew.shuffle();

  
  /*===========================================================================*/