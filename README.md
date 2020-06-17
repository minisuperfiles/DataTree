# DataTree
It's a pure JavaScript framework and it handles large tree types of data. dataTree is used to simple, fast, and lite weight. CRUD (Create, Read, Update, Delete) options available.
<h5>Example Code</h5>              
<pre><code>
&lt;script src="DataTree.js"&gt;&lt;/script&gt;
&lt;link href="DataTree.css"&gt;
&lt;div id="datatree"&gt;&lt;/div&gt;
&lt;script&gt;
var tree= new DataTree(
  document.querySelector('#datatree'),
  {name:'Creatures',d:[
    {name:'Animals',d:[]},
    {name:'Humans',
        d:[{name:'Women',d:[]}, {name:'Men',d:[]}]
    },
    {name:'Brids',d:[]}
  ]}
);
&lt;/script&gt;
 </code></pre>
 <h5>Syntax (parameter)</h5>
 <pre><code>
new DataTree(element)
new DataTree(element,data)
new DataTree(element,data,warning)

data = { name: 'name', d[ { name: 'name', d[{...}] ,...}] }
</code></pre>
                
<h5>element</h5>
<p>Give DOM element, this element is target place to create DataTree.</p>
<h5>data (Optional)</h5>
<p>Give object, It's use to load DataTree conent of the data.</p>
<h5>warning (Optional)</h5>
<p>It's booleen data type (true or false) and default value is true. confirm message control parameter. If given value is true, when try to delete data confirm popup asking 'Are sure to delete'. </p>
<h5>DataTree Methods</h5>
<dl><dt><code>DataTree.getData()</code><dt>
<dd>It's use to get data of DataTree and its retrun object. <ul>
<li><b>code</b> : <code>tree.getData();</code></li></ul></dd><dt><code>DataTree.render()</code><dt>
<dd>It's use to reprint html element.<ul><li><b>code</b> : <code>tree.render();</code></li></ul></dd></dl>

<a target="_blank" href="https://minisuperfiles.blogspot.com/p/documentation.html?project=datatree" >View Documentation (Demo)</a>
<p>Learn more about in <a target="_blank" href="https://minisuperfiles.blogspot.com" >minisuperfiles.blogspot.com</a></p>
