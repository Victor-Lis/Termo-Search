const arrayWords = ["abrir", "acaso", "açude", "ágape", "ágil", "agora", "agudo", "airos", "ajuda", "alarg", "alarm", "album", "alçar", "alelu", "alert", "algum", "aliás", "alinh", "almoç", "alpem", "alper", "altar", "altas", "alvos", "amado", "amigo", "ampla", "anexo", "anglo", "anima", "anjos", "anoite", "ansei", "antes", "anual", "anéis", "apelo", "apert", "após", "aquém", "arame", "arder", "arest", "aroma", "arque", "arqui", "arroz", "aruto", "asaio", "asilo", "aspen", "assaz", "astar", "astró", "ataca", "atair", "atavi", "atéia", "atent", "ating", "atira", "atlas", "atole", "atual", "atuem", "atuos", "aturd", "audió", "auges", "aulas", "aumen", "aument", "auras", "autor", "autos", "azada", "azuis", "bairro", "bebê", "beijo", "bemol", "bicho", "bifão", "bilau", "bilha", "bimba", "birra", "bispo", "bizar", "bleca", "bloco", "boato", "bocal", "boche", "boina", "bojão", "bolar", "bolei", "bolha", "boloa", "bolão", "bomba", "bombe", "bongo", "bonit", "borbo", "borda", "borra", "bosão", "botão", "bravo", "breca", "breja", "brena", "brida", "brioa", "broca", "broma", "bronc", "bruma", "bruto", "bucho", "bugio", "bunda", "bunda", "burca", "burgu", "busto", "caber", "cabra", "cacho", "caçar", "caçoe", "cadar", "cadee", "cadên", "cadeu", "cadra", "cadro", "cafee", "caiau", "caibo", "caixa", "caixê", "caixô", "cagar","calão", "calar", "calço", "calei", "calha", "calmo", "calor", "calvo", "câmar", "campe", "campi", "campo", "canal", "cande", "canec", "canhê", "canja", "cansa", "canse", "cantê", "canto", "canzo", "caosê", "capaz", "capil", "capim", "capit", "capôs", "caqui", "caraí", "carão", "carão", "carca", "carde", "carga", "caria", "carie", "caril", "carim", "carir", "cario", "carma", "carna", "carnê", "caroá", "carol", "carro", "cartê", "carto", "casar", "casco", "casêo", "caspa", "castê", "casto", "casuo", "casva", "cated", "cativ", "cator", "catre", "catuê", "cauda", "causa", "cavam", "cavar", "cavêr", "caxim", "caxix", "caxóx", "cazão", "cazão", "cebol", "ceder", "cedil", "céleb", "celho", "cello", "celul", "cenho", "censa", "cense", "centê", "cento", "cêpaê", "cerca", "cerco", "cerrê", "cerrô", "certê", "cerve", "cesar", "cessê", "cetim", "chala", "chama", "chãoê", "chaos", "chapa", "chave", "chefê", "cheia", "cheio", "chefe", "chero", "chiar", "chiba", "chico", "chien", "chilê", "chilo", "chinê", "chinf", "chino", "chist", "choça", "choça", "choço", "choir", "chope", "choro", "chuch", "chule", "chuma", "chupa", "chupê", "churr", "chuta", "chute", "ciana", "cicat", "cícil", "ciclo", "cidra", "cidro", "cient", "cifra", "cigla", "cilha", "cilio", "cimba", "cimen", "cinto", "cisma", "cisne", "citar", "citil", "clama", "clarê", "claro", "clava", "clava", "clavo", "clero", "clima", "clipê", "cloro", "clube", "clue", "coisa", "cobra", "cocar", "comer", "corpo", "coque", "coroa", "conto", "cravo", "criar", "cruel", "copia", "canal", "canto", "cansa", "carga", "carne", "carta", "casal", "casar", "causa", "cegon", "censo", "cerca", "cerco", "cesta", "chave", "chefe", "chove", "chuta", "cinco", "circo", "cisco", "civil", "clima", "colhe", "colar", "colon", "comum", "conha", "conto", "coral", "corpo", "corte", "couro", "crase", "creme", "cruze", "custo", "casto", "clara", "clero", "clore", "cruas", "crues", "dados", "danca", "darde", "datae", "datar", "daviu", "debal", "debil", "decai", "decas", "decep", "decre", "dedal", "defas", "defin", "deixa", "deixe", "delga", "delta", "demao", "demon", "denso", "dente", "depoe", "depos", "depus", "deram", "dessa", "deter", "detox", "deuva", "devem", "dever", "devez", "dezie", "diabo", "diazo", "didio", "digno", "dilui", "dimin", "dinam", "dingo", "dinhe", "dinis", "diogo", "diota", "dirao", "direi", "diria", "dirig", "disco", "disse", "ditar", "diva", "dival", "divao", "dizer", "dobra", "dobre", "docao", "doceg", "doces", "docez", "docil", "doent", "dogma", "doide", "doira", "doisr", "dolce", "dolor", "domar", "domem", "domin", "donde", "donna", "dorso", "dosar", "dosef", "doses", "dotar", "dotal", "douto", "dozev", "drama", "droga", "druzo", "dunas", "duque", "duram", "durao", "durar", "durex", "durof", "duros", "dutiv", "erva", "escol", "estar", "etnia", "europa", "evento", "exame", "excel", "extra", "exult", "falar", "fazer", "falta", "falar", "fardo", "farol", "farto", "fator", "fazem", "fazia", "febre", "fecho", "feijo", "feira", "feito", "ferro", "festa", "fetal", "fetic", "ficha", "fidal", "figur", "filho", "filme", "filos", "final", "finar", "finca", "fingi", "finta", "fique", "fiscal", "fisgar", "fisico", "fissao", "fitar", "fixar", "flauta", "flecha", "fogao", "fogem", "fogos", "folga", "fomea", "fomei", "fomes", "formal", "forma", "forro", "forte", "fosse", "fotoa", "fotos", "fracas", "fraco", "frade", "fraud", "freada", "fregu", "freio", "frente", "fresco", "friaca", "friae", "friam", "friar", "frias", "friboi", "friso", "fruta", "fugaz", "fugir", "fuica", "fujao", "fujas", "fulano", "fulgor", "fulo", "fumaca", "fumam", "fumar", "funcao", "fundar", "fundo", "funil", "furam", "furar", "furta", "furtar", "furto", "fusao", "fusca", "futuro", "gabar", "gado", "gafar", "gague", "gaita", "gajo", "galão", "galho", "galão", "galra", "galvo", "gamar", "ganha", "ganir", "garça", "garfo", "garra", "garbo", "garça", "gasta", "gasto", "gato", "gazua", "gelar", "gema", "geral", "gerar", "gesto", "getão", "gibão", "gigolô", "girar", "giro", "glória", "glutão", "goela", "goiás", "gozar", "graça", "grada", "grade", "grana", "grato", "graxa", "grilo", "grita", "grota", "grude", "grupa", "grupo", "gruta", "guapo", "guard", "guarn", "guerra", "guiar", "guia", "guiné", "guisa", "guizo", "gulod", "guria", "gusto", "jagun", "janta", "japim", "japor", "jarro", "jazem", "jazer", "jazia", "jazid", "jazil", "jeans", "jejum", "jeric", "jetom", "jiboi", "jogar", "jogos", "jovem", "juíza", "julho", "julgo", "junta", "junto", "jurou", "justo", "labor", "lacre", "lados", "laico", "lajea", "lajem", "lajes", "lamaç", "lambe", "lambo", "lance", "lanço", "lanch", "lapis", "laran", "laras", "largo", "lasca", "laser", "lasso", "latao", "latas", "latem", "laten", "later", "latim", "latus", "lavam", "lavas", "lazer", "lazul", "leald", "leãoz", "lebre", "lecos", "legao", "legal", "legam", "legas", "legem", "leiga", "leigo", "leila", "leilo", "leira", "leite", "leito", "leixa", "leixe", "lemos", "lenda", "lento", "lepra", "lerda", "lesam", "lesas", "lesão", "lesar", "lesas", "lesos", "letra", "levei", "levem", "leven", "leves", "levou", "lexia", "lezes", "lhama", "liame", "lição", "licor", "lidam", "lidas", "lidem", "lider", "lidos", "lidos", "liema", "lient", "ligam", "ligar", "ligas", "ligei", "ligem", "ligen", "liges", "ligno", "ligou", "limar", "limas", "limbo", "limem", "limia", "limit", "limoe", "limos", "lindo", "linea", "linfa", "lingo", "linho", "linha", "linho", "lions", "lippe", "liras", "lisas", "liseu", "lises", "lisma", "lison", "lites", "litra", "lixam", "lixar", "lixas", "lixem", "lixes", "loboi", "lobos", "locam", "locar", "locas", "locom", "locos", "lojas", "lombr", "lombo", "lonas", "lonca", "lonco", "longe", "longo", "lorde", "lorpa", "louca", "louco", "louça", "louce", "louco", "loure", "louva", "louvo", "lovem", "loxas", "luana", "lucas", "lucem", "lucho", "lucia", "lucio", "lucre", "ludia", "ludio", "ludro", "lugar", "luíza", "lumbr", "lumen", "lunar", "lunch", "lusto", "lutam", "lutao", "lutas", "lutem", "lutoa", "luton", "lutos", "maçãs", "mãe", "maio", "maior", "mais", "malta", "manda", "mando", "maneira", "manha", "manto", "marco", "maré", "maria", "marca", "março", "mares", "margar", "maria", "marido", "marim", "máscara", "mata", "mato", "mãos", "medal", "medem", "média", "médio", "medir", "meigo", "meio", "melão", "melro", "melão", "melro", "menor", "mente", "mentir", "mero", "meses", "mesmo", "metro", "meu", "meus", "mexer", "milha", "milho", "milho", "mimam", "minha", "minha", "minha", "minho", "minim", "mínio", "minha", "minha", "minha", "mirar", "miséria", "missa", "mitra", "mixto", "moda", "modo", "moeda", "mogno", "molde", "molar", "molhe", "molho", "moment", "monar", "monde", "monta", "monte", "moral", "morce", "morte", "mosca", "mosto", "motel", "mover", "mozes", "nobre", "nível", "nervo", "nicho", "negro", "notar", "nova", "neném", "neném", "neném", "neném", "namor", "ninho", "nasal", "nariz", "nervo", "nuvem", "numa", "noite", "nobre", "nobre", "nova", "nova", "ninho", "natal", "ninho", "nunca", "neste", "nome", "nível", "nobre", "nobre", "oásis", "obra", "ócio", "óculos", "odeia", "oeste", "ofere", "olhar", "olhos", "oliva", "opini", "optar", "oração", "orden", "orgão", "orient", "orige", "orque", "outro", "pacto", "pálio", "palma", "pampa", "panel", "pão de açúcar", "papar", "papão", "papel", "paraí", "parar", "parel", "paria", "parma", "parna", "parte", "parvo", "pasmo", "passa", "pasta", "passe", "pasta", "pasto", "patão", "patim", "patio", "pauta", "pavor", "pazia", "pé de moleque", "peaje", "peão", "pearl", "pedra", "pegar", "peito", "pelar", "péle", "pelma", "pélo", "pé na tábua", "pênalti", "penar", "penei", "penha", "pensa", "pente", "pento", "pepino", "pequê", "perdo", "perua", "pêssego", "pesto", "petal", "petas", "pétio", "peu de bois", "pexei", "pezão", "piaçá", "piada", "piar", "piano", "pilão", "pilar", "pilha", "pilão", "pilão", "pimpão", "pintar", "pinto", "piolh", "piqui", "pirão", "pirar", "pirex", "piroca", "pisão", "pista", "pisto", "pitão", "pitel", "pitoi", "pivete", "placa", "plano", "plebe", "pleto", "pneu", "pobre", "poder", "podia", "poema", "poeta", "pônei", "ponta", "ponto", "porão", "pôr do sol", "pores", "poria", "poro", "porra", "porto", "posar", "posso", "posta", "pote", "pouco", "poupa", "praga", "praia", "prato", "preço", "prelo", "preto", "prião", "prole", "prova", "prumo", "psiu", "pudim", "pulso", "pumba", "pum de pum", "pupunha", "purez", "putão", "peixe", 
"riacho", "ribeir", "rolar", "roupa", "risco", "recém", "razão", "rural", "ruído", "rígido", "regra", "reino", "risco", "ritmo", "retorno", "ramal", "rédea", "refém", "rampa", "revés", "rever", "rebel", "repou", "répti", "raste", "remar", "raste", "rombo", "sabor", "saber", "sabir", "sabão", "sacho", "sadio", "safra", "sagaz", "sagra", "saiba", "saide", "saída", "saino", "saído", "salaí", "salim", "salão", "salto", "salve", "salão", "samba", "sampa", "sanar", "sanco", "sangr", "sanha", "santa", "santo", "sapat", "sapiê", "sapoã", "sapéu", "saque", "sarac", "saras", "sarau", "sarga", "sarga", "saril", "sarja", "sarça", "sauda", "saúde", "sazão", "sãbio", "sãcon", "sêmen", "sênca", "sênia", "sério", "sésia", "sétio", "sétup", "sífil", "símio", "síndi", "sínfo", "síria", "sítio", "súbit", "súcia", "súdito", "súmula", "súnico", "súpino", "zebra", "zenga", "votar", "votos", "vacas", "vadia", "xuxus", ""]

