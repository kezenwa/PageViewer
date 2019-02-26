var links = document.getElementsByTagName('a');
var imgs = document.getElementsByTagName('img');
var videos = document.getElementsByTagName('video');
var scripts = document.getElementsByTagName('script');
var iframes = document.getElementsByTagName('iframe');
//console.log(imgs);

//https://stackoverflow.com/questions/27508086/how-to-sort-images-by-dimension
//var aimgs = [].slice.call(imgs0); // convert into a real array

//var imgs = aimgs.sort(function (a, b) {
//	var aArea = a.naturalWidth * a.naturalHeight,
//	    bArea = b.naturalWidth * b.naturalHeight;
//  	return bArea - aArea;
//});

var s = '<html>\n<head><title>PageViewer</title>\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>\n<style>\nbutton { padding:5px; }\nbutton::-moz-focus-inner { border:none; }\n.categoryDisSelected { border:none; background:none; }\n.categorySelected { color:white; border:1px solid black; background:gray; font-weight:bold; }\na { text-decoration:none; }\ntable { border:1px solid black; border-spacing:0px; }\n.list td:first-child { white-space:nowrap; text-align:center; }\nth { position:sticky; top:0px; background:#ccc; border:1px solid black; padding:10px; }\ntd { border:1px solid black; padding:10px; }\nimg { max-width:100%; }\n#category { padding:10px; }\n#list_image td:nth-child(3) { white-space:nowrap; text-align:center; }\n</style>\n</head>\n<body>\n<div id="category"><button id="show_info" class="category">Infomation</button> <button id="show_link" class="category">Link(' + links.length + ')</button> <button id="show_image" class="category">Image(' + imgs.length + ')</button> <button id="show_video" class="category">Video(' + videos.length + ')</button> <button id="show_script" class="category">Script(' + scripts.length + ')</button> <button id="show_iframe" class="category">iframe(' + iframes.length + ')</button></div>\n';
s += '<table id="list_info" class="list">\n';
s = s + '<tr><td>URL</td><td>' + window.location + '</td></tr>\n';
s = s + '<tr><td>Host</td><td>' + window.location.host + '</td></tr>\n';
s = s + '<tr><td>Title</td><td>' + document.title + '</td></tr>\n';
s = s + '<tr><td>CharSet</td><td>' + document.characterSet + '</td></tr>\n';
s = s + '<tr><td>LastModified</td><td>' + document.lastModified + '</td></tr>\n';
var metas = document.getElementsByTagName('meta');
for(i=0; i<metas.length; i++){
	if(metas[i].name != ""){
		s = s + '<tr><td>' + metas[i].name + '</td><td>' + metas[i].content + '</td></tr>\n';
	}else if(metas[i].getAttribute('http-equiv') != ""){
		s = s + '<tr><td>' + metas[i].getAttribute('http-equiv') + '</td><td>' + metas[i].content + '</td></tr>\n';
	}
}
s += '</table>\n';
s += '<table id="list_link" class="list">\n<tr><th>ID</th><th>Text</th><th>Link</th></tr>\n';
for(i=0; i<links.length; i++){
	s = s + '<tr><td>' + (i+1) + '</td><td>' + links[i].innerHTML + '</td><td><a href="' + links[i].href + '">' + links[i].href + '</a></td></tr>\n';
}
s += '</table>\n';
s += '<table id="list_image" class="list">\n<tr><th>ID</th><th>Image</th><th>Size</th></tr>\n';
for(i=0; i<imgs.length; i++){
	s = s + '<tr><td>' + (i+1) + '</td><td><img src="' + imgs[i].src + '"><br>' + imgs[i].src + '</td><td>' + imgs[i].naturalWidth + ' X ' + imgs[i].naturalHeight +'</td></tr>\n';
}
s += '</table>\n';
s += '<table id="list_video" class="list">\n<tr><th>ID</th><th>Video</th><th>Size</th></tr>\n';
for(i=0; i<videos.length; i++){
	s = s + '<tr><td>' + (i+1) + '</td><td><video src="' + videos[i].src + '" controls="controls"></td><td>' + videos[i].videoWidth + ' X ' + videos[i].videoHeight + '</td></tr>\n';
}
s += '</table>\n';
s += '<table id="list_script" class="list">\n<tr><th>ID</th><th>Script</th></tr>\n';
for(i=0; i<scripts.length; i++){
	if(scripts[i].src == ''){
		s = s + '<tr><td>' + (i+1) + '</td><td>' + scripts[i].textContent.replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</td></tr>\n';
	}else{
		s = s + '<tr><td>' + (i+1) + '</td><td><a href="' + scripts[i].src + '">' + scripts[i].src + '</a></td></tr>\n';
	}
}
s += '</table>\n'
s += '<table id="list_iframe" class="list">\n<tr><th>ID</th><th>iframe</th></tr>\n';
for(i=0; i<iframes.length; i++){	
	s = s + '<tr><td>' + (i+1) + '</td><td><a href="' + iframes[i].src + '">' + iframes[i].src + '</a></td></tr>\n';	
}
s += '</table>\n'
s += '<script>\nfunction reset(){\n\tvar categorys = document.getElementsByClassName("category");\n\tfor(i=0; i<categorys.length; i++){\n\t\tcategorys[i].classList.remove("categorySelected");\n\tcategorys[i].classList.add("categoryDisSelected");\n\t}\n\tvar lists = document.getElementsByClassName("list");\n\tfor(i=0; i<lists.length; i++){\n\t\tlists[i].style.display = "none";\n\t}\n}\n\nreset();\n\ndocument.getElementById("show_info").onclick = function(){\n\treset();\n\tthis.classList.remove("categoryDisSelected");\n\tthis.classList.add("categorySelected");\n\tdocument.getElementById("list_info").style.display = "block";\n}\n\ndocument.getElementById("show_link").onclick = function(){\n\treset();\n\tthis.classList.remove("categoryDisSelected");\n\tthis.classList.add("categorySelected");\n\tdocument.getElementById("list_link").style.display = "block";\n}\n\ndocument.getElementById("show_image").onclick = function(){\n\treset();\n\t this.classList.remove("categoryDisSelected");\n\tthis.classList.add("categorySelected");\n\tdocument.getElementById("list_image").style.display = "block";\n}\n\ndocument.getElementById("show_video").onclick = function(){\n\treset();\n\tthis.classList.remove("categoryDisSelected");\n\tthis.classList.add("categorySelected");\n\tdocument.getElementById("list_video").style.display = "block";\n}\n\ndocument.getElementById("show_script").onclick = function(){\n\treset();\n\tthis.classList.remove("categoryDisSelected");\n\tthis.classList.add("categorySelected");\n\tdocument.getElementById("list_script").style.display = "block";\n}\n\ndocument.getElementById("show_iframe").onclick = function(){\n\treset();\n\tthis.classList.remove("categoryDisSelected");\n\tthis.classList.add("categorySelected");\n\tdocument.getElementById("list_iframe").style.display = "block";\n}\ndocument.getElementsByClassName("category")[0].click();</script>\n</body>\n</html>';
var blob = new Blob([s], { 'type': 'text/html' });
var url = URL.createObjectURL(blob);
if(imgs.length!=0){
//查看
window.open(url);
//下载
//var link = document.createElement('a');
//link.download = 'PageView.htm';
//link.href = url;
//link.click();
}