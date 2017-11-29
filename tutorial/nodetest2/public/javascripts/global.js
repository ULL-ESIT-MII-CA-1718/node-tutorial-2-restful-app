// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

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

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += addUser(this);
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);
    });
};