const row = {

    letter1: document.getElementById("1"),
    letter2: document.getElementById("2"),
    letter3: document.getElementById("3"),
    letter4: document.getElementById("4"),
    letter5: document.getElementById("5"),

}

const ul = document.querySelector("ul")

function search(){

    let hasLetter1 = row.letter1.value.length > 0? true: false
    let hasLetter2 = row.letter2.value.length > 0? true: false
    let hasLetter3 = row.letter3.value.length > 0? true: false
    let hasLetter4 = row.letter4.value.length > 0? true: false
    let hasLetter5 = row.letter5.value.length > 0? true: false

    if(hasLetter1 && hasLetter2 && hasLetter3 && hasLetter4 && hasLetter5){

        ul.style.display = "none"

    }

    ul.innerHTML = ""
    ul.style.display = "inherit"

    arrayWords.map((word, index) => {

        let include = true

        if(hasLetter1 && word[0] !== row.letter1.value.toLowerCase()){
            include = false
        }
        if(hasLetter2 && word[1] !== row.letter2.value.toLowerCase()){
            include = false
        }
        if(hasLetter3 && word[2] !== row.letter3.value.toLowerCase()){
            include = false
        }
        if(hasLetter4 && word[3] !== row.letter4.value.toLowerCase()){
            include = false
        }
        if(hasLetter5 && word[4] !== row.letter5.value.toLowerCase()){
            include = false
        }
      
        if(include){
            let li = document.createElement("li")
            let text = document.createTextNode(word)
            li.appendChild(text)
            ul.appendChild(li)
        }

        console.log(arrayWords.length)

    })

}

document.addEventListener("keypress", (e) => {

    if(e.key == "Enter"){

        search()

    }

})