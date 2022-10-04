// TODAS AS PÁGINAS

let total;

// SALGADA

let totalSalgada = 0;
let proximaPaginaTamanhoSalgada, proximaPaginaBordaSalgada, proximaPaginaSaborSalgada;

// botao

btnSalgada = document.querySelector('#salgada-continuar');

// variaveis

let tamanhoSalgada = document.querySelector('#tamanho-salgada');
let sabor1 = document.querySelector('#sabor1');
let sabor2 = document.querySelector('#sabor2');
let sabor3 = document.querySelector('#sabor3');
let sabor4 = document.querySelector('#sabor4');
let bordaSalgadaSim = document.querySelector('#salgada-sim');
let bordaSalgadaNao = document.querySelector('#salgada-nao');
let subtotalSalgada = document.getElementById('salgada-subtotal');
let paginaSalgada = document.querySelector('#salgada');

// funcao disable

function imprimirSalgada() {
    subtotalSalgada.innerHTML = totalSalgada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
let i, j;

tamanhoSalgada?.addEventListener('change', function(e) {
    
    totalSalgada = 0;
    i = 0;
    bordaSalgadaSim.checked = false;
    bordaSalgadaNao.checked = false;


    if (bordaSalgadaSim.checked == true) {
        totalSalgada += 9.90;
    }

    if (tamanhoSalgada.value == 'p') {
        sabor1.disabled = false;
        sabor2.disabled = true;
        sabor3.disabled = true;
        sabor4.disabled = true;
        bordaSalgadaSim.disabled = false;
        bordaSalgadaNao.disabled = false;
        totalSalgada = 44.9;
    } else if (tamanhoSalgada.value == 'm') {
        sabor1.disabled = false;
        sabor2.disabled = false;
        sabor3.disabled = true;
        sabor4.disabled = true;
        bordaSalgadaSim.disabled = false;
        bordaSalgadaNao.disabled = false;
        totalSalgada = 74.9;
    } else if (tamanhoSalgada.value == 'g') {
        sabor1.disabled = false;
        sabor2.disabled = false;
        sabor3.disabled = false;
        sabor4.disabled = true;
        bordaSalgadaSim.disabled = false;
        bordaSalgadaNao.disabled = false;
        totalSalgada = 94.9;
    } else if (tamanhoSalgada.value == 'gg') {
        sabor1.disabled = false;
        sabor2.disabled = false;
        sabor3.disabled = false;
        sabor4.disabled = false;
        bordaSalgadaSim.disabled = false;
        bordaSalgadaNao.disabled = false;
        totalSalgada = 124.9;
    } else {
        sabor1.disabled = true;
        sabor2.disabled = true;
        sabor3.disabled = true;
        sabor4.disabled = true;
        bordaSalgadaSim.disabled = true;
        bordaSalgadaNao.disabled = true;
        totalSalgada = 0;
    }

    subtotalSalgada.innerHTML = totalSalgada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
})

// funcao mudar subtotal

bordaSalgadaSim?.addEventListener('change', function(e) {
    e.preventDefault();

    let a = 0;
    i = 0;
    a = 9.90;

    totalSalgada += a;

    subtotalSalgada.innerHTML = totalSalgada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
    i++;
})

bordaSalgadaNao?.addEventListener('change', function(e) {
    e.preventDefault();

    let a = 0;
    a = 9.90;

    if (i > 0) {
        totalSalgada -= a;
    }

    subtotalSalgada.innerHTML = totalSalgada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
})

// funcao principal

btnSalgada?.addEventListener('click', function(e) {

    e.preventDefault();

    j = 0;
    k = 0;

    // evitar repeticao
    
    totalSalgada = 0;

    // selects

    let sabor1escolhido = sabor1.options[sabor1.selectedIndex].text;
    let sabor2escolhido = sabor2.options[sabor2.selectedIndex].text;
    let sabor3escolhido = sabor3.options[sabor3.selectedIndex].text;
    let sabor4escolhido = sabor4.options[sabor4.selectedIndex].text;
    let tamanhoSalgadaEscolhido = tamanhoSalgada.options[tamanhoSalgada.selectedIndex].value.toUpperCase();

    // radio

    let bordaSalgada = document.querySelector('input[name="borda"]:checked');
    
    // variavel vazia

    let bordaSalgadaEscolhida = '';

    // somar ao total

    if (tamanhoSalgada.value == '') {
        alert('Selecione o tamanho');
        j = 1;
    } else if (tamanhoSalgada.value == 'p') {
        totalSalgada += 44.9;
        proximaPaginaTamanhoSalgada = 1;
    } else if (tamanhoSalgada.value == 'm') {
        totalSalgada += 74.9;
        proximaPaginaTamanhoSalgada = 1;
    } else if (tamanhoSalgada.value == 'g') {
        totalSalgada += 94.9; 
        proximaPaginaTamanhoSalgada = 1;
    } else if (tamanhoSalgada.value == 'gg') {
        totalSalgada += 124.9;
        proximaPaginaTamanhoSalgada = 1;
    } else if (tamanhoSalgada.value == 'nenhuma'){
        proximaPaginaTamanhoSalgada = 1;
        proximaPaginaSaborSalgada = 1;
        proximaPaginaBordaSalgada = 1;
    }

    // verificacao para continuar

    if (tamanhoSalgada.value != 'nenhuma') {
        k = 0;
        if (sabor1escolhido == 'sabor 1' && j != 1 && k == 0) {
            alert('Selecione o sabor');
            k = 1;
        } else if (sabor1escolhido != 'sabor 1' && tamanhoSalgada.value == 'p'){
            proximaPaginaSaborSalgada = 1;
        }
        if (sabor2escolhido == 'sabor 2' && tamanhoSalgada.value != 'p' && j != 1 && k == 0) {
            alert('Selecione o sabor');
            k = 1;
        } else if (sabor2escolhido != 'sabor 2' && sabor1escolhido != 'sabor 1' && tamanhoSalgada.value == 'm') {
            proximaPaginaSaborSalgada = 1;
        }
        if (sabor3escolhido == 'sabor 3' && tamanhoSalgada.value != 'm' && tamanhoSalgada.value != 'p' && j != 1 && k == 0) {
            alert('Selecione o sabor');
            k = 1;
        } else if (sabor3escolhido != 'sabor 3' && sabor1escolhido != 'sabor 1' && sabor2escolhido != 'sabor 2' && tamanhoSalgada.value == 'g') {
            proximaPaginaSaborSalgada = 1;
        } 
        if (sabor4escolhido == 'sabor 4' && tamanhoSalgada.value != 'm' && tamanhoSalgada.value != 'p' && tamanhoSalgada.value != 'g' && j != 1 && k == 0) {
            alert('Selecione o sabor');
            k = 1;
        } else if (sabor4escolhido != 'sabor 4' && sabor3escolhido != 'sabor 3' && sabor1escolhido != 'sabor 1' && sabor2escolhido != 'sabor 2' && tamanhoSalgada.value == 'gg') {
            proximaPaginaSaborSalgada = 1;
        }
    }

    // valores para armazenar

    if (bordaSalgada == null && tamanhoSalgada.value != 'nenhuma' && j != 1 && k != 1) {
        alert('Selecione a borda');
    } else if (bordaSalgada == null && tamanhoSalgada.value == 'nenhuma'){
        proximaPaginaBordaSalgada = 1;
    } else if (bordaSalgada.value == 'sim') {
        bordaSalgadaEscolhida = 'sim';
        totalSalgada += 9.90;
        proximaPaginaBordaSalgada = 1;
    } else if (bordaSalgada.value == 'nao') {
        bordaSalgadaEscolhida = 'não';
        proximaPaginaBordaSalgada = 1;
    } 

    if (sabor1escolhido == 'sabor 1') {
        sabor1escolhido = '';
    }

    if (sabor2escolhido == 'sabor 2') {
        sabor2escolhido = '';
    }

    if (sabor3escolhido == 'sabor 3') {
        sabor3escolhido = '';
    }

    if (sabor4escolhido == 'sabor 4') {
        sabor4escolhido = '';
    }
    // armazenar

    localStorage.setItem('sabor-1-salgada', sabor1escolhido);
    localStorage.setItem('sabor-2-salgada', sabor2escolhido);
    localStorage.setItem('sabor-3-salgada', sabor3escolhido);
    localStorage.setItem('sabor-4-salgada', sabor4escolhido);
    localStorage.setItem('total-salgada', totalSalgada.toFixed(2));
    localStorage.setItem('tamanho-salgada', tamanhoSalgadaEscolhido);
    localStorage.setItem('borda-salgada', bordaSalgadaEscolhida);

    if (proximaPaginaTamanhoSalgada == 1 && proximaPaginaBordaSalgada == 1 && proximaPaginaSaborSalgada == 1) {
        window.open('doce.html', '_self');
    }
})

// DOCE

let totalDoce = 0;
let proximaPaginaTamanhoDoce, proximaPaginaBordaDoce, proximaPaginaSaborDoce;

// botao

btnDoce = document.querySelector('#doce-continuar');

// variaveis

let tamanhoDoce = document.querySelector('#tamanho-doce');
let sabor1doce = document.querySelector('#sabor1');
let sabor2doce = document.querySelector('#sabor2');
let sabor3doce = document.querySelector('#sabor3');
let sabor4doce = document.querySelector('#sabor4');
let bordaDoceSim = document.querySelector('#doce-sim');
let bordaDoceNao = document.querySelector('#doce-nao');
let subtotalDoce = document.getElementById('doce-subtotal');
let paginaDoce = document.querySelector('#doce');

// funcao disable

function imprimirDoce() {
    let totalSalgada = localStorage.getItem('total-salgada');
    let totalSalgadaSomar = parseFloat(totalSalgada);
    totalDoce += totalSalgadaSomar;
    subtotalDoce.innerHTML = totalDoce.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

let idoce, jdoce;

tamanhoDoce?.addEventListener('change', function(e) {
    
    totalDoce = 0;
    i = 0;
    bordaDoceSim.checked = false;
    bordaDoceNao.checked = false;


    if (bordaDoceSim.checked == true) {
        totalDoce += 9.90;
    }

    if (tamanhoDoce.value == 'p') {
        sabor1doce.disabled = false;
        sabor2doce.disabled = true;
        sabor3doce.disabled = true;
        sabor4doce.disabled = true;
        bordaDoceSim.disabled = false;
        bordaDoceNao.disabled = false;
        totalDoce = 44.9;
    } else if (tamanhoDoce.value == 'm') {
        sabor1doce.disabled = false;
        sabor2doce.disabled = false;
        sabor3doce.disabled = true;
        sabor4doce.disabled = true;
        bordaDoceSim.disabled = false;
        bordaDoceNao.disabled = false;
        totalDoce = 74.9;
    } else if (tamanhoDoce.value == 'g') {
        sabor1doce.disabled = false;
        sabor2doce.disabled = false;
        sabor3doce.disabled = false;
        sabor4doce.disabled = true;
        bordaDoceSim.disabled = false;
        bordaDoceNao.disabled = false;
        totalDoce = 94.9;
    } else if (tamanhoDoce.value == 'gg') {
        sabor1doce.disabled = false;
        sabor2doce.disabled = false;
        sabor3doce.disabled = false;
        sabor4doce.disabled = false;
        bordaDoceSim.disabled = false;
        bordaDoceNao.disabled = false;
        totalDoce = 124.9;
    } else {
        sabor1doce.disabled = true;
        sabor2doce.disabled = true;
        sabor3doce.disabled = true;
        sabor4doce.disabled = true;
        bordaDoceSim.disabled = true;
        bordaDoceNao.disabled = true;
        totalDoce = 0;
    }

    imprimirDoce();

})

// funcao mudar subtotal

bordaDoceSim?.addEventListener('change', function(e) {
    e.preventDefault();

    let a = 0;
    i = 0;
    a = 9.90;

    totalDoce += a;

    subtotalDoce.innerHTML = totalDoce.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 

    i++;
})

bordaDoceNao?.addEventListener('change', function(e) {
    e.preventDefault();

    let a = 0;
    a = 9.90

    if (i > 0) {
        totalDoce -= a;
    }

    subtotalDoce.innerHTML = totalDoce.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
})

// funcao principal

btnDoce?.addEventListener('click', function(e) {

    e.preventDefault();

    j = 0;
    k = 0;

    // evitar repeticao
    
    totalDoce = 0;

    // selects

    let sabor1escolhido = sabor1doce.options[sabor1doce.selectedIndex].text;
    let sabor2escolhido = sabor2doce.options[sabor2doce.selectedIndex].text;
    let sabor3escolhido = sabor3doce.options[sabor3doce.selectedIndex].text;
    let sabor4escolhido = sabor4doce.options[sabor4doce.selectedIndex].text;
    let tamanhoDoceEscolhido = tamanhoDoce.options[tamanhoDoce.selectedIndex].value.toUpperCase();

    // radio

    let bordaDoce = document.querySelector('input[name="borda"]:checked');
    
    // variavel vazia

    let bordaDoceEscolhida = '';

    // somar ao total

    if (tamanhoDoce.value == '') {
        alert('Selecione o tamanho');
        j = 1;
    } else if (tamanhoDoce.value == 'p') {
        totalDoce += 44.9;
        proximaPaginaTamanhoDoce = 1;
    } else if (tamanhoDoce.value == 'm') {
        totalDoce += 74.9;
        proximaPaginaTamanhoDoce = 1;
    } else if (tamanhoDoce.value == 'g') {
        totalDoce += 94.9; 
        proximaPaginaTamanhoDoce = 1;
    } else if (tamanhoDoce.value == 'gg') {
        totalDoce += 124.9;
        proximaPaginaTamanhoDoce = 1;
    } else if (tamanhoDoce.value == 'nenhuma'){
        proximaPaginaTamanhoDoce = 1;
        proximaPaginaSaborDoce = 1;
        proximaPaginaBordaDoce = 1;
    }

    // verificacao para continuar

    if (tamanhoDoce.value != 'nenhuma') {
        k = 0;
        if (sabor1escolhido == 'sabor 1' && j != 1 && k == 0) {
            alert('Selecione o sabor');
            k = 1;
        } else if (sabor1escolhido != 'sabor 1' && tamanhoDoce.value == 'p'){
            proximaPaginaSaborDoce = 1;
        }
        if (sabor2escolhido == 'sabor 2' && tamanhoDoce.value != 'p' && j != 1 && k == 0) {
            alert('Selecione o sabor');
            k = 1;
        } else if (sabor2escolhido != 'sabor 2' && sabor1escolhido != 'sabor 1' && tamanhoDoce.value == 'm') {
            proximaPaginaSaborDoce = 1;
        }
        if (sabor3escolhido == 'sabor 3' && tamanhoDoce.value != 'm' && tamanhoDoce.value != 'p' && j != 1 && k == 0) {
            alert('Selecione o sabor');
            k = 1;
        } else if (sabor3escolhido != 'sabor 3' && sabor1escolhido != 'sabor 1' && sabor2escolhido != 'sabor 2' && tamanhoDoce.value == 'g') {
            proximaPaginaSaborDoce = 1;
        } 
        if (sabor4escolhido == 'sabor 4' && tamanhoDoce.value != 'm' && tamanhoDoce.value != 'p' && tamanhoDoce.value != 'g' && j != 1 && k == 0) {
            alert('Selecione o sabor');
            k = 1;
        } else if (sabor4escolhido != 'sabor 4' && sabor3escolhido != 'sabor 3' && sabor1escolhido != 'sabor 1' && sabor2escolhido != 'sabor 2' && tamanhoDoce.value == 'gg') {
            proximaPaginaSaborDoce = 1;
        }
    }

    // valores para armazenar

    if (bordaDoce == null && tamanhoDoce.value != 'nenhuma' && j != 1 && k != 1) {
        alert('Selecione a borda');
    } else if (bordaDoce == null && tamanhoDoce.value == 'nenhuma'){
        proximaPaginaBordaDoce = 1;
    } else if (bordaDoce.value == 'sim') {
        bordaDoceEscolhida = 'sim';
        totalDoce += 9.90;
        proximaPaginaBordaDoce = 1;
    } else if (bordaDoce.value == 'nao') {
        bordaDoceEscolhida = 'não';
        proximaPaginaBordaDoce = 1;
    } 

    if (sabor1escolhido == 'sabor 1') {
        sabor1escolhido = '';
    }
    
    if (sabor2escolhido == 'sabor 2') {
        sabor2escolhido = '';
    }

    if (sabor3escolhido == 'sabor 3') {
        sabor3escolhido = '';
    }

    if (sabor4escolhido == 'sabor 4') {
        sabor4escolhido = '';
    }

    // armazenar

    localStorage.setItem('sabor-1-doce', sabor1escolhido);
    localStorage.setItem('sabor-2-doce', sabor2escolhido);
    localStorage.setItem('sabor-3-doce', sabor3escolhido);
    localStorage.setItem('sabor-4-doce', sabor4escolhido);
    localStorage.setItem('total-doce', totalDoce.toFixed(2));
    localStorage.setItem('tamanho-doce', tamanhoDoceEscolhido);
    localStorage.setItem('borda-doce', bordaDoceEscolhida);

    if (proximaPaginaTamanhoDoce == 1 && proximaPaginaBordaDoce == 1 && proximaPaginaSaborDoce == 1) {
        window.open('bebida.html', '_self');
    }
})

//  BEBIDA

// botao

let bebidaBtn = document.querySelector('#bebida-continuar');

// variaveis

let soft = document.querySelector('#soft');
let alcoolica = document.querySelector('#alcoolica');
let subtotalBebida = document.querySelector('#bebida-subtotal');
let totalBebida = 0;
let iAlcoolica = 0;
let iSoft = 0;
let tamanho1 = document.querySelector('#tamanho1');
let tamanho2 = document.querySelector('#tamanho2');
let tamanho3 = document.querySelector('#tamanho3');
let tamanho4 = document.querySelector('#tamanho4');

// funcao imprimir

function imprimirBebida() {
    let totalSalgada = localStorage.getItem('total-salgada');
    let totalDoce = localStorage.getItem('total-doce');
    let totalSalgadaSomar = parseFloat(totalSalgada);
    let totalDoceSomar = parseFloat(totalDoce);
    totalBebida += totalDoceSomar + totalSalgadaSomar;
    subtotalBebida.innerHTML = totalBebida.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// funcoes disable

soft?.addEventListener('change', function(e) {
    e.preventDefault();

    if (soft.options[soft.selectedIndex].value == 'nenhuma') {
        tamanho1.disabled = true;
        tamanho2.disabled = true;
        tamanho3.disabled = true;
        totalBebida = 0;
        imprimirBebida();
    } else {
        tamanho1.disabled = false;
        tamanho2.disabled = false;
        tamanho3.disabled = false;
    }
});

alcoolica?.addEventListener('change', function(e) {
    e.preventDefault();

    if (alcoolica.options[alcoolica.selectedIndex].value == 'nenhuma' && iAlcoolica > 0) {
        tamanho4.disabled = true;
        totalBebida -= 11.9;
        iAlcoolica = 0;
    } else if (alcoolica.options[alcoolica.selectedIndex].value == 'nenhuma') {
        tamanho4.disabled = true;
    } else if (alcoolica.options[alcoolica.selectedIndex].value != 'nenhuma' && iAlcoolica == 0) {
        iAlcoolica = 0;
        tamanho4.checked = true;
        tamanho4.disabled = false;
        totalBebida += 11.9;
        iAlcoolica++;
    }

    subtotalBebida.innerHTML = totalBebida.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
});

tamanho1?.addEventListener('change', function(e) {
    e.preventDefault();

    if (tamanho1.checked == true && tamanho2.checked == false && tamanho3.checked == false && iSoft == 0) {
        totalBebida += 12.9;
        iSoft = 1;
    } else if (tamanho1.checked == true && tamanho2.checked == false && tamanho3.checked == false && iSoft == 2) {
        totalBebida += 12.9 - 8.9;
        iSoft = 1;
    } else if (tamanho1.checked == true && tamanho2.checked == false && tamanho3.checked == false && iSoft == 3) {
        totalBebida += 12.9 - 5.9;
        iSoft = 1;
    }

    subtotalBebida.innerHTML = totalBebida.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

});

tamanho2?.addEventListener('change', function(e) {
    e.preventDefault();

    if (tamanho1.checked == false && tamanho2.checked == true && tamanho3.checked == false && iSoft == 0) {
        totalBebida += 8.9;
        iSoft = 2;
    } else if (tamanho1.checked == false && tamanho2.checked == true && tamanho3.checked == false && iSoft == 1) {
        totalBebida -= 4;
        iSoft = 2;
    } else if (tamanho1.checked == false && tamanho2.checked == true && tamanho3.checked == false && iSoft == 3) {
        totalBebida += 3;
        iSoft = 2;
    }

    subtotalBebida.innerHTML = totalBebida.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

});

tamanho3?.addEventListener('change', function(e) {
    e.preventDefault();

    if (tamanho1.checked == false && tamanho2.checked == false && tamanho3.checked == true && iSoft == 0) {
        totalBebida += 5.9;
        iSoft = 3;
    } else if (tamanho1.checked == false && tamanho2.checked == false && tamanho3.checked == true && iSoft == 1) {
        totalBebida -= 7;
        iSoft = 3;
    } else if (tamanho1.checked == false && tamanho2.checked == false && tamanho3.checked == true && iSoft == 2) {
        totalBebida -= 3;
        iSoft = 3;
    }

    subtotalBebida.innerHTML = totalBebida.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

});


// funcao principal

bebidaBtn?.addEventListener('click', function(e) {
    e.preventDefault();

    // puxando valores quando o botao é clicado

    // selects
    let softEscolhida = soft.options[soft.selectedIndex].text;
    let alcoolicaEscolhida = alcoolica.options[alcoolica.selectedIndex];

    // radios
    let tamanhoSoft = document.querySelector('input[name="tamanho-soft"]:checked');

    // variaveis vazias

    let tamanhoSoftEscolhido = '';
    let tamanhoAlcoolicaEscolhido = '';
    let bebidaAlcoolicaEscolhida = '';
    let proximaPaginaSoft = '';
    let proximaPaginaAlcoolica = '';

    // definindo como salvar cada valor

    // soft

    if (tamanhoSoft == null && soft.value != 'nenhuma') {
        alert('Selecione o tamanho da bebida');
    } else if (tamanhoSoft == null && soft.value == 'nenhuma') {
        proximaPaginaSoft = 1;
    } else if (tamanhoSoft.value == '600') {
        tamanhoSoftEscolhido = '600mL';
        proximaPaginaSoft = 1;
    } else if (tamanhoSoft.value == 'lata') {
        tamanhoSoftEscolhido = 'lata';
        proximaPaginaSoft = 1;
    } else if (tamanhoSoft.value == '2') {
        tamanhoSoftEscolhido = '2L';
        proximaPaginaSoft = 1;
    } 

    // alcoolica

    if (alcoolicaEscolhida.value == 'cerveja') {
        bebidaAlcoolicaEscolhida = 'cerveja';
        proximaPaginaAlcoolica = 1;
    } else if (alcoolicaEscolhida.value == 'ice') {
        bebidaAlcoolicaEscolhida = 'smirnoff ice';
        proximaPaginaAlcoolica = 1;
    } else if (alcoolicaEscolhida.value == 'beats') {
        bebidaAlcoolicaEscolhida = 'skol beats';
        proximaPaginaAlcoolica = 1;
    } else if (alcoolicaEscolhida.value == 'nenhuma') {
        bebidaAlcoolicaEscolhida = 'NENHUMA';
        proximaPaginaAlcoolica = 1;
    } else if (alcoolicaEscolhida.value == 'alcoolica') {
        alert('Selecione a bebida alcoólica');
    }

    // armazenando selecoes no local storage

    let totalSalgadaBebida = localStorage.getItem('total-salgada');
    let totalSalgadaBebidaSomar = parseFloat(totalSalgadaBebida);
    let totalDoceBebida = localStorage.getItem('total-doce');
    let totalDoceBebidaSomar = parseFloat(totalDoceBebida);

    // totalBebida -= totalDoceBebidaSomar - totalSalgadaBebidaSomar;

    if (softEscolhida == 'não quero soft drinks') {
        softEscolhida = 'NENHUMA';
    }

    localStorage.setItem('soft', softEscolhida);
    localStorage.setItem('tamanho-soft', tamanhoSoftEscolhido);
    localStorage.setItem('alcoolica', bebidaAlcoolicaEscolhida);
    localStorage.setItem('tamanho-alcoolica', tamanhoAlcoolicaEscolhido);
    if (softEscolhida == 'NENHUMA' && bebidaAlcoolicaEscolhida == 'NENHUMA') {
        localStorage.setItem('total-bebida', 0);
    } else {
        localStorage.setItem('total-bebida', (totalBebida-totalDoceBebidaSomar-totalSalgadaBebidaSomar).toFixed(2));
    }

    // definindo quando vai para a pagina seguinte

    if (proximaPaginaSoft == 1 && proximaPaginaAlcoolica == 1) {
    window.open('dados.html', '_self');
    }
})

// DADOS

// inputs
let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let endereco = document.querySelector('#endereco');
let telefone = document.querySelector('#telefone');
let telefoneSalvar;

// botao
let btnDados = document.querySelector('#continuar-btn');

btnDados?.addEventListener('click', function(e) {
    
    let nomeValue = nome.value;
    let emailValue = email.value;    
    let enderecoValue = endereco.value;
    let telefoneValue = telefone.value;

    let tamanhoTelefone = telefoneValue.length;
    let telefoneSemDdd1, telefoneSemDdd2;
    let ddd = telefoneValue.slice(0,2);

    if (tamanhoTelefone == 11) {
        telefoneSemDdd1 = telefoneValue.slice(2,7);
        telefoneSemDdd2 = telefoneValue.slice(7,11);
    } else {
        telefoneSemDdd1 = telefoneValue.slice(2,6);
        telefoneSemDdd2 = telefoneValue.slice(6,10);
    }

    telefoneSalvar = '(' + ddd + ') ' + telefoneSemDdd1 + '-' + telefoneSemDdd2;

    if (nomeValue.length == 0 || emailValue.length == 0 || enderecoValue.length == 0 || telefoneValue.length == 0) {
        alert('Todos os campos são obrigatórios');
    } else if (nomeValue.length != 0 && emailValue.length != 0 && enderecoValue.length != 0 && telefoneValue.length != 0) {
        localStorage.setItem('nome', nomeValue);
        localStorage.setItem('email', emailValue);
        localStorage.setItem('endereco', enderecoValue);
        localStorage.setItem('telefone', telefoneSalvar);
        window.open('confirma.html', '_self');
    }
});

// CONFIRMA

function imprimirConfirma() {
    let confirmaTamanhoSalgada = localStorage.getItem('tamanho-salgada');
    let confirmaSabor1Salgada = localStorage.getItem('sabor-1-salgada');
    let confirmaSabor2Salgada = localStorage.getItem('sabor-2-salgada');
    let confirmaSabor3Salgada = localStorage.getItem('sabor-3-salgada');
    let confirmaSabor4Salgada = localStorage.getItem('sabor-4-salgada');
    let confirmaBordaSalgada = localStorage.getItem('borda-salgada');
    let confirmaTotalSalgada = localStorage.getItem('total-salgada');

    let confirmaTamanhoDoce = localStorage.getItem('tamanho-doce');
    let confirmaSabor1Doce = localStorage.getItem('sabor-1-doce');
    let confirmaSabor2Doce = localStorage.getItem('sabor-2-doce');
    let confirmaSabor3Doce = localStorage.getItem('sabor-3-doce');
    let confirmaSabor4Doce = localStorage.getItem('sabor-4-doce');
    let confirmaBordaDoce = localStorage.getItem('borda-doce');
    let confirmaTotalDoce = localStorage.getItem('total-doce');

    let confirmaSoft = localStorage.getItem('soft');
    let confirmaTamanhoSoft = localStorage.getItem('tamanho-soft');
    let confirmaAlcoolica = localStorage.getItem('alcoolica');
    let confirmaTamanhoAlcoolica = localStorage.getItem('tamanho-alcoolica');
    let confirmaTotalBebida = localStorage.getItem('total-bebida');
    if (confirmaTotalBebida < 0) {
        confirmaTotalBebida = 0;
    }

    let paginaConfirmaTamanhoSalgada = document.querySelector('#confirma-tamanho-salgada');
    let paginaConfirmaSabor1Salgada = document.querySelector('#confirma-sabor1-salgada');
    let paginaConfirmaSabor2Salgada = document.querySelector('#confirma-sabor2-salgada');
    let paginaConfirmaSabor3Salgada = document.querySelector('#confirma-sabor3-salgada');
    let paginaConfirmaSabor4Salgada = document.querySelector('#confirma-sabor4-salgada');
    let paginaConfirmaBordaSalgada = document.querySelector('#confirma-borda-salgada');
    let paginaConfirmaTotalSalgada = document.querySelector('#confirma-subtotal-salgada');
    let parseConfirmaTotalSalgada = parseFloat(confirmaTotalSalgada);
    
    paginaConfirmaTamanhoSalgada.innerHTML = confirmaTamanhoSalgada;
    paginaConfirmaSabor1Salgada.innerHTML = confirmaSabor1Salgada;
    paginaConfirmaSabor2Salgada.innerHTML = confirmaSabor2Salgada;
    paginaConfirmaSabor3Salgada.innerHTML = confirmaSabor3Salgada;
    paginaConfirmaSabor4Salgada.innerHTML = confirmaSabor4Salgada;
    paginaConfirmaBordaSalgada.innerHTML = confirmaBordaSalgada;
    paginaConfirmaTotalSalgada.innerHTML = parseConfirmaTotalSalgada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    let paginaConfirmaTamanhoDoce = document.querySelector('#confirma-tamanho-doce');
    let paginaConfirmaSabor1Doce = document.querySelector('#confirma-sabor1-doce');
    let paginaConfirmaSabor2Doce = document.querySelector('#confirma-sabor2-doce');
    let paginaConfirmaSabor3Doce = document.querySelector('#confirma-sabor3-doce');
    let paginaConfirmaSabor4Doce = document.querySelector('#confirma-sabor4-doce');
    let paginaConfirmaBordaDoce = document.querySelector('#confirma-borda-doce');
    let paginaConfirmaTotalDoce = document.querySelector('#confirma-subtotal-doce');
    let parseConfirmaTotalDoce = parseFloat(confirmaTotalDoce);
    
    paginaConfirmaTamanhoDoce.innerHTML = confirmaTamanhoDoce;
    paginaConfirmaSabor1Doce.innerHTML = confirmaSabor1Doce;
    paginaConfirmaSabor2Doce.innerHTML = confirmaSabor2Doce;
    paginaConfirmaSabor3Doce.innerHTML = confirmaSabor3Doce;
    paginaConfirmaSabor4Doce.innerHTML = confirmaSabor4Doce;
    paginaConfirmaBordaDoce.innerHTML = confirmaBordaDoce;
    paginaConfirmaTotalDoce.innerHTML = parseConfirmaTotalDoce.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    let paginaConfirmaSoft = document.querySelector('#confirma-soft');
    let paginaConfirmaTamanhoSoft = document.querySelector('#confirma-tamanho-soft');
    let paginaConfirmaAlcoolica = document.querySelector('#confirma-alcoolica');
    let paginaConfirmaTamanhoAlcoolica = document.querySelector('#confirma-tamanho-alcoolica');
    let paginaConfirmaTotalBebida = document.querySelector('#confirma-subtotal-bebida');
    let parseConfirmaTotalBebida = parseFloat(confirmaTotalBebida);

    let blocoConfirmaSalgada = document.querySelector('#bloco-confirma-salgada');
    let blocoConfirmaDoce = document.querySelector('#bloco-confirma-doce');
    let blocoConfirmaBebida = document.querySelector('#bloco-confirma-bebida');
    let blocoConfirmaSoft = document.querySelector('#div-soft');
    let blocoConfirmaAlcoolica = document.querySelector('#div-alcoolica');

    if (confirmaSoft == 'NENHUMA' && confirmaAlcoolica == 'NENHUMA') {
        blocoConfirmaBebida.style.display = 'none';
    } else if (confirmaSoft == 'NENHUMA' && confirmaAlcoolica != 'NENHUMA') {
        blocoConfirmaSoft.style.display = 'none';
        paginaConfirmaAlcoolica.innerHTML = confirmaAlcoolica;
        paginaConfirmaTamanhoAlcoolica.innerHTML = 'long neck';
    } else if (confirmaSoft != 'NENHUMA' && confirmaAlcoolica == 'NENHUMA') {
        blocoConfirmaAlcoolica.style.display = 'none';
        paginaConfirmaSoft.innerHTML = confirmaSoft;
        paginaConfirmaTamanhoSoft.innerHTML = confirmaTamanhoSoft;
    } else {
        paginaConfirmaSoft.innerHTML = confirmaSoft;
        paginaConfirmaTamanhoSoft.innerHTML = confirmaTamanhoSoft;
        paginaConfirmaAlcoolica.innerHTML = confirmaAlcoolica;
        paginaConfirmaTamanhoAlcoolica.innerHTML = 'long neck';
    }

    paginaConfirmaTotalBebida.innerHTML = parseConfirmaTotalBebida.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;

    let confirmaNome = localStorage.getItem('nome');
    let confirmaEmail = localStorage.getItem('email');
    let confirmaEndereco = localStorage.getItem('endereco');
    let confirmaTelefone = localStorage.getItem('telefone');

    let paginaConfirmaNome = document.querySelector('#confirma-nome'); 
    let paginaConfirmaEmail = document.querySelector('#confirma-email');
    let paginaConfirmaEndereco = document.querySelector('#confirma-endereco');
    let paginaConfirmaTelefone = document.querySelector('#confirma-telefone');

    paginaConfirmaNome.innerHTML = confirmaNome;
    paginaConfirmaEmail.innerHTML = confirmaEmail;
    paginaConfirmaEndereco.innerHTML = confirmaEndereco;
    paginaConfirmaTelefone.innerHTML = confirmaTelefone;

    let confirmaTotal = parseConfirmaTotalBebida + parseConfirmaTotalDoce + parseConfirmaTotalSalgada;

    let paginaConfirmaTotal = document.querySelector('#total');

    paginaConfirmaTotal.innerHTML = confirmaTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'});

    if (confirmaTamanhoSalgada == 'NENHUMA') {
        blocoConfirmaSalgada.style.display = 'none';
    }

    if (confirmaTamanhoDoce == 'NENHUMA') {
        blocoConfirmaDoce.style.display = 'none';
    }
}