"use strict";
var Colors;
(function (Colors) {
    Colors["preto"] = "#000000";
    Colors["branco"] = "#FFFFFF";
})(Colors || (Colors = {}));
console.log(Colors.branco);
var Perm;
(function (Perm) {
    Perm[Perm["ADMIN"] = 0] = "ADMIN";
    Perm[Perm["USER"] = 1] = "USER";
})(Perm || (Perm = {}));
console.log(Perm.USER);
