function search() {
    var searchInput = document.getElementById('search').text();
    var url = "http://monkey=" + searchInput + "&red";
    window.open(url);
}