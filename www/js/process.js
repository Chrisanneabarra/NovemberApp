let content = <div className='page'>
<div data-page="media-lists" className="page">
  <div className="navbar">
    <div className="navbar-inner">
      <div className="center">Diary</div>
    </div>
  </div>
  <div className="page-content">
    <div className="content-block-title">Songs</div>
    <div className="list-block media-list">
      <ul id='my_list'>
 <li><a href="#" className="item-link item-content">
            <div className="item-inner">
              <div className="item-title-row">
              </div>
              <div className="item-text"></div>
            </div></a></li>
</ul>
	<div className='bottom'>
	<textarea id='contents'></textarea>
	<button onClick={add_list_content}>Add</button><button>Delete</button></div>
    </div>
  </div>
</div>
</div>;

    ReactDOM.render(content,document.getElementById('root'));


function add_list_content(){
		var count = 0;
		count = parseInt(count)+parseInt(1);

		var content = document.getElementById('contents').value;
		var entry = document.createElement('li');

		localStorage.setItem(count,content);
		var list = document.getElementById("my_list");
		entry.appendChild(document.createTextNode(content));
		list.appendChild(entry);
}