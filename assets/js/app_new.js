// Classe para chamar o Json.
function json(){
    var qtdBestseller;
    var retornoBestseller;

    var qtdRelease;
    var retornoRelease;

    var qtdAll;
    var retornoAll;


    // Resgatar valores.
    json.prototype.resgatarValores = function(){

        //Bestsellers

        $.getJSON('assets/js/data.json', function(data){

            this.qtdBestseller = data.bestsellers.length;

            this.retornoBestseller = '<div class="owl-carousel owl-theme">';

            for (i = 0; i < this.qtdBestseller; i++){

                this.retornoBestseller += '<div class="item">';

                this.retornoBestseller += '<img src="' + data.bestsellers[i].image + '" alt="' + data.bestsellers[i].title + '">';
                this.retornoBestseller += '<p class="icon">Personalize</p>';
                this.retornoBestseller += '<h3>' + data.bestsellers[i].title + '</h3>'
                this.retornoBestseller += '<p class="desc">' + data.bestsellers[i].category + '</p>';
                this.retornoBestseller += '<p class="price">' + data.bestsellers[i].price + '</p>';
                this.retornoBestseller += '<p class="portion">ou ' + data.bestsellers[i].installments.number + 'X de ' + data.bestsellers[i].installments.value + ' sem juros</p>';

                this.retornoBestseller += '<button>Comprar</button>';

                this.retornoBestseller += '</div>';

            }

            this.retornoBestseller += '</div>';

            $('#bestsellers').html(this.retornoBestseller);

            //Releases

            this.qtdRelease = data.releases.length;

            this.retornoRelease = '<div class="owl-carousel owl-theme">';

            for (i = 0; i < this.qtdRelease; i++){

                this.retornoRelease += '<div class="item">';

                this.retornoRelease += '<img src="' + data.releases[i].image + '" alt="' + data.releases[i].title + '">';
                this.retornoRelease += '<p class="icon">Personalize</p>';
                this.retornoRelease += '<h3>' + data.releases[i].title + '</h3>'
                this.retornoRelease += '<p class="desc">' + data.releases[i].category + '</p>';
                this.retornoRelease += '<p class="price">' + data.releases[i].price + '</p>';
                this.retornoRelease += '<p class="portion">ou ' + data.releases[i].installments.number + 'X de ' + data.releases[i].installments.value + ' sem juros</p>';

                this.retornoRelease += '<button>Comprar</button>';

                this.retornoRelease += '</div>';

            }

            this.retornoRelease += '</div>';

            $('#release').html(this.retornoRelease);

            //AllProducts

            $('#allproducts').append('<div class="owl-carousel owl-theme" id="intern">');

            $.each(data, function(key, value) {
              //defino em qual sub-array do json estará sendo trabalhado
              var param = data[key];

              //usa o nome do 'param' para definir qual div, EX: #tab => "#"+'tab'
              $.each(param,function(key, value){

                $('#allproducts #intern').append( '<div class="item"><img src="' + value.image + '" alt="' + value.title + '"><p class="icon">Personalize</p><h3>' + value.title + '</h3><p class="desc">' + value.category + '</p><p class="price">' + value.price + '</p><p class="portion">ou ' + value.installments.number + 'X de ' + value.installments.value + ' sem juros</p><button>Comprar</button>');
              });
            });

            $('#allproducts').append('</div>');

            var owl = $('.owl-carousel');
            owl.owlCarousel({
                loop:true,
                margin:4,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:3,
                        nav:false
                    },
                    1500:{
                        items:4,
                        nav:false,
                        loop:false
                    }
                }
            })
        });

    }

}

// Objeto.
var obj = new json();
obj.resgatarValores();
