(function() {
  
		document.addEventListener("DOMContentLoaded", function () {
			document.querySelectorAll('.dropdown-menu').forEach(function (element) {
				element.addEventListener('click', function (e) {
					e.stopPropagation();
				});
			})
		});    

var typed5 = new Typed('#typed5', {
    strings: ['Search by books (ex. ক্রীতদাসের হাসি, The Power Of Habit', 'Search by Authors ( ex. চমক হাসান, J. K. Rowling) ', 'Search by publisher (ex. মাওলা ব্রাদার্স, Harpercollins)'],
    typeSpeed: 40,
    backSpeed: 40,
     attr: 'placeholder',
    loop: true
  });

})()