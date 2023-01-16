//Search
function BtnSearch(SearchFilterName, ListAddress) {
    $("#overlay").fadeIn(300);
    var NameList = String(SearchFilterName).split(",");
    var NameListParam = "";
    NameListParam += "?pageid=1";
    for (var i = 0; i < NameList.length; i++) {
        var value = $("#" + NameList[i]).val();
        NameListParam += "&" + NameList[i] + "=" + value;
    }
    $.get(ListAddress + NameListParam, function (result) {
        $("#pat").html(result);
        $("#overlay").fadeOut(300);
    });

}

//Create In Modal
function BtnCreate(Address) {
    $.get(Address, function (result) {
        $(".modal-content").html(result);
        $("#overlay").fadeOut(300);
    });
}

//Edit In Modal
function BtnEdit(Address, id) {
    $.get(Address + `/${id}`, function (result) {
        $(".modal-content").html(result);
        $("#overlay").fadeOut(300);
    });
}


//Delete In Modal
function BtnDelete(id, title, link) {
    $("#overlay").fadeIn(300);
    $.get(link + "?Id=" + id + "&Title=" + title + "&Link=" + link, function (result) {
        $(".modal-content").html(result);
        $("#overlay").fadeOut(300);
    });
}

//Delete Post
function BtnDeletePost(link) {
    $("#overlay").fadeIn(300);
    $.post(link, function () {
        window.location.reload();
    });
}

//Paging
function Page(number, SearchFilterName, ListAddress) {
    $("#overlay").fadeIn(300);
    var NameList = String(SearchFilterName).split(",");
    var NameListParam = "";
    NameListParam += "?pageid=" + number;
    for (var i = 0; i < NameList.length; i++) {
        var value = $("#" + NameList[i]).val();
        NameListParam += "&" + NameList[i] + "=" + value;
    }
    $.get(ListAddress + NameListParam, function (result) {
        $("#pat").html(result);
        $("#overlay").fadeOut(300);
    });

}
function pageup(number, SearchFilterName, ListAddress) {
    $("#overlay").fadeIn(300);
    var NameList = String(SearchFilterName).split(",");
    var NameListParam = "";
    NameListParam += "?pageid=" + number;
    for (var i = 0; i < NameList.length; i++) {
        var value = $("#" + NameList[i]).val();
        NameListParam += "&" + NameList[i] + "=" + value;
    }
    $.get(ListAddress + NameListParam, function (result) {
        $("#pat").html(result);
        $("#overlay").fadeOut(300);
    });

}
function pagedown(number, SearchFilterName, ListAddress) {
    $("#overlay").fadeIn(300);
    var NameList = String(SearchFilterName).split(",");
    var NameListParam = "";
    NameListParam += "?pageid=" + number;
    for (var i = 0; i < NameList.length; i++) {
        var value = $("#" + NameList[i]).val();
        NameListParam += "&" + NameList[i] + "=" + value;
    }
    $.get(ListAddress + NameListParam, function (result) {
        $("#pat").html(result);
        $("#overlay").fadeOut(300);
    });
}

