// var form = document.getElementById('addForm');
// var itemList=document.getElementById('items');
// form.addEventListener('submit',additem);
// var newItem= document.getElementById('items').value;
// var li = document.createElement('li');
// li.className='list-group-item';
// li.appendChild(document.createTextNode(newItem));
// var delBtn=document.createElement('button');
// delBtn.className='btn btn-danger btn-sm float-right delete';
// delBtn.appendChild(document.createTextNode('x'));
// li.appendChild(delBtn);
// itemList.appendChild(li);
// itemList.addEventListener('click', removeItem);
// function removeItem(e){
//     if(e.target.classList.contains('delete')){
//         if(confirm('Are you sure you want to delete this item?')){
//             var li=e.target.parentelement;
//             itemList.removeChild(li);
//         }
//     }
// }



var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
// Form submit event
form.addEventListener('submit',addItem);
// Delete event
itemList.addEventListener('click',removeItem);
// Add item
function addItem(e){
  e.preventDefault();
  // Get input value
 var newItem=document.getElementById('item').value;
  // Create new li element
  var li=document.createElement('li');
  // Add class
  li.className='list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  // Create del button element
  var deleteBtn=document.createElement('button');

// Append text node
deleteBtn.appendChild(document.createTextNode('X'));
// Append button to li
li.appendChild(deleteBtn);
// Append li to list
itemList.appendChild(li);
}
9// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
         var li=e.target.parentElement;
         itemList.removeChild(li);
      }
    }
}


// adding Filter

var filter = document.getElementById('filter');
// filterelement
filter.addEventListener('keyup',filterItem);
function filterItem(e){
  var text=e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    var itemName=item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display='block';
    }else{
      item.style.display='none';
    }
  });

}



