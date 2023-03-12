/*Объектом какого класса является document?
alert(document);

Какое место он занимает в DOM-иерархии?
lert(HTMLDocument.prototype.constructor === HTMLDocument); 

Наследует ли он от Node или от Element, или может от HTMLElement?
alert(HTMLDocument.prototype.constructor.name); // HTMLDocument
alert(HTMLDocument.prototype.__proto__.constructor.name); // Document
alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node
*/