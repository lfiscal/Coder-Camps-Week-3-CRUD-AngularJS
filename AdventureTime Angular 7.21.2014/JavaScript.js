function ATController($scope, $http) {
    /*-------------------------PCharacter Arrays---------------------------------------------------------------------*/
    $scope.ckcitizen = [];
    $scope.fkcitizen = [];
    $scope.ikcitizen = [];
    $scope.lscitizen = [];
    /*-------------------------Add Character Function---------------------------------------------------------------------*/
    $scope.addCharacter = function (name, kingdom) {
        if (kingdom === "Candy Kingdom") {
            $scope.ckcitizen.push({ name: name, kingdom: kingdom });
            $scope.name = "";
            $scope.kingdom = "";
        }
        else if (kingdom === "Lumpy Space") {
            $scope.lscitizen.push({ name: name, kingdom: kingdom });
            $scope.name = "";
            $scope.kingdom = "";
        }
        else if (kingdom === "Fire Kingdom") {
            $scope.fkcitizen.push({ name: name, kingdom: kingdom });
            $scope.name = "";
            $scope.kingdom = "";
        }
        else if (kingdom === "Ice Kingdom") {
            $scope.ikcitizen.push({ name: name, kingdom: kingdom });
            $scope.name = "";
            $scope.kingdom = "";
        }

    }
    /*-------------------------POST FUNCTIONS + CALLS---------------------------------------------------------------------*/
    $scope.sendtoCandyKingdom = function (character) {
        $http.post("https://landofooo.firebaseio.com/CandyKingdom/.json", character)
        .success(function (data, status, headers, config) {
            alert("Mathematical!!" + data)
        })
    .error(function (data, status, headers, config) {
        alert("Didn't Work Dude" + data);
    });
    }
    $scope.sendtoFireKingdom = function (character) {
        $http.post("https://landofooo.firebaseio.com/FireKingdom/.json", character)
        .success(function (data, status, headers, config) {
            alert("Mathematical!!" + data)
        })
    .error(function (data, status, headers, config) {
        alert("Didn't Work Dude" + data);
    });
    }
    $scope.sendtoIceKingdom = function (character) {
        $http.post("https://landofooo.firebaseio.com/IceKingdom/.json", character)
        .success(function (data, status, headers, config) {
            alert("Mathematical!!" + data)
        })
    .error(function (data, status, headers, config) {
        alert("Didn't Work Dude" + data);
    });
    }
    $scope.sendtoLumpySpace = function (character) {
        $http.post("https://landofooo.firebaseio.com/LumpySpace/.json", character)
        .success(function (data, status, headers, config) {
            alert("Mathematical!!" + data)
        })
    .error(function (data, status, headers, config) {
        alert("Didn't Work Dude" + data);
    });
    }
    /*-------------------------GET CALLS---------------------------------------------------------------------*/
    $http.get("https://landofooo.firebaseio.com/CandyKingdom/.json")
    .success(function (data) {
        for (var x in data) {
            data[x].key = x
            $scope.ckcitizen.push(data[x]);
        }
    })
    $http.get("https://landofooo.firebaseio.com/IceKingdom/.json")
.success(function (data) {
    for (var x in data) {
        data[x].key = x
        $scope.ikcitizen.push(data[x]);
    }
})
    $http.get("https://landofooo.firebaseio.com/FireKingdom/.json")
.success(function (data) {
    for (var x in data) {
        data[x].key = x
        $scope.fkcitizen.push(data[x]);
    }
})
    $http.get("https://landofooo.firebaseio.com/LumpySpace/.json")
      .success(function (data) {
          for (var x in data) {
              data[x].key = x
              $scope.lscitizen.push(data[x]);
          }
      })
    .error(function (data, status) {
        alert("Error on GET" + data)
    });

    /*-------------------------DELETE CALLS---------------------------------------------------------------------*/
    $scope.bootFromCandyKingdom = function (character) {
        $http.delete("https://landofooo.firebaseio.com/CandyKingdom/"+character.key+"/.json")
        .success(function () {
            var i = $scope.ckcitizen.indexOf(character);
            $scope.ckcitizen.splice(i, 1);
        })
        .error(function () {
            alert("Didn't Work!");
        })
    }
    $scope.bootFromFireKingdom = function (character) {
        $http.delete("https://landofooo.firebaseio.com/FireKingdom/" + character.key + "/.json")
        .success(function () {
            var i = $scope.fkcitizen.indexOf(character);
            $scope.fkcitizen.splice(i, 1);
        })
        .error(function () {
            alert("Didn't Work!");
        })
    }
    $scope.bootFromIceKingdom = function (character) {
        $http.delete("https://landofooo.firebaseio.com/IceKingdom/" + character.key + "/.json")
        .success(function () {
            var i = $scope.ikcitizen.indexOf(character);
            $scope.ikcitizen.splice(i, 1);
        })
        .error(function () {
            alert("Didn't Work!");
        })
    }
    $scope.bootFromLumpySpace = function (character) {
        $http.delete("https://landofooo.firebaseio.com/LumpySpace/" + character.key + "/.json")
        .success(function () {
            var i = $scope.lscitizen.indexOf(character);
            $scope.ckcitizen.splice(i, 1);
        })
        .error(function () {
            alert("Didn't Work!");
        })
    }
    /*-------------------------UPDATE CALLS---------------------------------------------------------------------*/
    $scope.updateCandyPerson = function (character) {
        $http({ method: 'PATCH', url: "https://landofooo.firebaseio.com/CandyKingdom/" + character.key + "/.json", data: character })
        .success(function (data, status, headers, config) {
            alert("Mathematical!!" + data)
        })
        .error(function (data, status, headers, config) {
            alert("Didn't Work Dude" + data);
        });
    }
    $scope.updateFirePerson = function (character) {
        $http({ method: 'PATCH', url: "https://landofooo.firebaseio.com/FireKingdom/" + character.key + "/.json", data: character })
        .success(function (data, status, headers, config) {
            alert("Mathematical!!" + data)
        })
        .error(function (data, status, headers, config) {
            alert("Didn't Work Dude" + data);
        });
    }
    $scope.updateIcePerson = function (character) {
        $http({ method: 'PATCH', url: "https://landofooo.firebaseio.com/IceKingdom/" + character.key + "/.json", data: character })
        .success(function (data, status, headers, config) {
            alert("Mathematical!!" + data)
        })
        .error(function (data, status, headers, config) {
            alert("Didn't Work Dude" + data);
        });
    }
    $scope.updateLumpyPerson = function (character) {
        $http({ method: 'PATCH', url: "https://landofooo.firebaseio.com/LumpySpace/" + character.key + "/.json", data: character })
        .success(function (data, status, headers, config) {
            alert("Mathematical!!" + data)
        })
        .error(function (data, status, headers, config) {
            alert("Didn't Work Dude" + data);
        });
    }
}