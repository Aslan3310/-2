const images = document.querySelectorAll('.image');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
let currentIndex = 0;

function showImage(index) {
	images.forEach((image, i) => {
		if (i === index) {
			image.style.opacity = 1;
		} else {
			image.style.opacity = 0;
		}
	});
}

function updateProgressBar() {
	const progress = (currentIndex + 1) / images.length * 100;
	progressFill.style.width = `${progress}%`;
}

function changeImage() {
	currentIndex = (currentIndex + 1) % images.length;
	showImage(currentIndex);
	updateProgressBar();
}


showImage(currentIndex);
updateProgressBar();


setInterval(changeImage, 4000);


$(document).ready(function(){
	
	$("#openModalBtn").click(function(){
		$("#myModal").show();
		$(".modal-backdrop").show();
	});

	
	$("#closeModalBtn").click(function(){
		$("#myModal").hide();
		$(".modal-backdrop").hide();
	});
});

function updatePrice() {
	var select = document.getElementById("productSelect");
	var priceSpan = document.getElementById("price");
	var selectedValue = select.value;


	var price = 0;

	
	switch (selectedValue) {
		case "product1":
			price = 1300000;
			break;
		case "product2":
			price = 800000;
			break;
		case "product3":
			price = 680000;
			break;
		default:
			price = 0;
	}

	
	priceSpan.textContent = price;
}

function showMessage1() {
	alert('Тема: Подтверждение заказа №12345 Спасибо за ваш заказ на нашем веб-сайте. Ваш заказ был успешно принят, и мы готовимся к его обработке.\n Ожидайте подтверждения оплаты на вашем банковском выписке.\n При доставке вы получите дополнительные уведомления с информацией о статусе доставки.\n Если у вас возникнут какие-либо вопросы или вам потребуется дополнительная информация, не стесняйтесь связаться с нашей службой поддержки по электронной почте.\n Благодарим вас за выбор наших товаров!\n\n С наилучшими пожеланиями, BMO');
}