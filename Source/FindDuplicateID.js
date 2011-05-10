/*
---
description: Finds all the id's that are duplicate. 

license: MIT-style

authors:
- Jean-Nicolas Boulay Desjardins (http://jean-nicolas.name)
- Eneko Alonso: (http://enekoalonso.com) 

requires:
 - core/1.3:   '*'

provides:
 - FindDuplicateID

...
*/

var FindDuplicateID = new Class({

	initialize: function(id){ 
		var idList = {};
		var nodes = document.getElementsByClassName('');
		for (var i in nodes) {
			if (!isNaN(i) && nodes[i].id) {
				idList[nodes[i].id] = idList[nodes[i].id]? idList[nodes[i].id]+1:1;
			}
		}
	
		for (var id in idList) {
			if (idList[id] > 1) return id;
		}
	}

});
