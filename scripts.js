const mydrop = document.getElementById('my-dropdown');
            function addDropDown(){
                mydrop.innerHTML = '';
                mydrop.innerHTML += `
                                <a href="" class="dropdown-toggle" data-bs-toggle="dropdown">Categorías</a>
                                <ul class="dropdown-menu">
                                <li><a class="dropdown-item">CPU</a></li>
                                <li><a class="dropdown-item">RAM</a></li>
                                <li><a class="dropdown-item">Tarjetas gráficas</a></li>
                                <li><a class="dropdown-item">Placas base</a></li>
                                <li><a class="dropdown-item">Gabinetes</a></li>
                                <li><a class="dropdown-item">Fuentes de poder</a></li>
                                </ul>`
            }
            function addCollapse(){
                mydrop.innerHTML = '';
                mydrop.innerHTML += `<a href="#secondary-collapse" class="dropdown-toggle" data-bs-toggle="collapse">Categorías</a>
                            <div class="collapse bg-white rounded " id="secondary-collapse">
                                <a href="" class="dropdown-item">CPU</a>
                                <a href="" class="dropdown-item">RAM</a>
                                <a href="" class="dropdown-item">Tarjetas gráficas</a>
                                <a href="" class="dropdown-item">Placas base</a>
                                <a href="" class="dropdown-item">Gabinetes</a>
                                <a href="" class="dropdown-item">Fuentes de poder</a>
                            </div>`
            }
            if(window.innerWidth > 575){
                addDropDown();
            }
            window.addEventListener('resize', () =>{
                if(window.innerWidth > 575){
                    addDropDown()
                }
                if(window.innerWidth < 575) {
                    addCollapse()
                }
            });