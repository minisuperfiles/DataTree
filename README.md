# DataTree
DataTree (Tree data handler). It's pure JavaScript framework and its handle large tree typies of data. dataTree is use to simple, fast and lite weight.
<h5>Example Code</h5>              
<pre><code>
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
<p>Give Array, It's use to load DataTree conent of the data.</p>
<h5>warning (Optional)</h5>
<p>It's booleen data type (true or false) and default value is true. confirm message control parameter. If given value is true, when try to delete data confirm popup asking 'Are sure to delete'. </p>
<h5>DataTree Methods</h5>
<h6><u>DataTree.getData()</u></h6>
<p>It's use to get data of DataTree and its retrun object. print to console log </p>
<h6><u>DataTree.render()</u></h6>
<p>It's use to reprint html element.</p>
<a target="_blank" href="https://minisuperfiles.blogspot.com/p/documentation.html?project=datatree" >More information (Demo)</a>
