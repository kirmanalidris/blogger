  document.write('<div id=\'license_page\'>\n');
  document.write('  <h1><i class=\'material-icons\'>lock</i><h2>This theme is locked</h3></h1>\n');
  document.write('  <p>\n');
  document.write('    Template ini terkunci, template ini hanya bisa digunakan oleh pembeli pertama dari designer, silahkan beli template ini secara resmi dan legal\n');
  document.write('  </p>\n');
  document.write('  <p>\n');
  document.write('    Jika memang template ini milik anda resmi dari designer silahkan verifikasi domain yang akan menggunakan template ini\n');
  document.write('  </p>\n');

  document.write('  <br/><br/><a href="#">\n');
  document.write('  Verifikasi domain\n');
  document.write('  </a>\n');

  document.write('</div>\n');


  //ambil nama domain tanpa https contoh: www.kirmanalidris.com
  var domain = window.location.host;
  var verifikasi_domain = "#localhost:8158";


  document.write("<style>#license_page a{border:1px solid #fff; border-radius:100px; padding:7px 15px;}#license_page i{font-size:61px;}#license_page{text-align: center;}#license_page{color:#fff;z-index:10000;padding:80px 40px;position:fixed;top:0;left:0;bottom:0;right:0;background:#000000b3;}</style>");
  var url = domain;
  if (url.match(verifikasi_domain)) {
    document.getElementById("license_page").style.display = "none";
  }
