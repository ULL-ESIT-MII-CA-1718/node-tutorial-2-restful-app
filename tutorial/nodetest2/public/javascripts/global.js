// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Username link click
		$('#userList table tbody').on('click', 'td a.linkshowuser', showUserInfo);
    // Populate the user table on initial page load
    populateTable();

});

// Functions =========================================

function addUser(user) {
  return `
<tr>
	<td>
     <a href="#" class="linkshowuser" rel="${user.username}"> ${user.username}</a>
  </td>
  <td>
    ${user.email}
  </td>
  <td>
     <a href="#" class="linkdeleteuser" rel="${user._id}">delete</a>
  </td>
</tr>
`;
}

// Fill table with data
function populateTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/userlist', function( data ) {
				// Stick our user data array into a userlist variable in the global object
				userListData = data;

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += addUser(this);
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);
    });
}

// Show User Info
function showUserInfo(event) {

    // Prevent Link from Firing
    event.preventDefault();

    // Retrieve username from link rel attribute
    var thisUserName = $(this).attr('rel');

    // Get Index of object based on id value
    var arrayPosition = userListData.map(function(arrayItem) { return arrayItem.username; }).indexOf(thisUserName);

   // Get our User Object
    var thisUserObject = userListData[arrayPosition];

    //Populate Info Box
    $('#userInfoName').text(thisUserObject.fullname);
    $('#userInfoAge').text(thisUserObject.age);
    $('#userInfoGender').text(thisUserObject.gender);
    $('#userInfoLocation').text(thisUserObject.location);

}
