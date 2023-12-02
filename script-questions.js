var contador = 0;
function cores(){
   let labels = document.querySelectorAll('.input'); 
      for (const input of labels) {
         input.addEventListener('click', ()=> {
            let labels = document.querySelectorAll('.input'); 

            for (const alternativa of labels) {
               let verificar = input.children[0];
            if (verificar.checked){
            input.classList.add('input-active')
            }else{
            alternativa.classList.remove('input-active');
            console.log('teste');
            }
            }
         })
}
}

cores();


var contInfo = 0;
var contAdm = 0;
var contMark = 0;
var contCom = 0;
var contRh = 0;
var contSeg = 0;
var contSer = 0;
var radios = document.getElementsByClassName("p");

document.querySelector('.enviar').addEventListener('click', ()=>{
   contador++;
// calcular resultado
    for(var i=0; i<radios.length; i++) {
    if(radios[i].checked) {
        if(radios[i].value === "a") {
            contInfo++;
        } else if (radios[i].value === "b") {
            contAdm++;
        } else if (radios[i].value === "c") {
            contMark++;
        } else if (radios[i].value === "d") {
            contCom++;
        } else if (radios[i].value === "e") {
            contRh++;
        } else if (radios[i].value === "f") {
            contSeg++;
        } else{
            contSer++;
        }
    }
    }
    console.log(contInfo, contAdm, contMark, contCom, contRh, contSeg, contSer);
//    mudar perguntas
   let pergunta = document.querySelector('.questions');
   if (contador == 1) {
      console.log(contador)
      pergunta.innerHTML = `
      <div class="progress w-100" role="progressbar" style="height:10px" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
      <div class="progress-bar bg-danger" style="width: 20%"></div>
    </div> 
        
        <div class="question">
            <strong class="num-q">pergunta 2/10</strong>
            <h2>Como você geralmente aborda o processo de tomada de decisões em sua vida?</h2>
            <div class="inputs">

                <label for="a" class="input">
                    <input type="radio" name="p1" value="a" class="p" id="a">
                    <div class="input-content">
                        <span>Baseando-se em análises lógicas e informações concretas.
                        </div>
                </label>

                <label for="b" class="input">
                    <input type="radio" name="p1" value="b" class="p" id="b">
                    <div class="input-content">
                        <span> Considerando perspectivas amplas e possíveis impactos em diferentes áreas.
                        </div>
                </label>

                <label for="c" class="input">
                    <input type="radio" name="p1" value="c" class="p" id="c">
                    <div class="input-content">
                        <span> Adotando uma abordagem estratégica, alinhada aos seus objetivos pessoais.
                        </div>
                </label>

                <label for="d" class="input">
                    <input type="radio" name="p1" value="d" class="p" id="d">
                    <div class="input-content">
                        <span> Utilizando experiências passadas e considerando o sentimento das pessoas ao seu redor.
                        </div>
                </label>

                <label for="e" class="input">
                    <input type="radio" name="p1" value="e" class="p" id="e">
                    <div class="input-content">
                        <span> Priorizando o bem-estar das pessoas próximas e o impacto nas relações interpessoais.
                        </div>
                </label>

                <label for="f" class="input">
                    <input type="radio" name="p1" value="f" class="p" id="f">
                    <div class="input-content">
                        <span> Garantindo conformidade com seus princípios e valores pessoais.
                        </div>
                </label>

                <label for="g" class="input">
                    <input type="radio" name="p1" value="g" class="p" id="g">
                    <div class="input-content">
                        <span> Avaliando cuidadosamente as implicações éticas antes de decidir.
                        </div>
                </label>
            </div>
        </div>`
        cores();
   }else if(contador == 2){
      console.log(contador)
      pergunta.innerHTML = `
      <div class="progress w-100" role="progressbar" style="height:10px" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
      <div class="progress-bar bg-danger" style="width: 30%"></div>
    </div> 
        
        <div class="question">
            <strong class="num-q">pergunta 3/10</strong>
            <h2>Como você descreveria suas habilidades sociais e interações em ambientes grupais? </h2>
            <div class="inputs">

                <label for="a" class="input">
                    <input type="radio" name="p1" value="a" class="p" id="a">
                    <div class="input-content">
                        <span>Sou aberto, comunicativo e me integro facilmente em diferentes contextos.
                        </div>
                </label>

                <label for="b" class="input">
                    <input type="radio" name="p1" value="b" class="p" id="b">
                    <div class="input-content">
                        <span> Adapto-me a diversas culturas e mantenho relações interpessoais positivas.
                        </div>
                </label>

                <label for="c" class="input">
                    <input type="radio" name="p1" value="c" class="p" id="c">
                    <div class="input-content">
                        <span> Lido bem com equipes, incentivando a colaboração e a comunicação eficaz. 
                        </div>
               </label>
                    
                <label for="d" class="input">
                    <input type="radio" name="p1" value="d" class="p" id="d">
                    <div class="input-content">
                        <span> Sou persuasivo e capaz de construir relacionamentos sólidos. 
                        </div>
                </label>
                    
                <label for="e" class="input">
                    <input type="radio" name="p1" value="e" class="p" id="e">
                    <div class="input-content">
                        <span> Priorizo relações interpessoais, promovendo um ambiente de apoio e cooperação.
                        </div>
                </label>
                    
                <label for="f" class="input">
                    <input type="radio" name="p1" value="f" class="p" id="f">
                    <div class="input-content">
                        <span>Sou atento às necessidades dos outros, promovendo a segurança e o bem-estar.
                        </div>
                </label>
                    
                <label for="g" class="input">
                    <input type="radio" name="p1" value="g" class="p" id="g">
                    <div class="input-content">
                        <span> Comunico-me de maneira clara e empática.
                        </div>
                </label>
                    
            </div>
        </div>`
        cores();
   }else if(contador == 3){
      console.log(contador)
      pergunta.innerHTML = `
      <div class="progress w-100" role="progressbar" style="height:10px" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
      <div class="progress-bar bg-danger" style="width: 40%"></div>
    </div> 
        
        <div class="question">
            <strong class="num-q">pergunta 4/10</strong>
            <h2>Em situações sociais, como você geralmente lida com conflitos e desafios interpessoais? </h2>
            <div class="inputs">

                <label for="a" class="input">
                    <input type="radio" name="p1" value="a" class="p" id="a">
                    <div class="input-content">
                        <span> Abordo de maneira objetiva, procurando soluções práticas.
                        </div>
                        </label>
                    

                <label for="b" class="input">
                    <input type="radio" name="p1" value="b" class="p" id="b">
                    <div class="input-content">
                        <span> Negócio diplomaticamente, buscando entendimento em contextos diversos.
                        </div>
                        </label>
                    
                <label for="c" class="input">
                    <input type="radio" name="p1" value="c" class="p" id="c">
                    <div class="input-content">
                        <span> Gerencio conflitos estrategicamente, visando o sucesso da equipe.
                        </div>
                        </label>
                    
                <label for="d" class="input">
                    <input type="radio" name="p1" value="d" class="p" id="d">
                    <div class="input-content">
                        <span> Utilizo a comunicação persuasiva para resolver diferenças e alcançar consenso.
                        </div>
                        </label>
                    
                <label for="e" class="input">
                    <input type="radio" name="p1" value="e" class="p" id="e">
                    <div class="input-content">
                        <span> Promovo o diálogo e a compreensão, trabalhando para soluções construtivas.
                        </div>
                        </label>
                    
                <label for="f" class="input">
                    <input type="radio" name="p1" value="f" class="p" id="f">
                    <div class="input-content">
                        <span> Lidando proativamente com questões interpessoais para manter um ambiente seguro.
                        </div>
                        </label>
                    
                <label for="g" class="input">
                    <input type="radio" name="p1" value="g" class="p" id="g">
                    <div class="input-content">
                        <span> Abordo conflitos considerando as implicações éticas.
                        </div>
                        </label>
                    
            </div>
        </div>`
        cores();
   }else if(contador == 4){
      console.log(contador)
      pergunta.innerHTML = `
      <div class="progress w-100" role="progressbar" style="height:10px" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
      <div class="progress-bar bg-danger" style="width: 50%"></div>
    </div> 
        
        <div class="question">
            <strong class="num-q">pergunta 5/10</strong>
            <h2>Ao enfrentar um novo desafio, como você normalmente aborda o processo de aprendizagem para superá-lo? </h2>
            <div class="inputs">

                <label for="a" class="input">
                    <input type="radio" name="p1" value="a" class="p" id="a">
                    <div class="input-content">
                        <span> Resolvendo problemas práticos e experimentando diferentes abordagens.
                        </div>
                        </label>
                    

                <label for="b" class="input">
                    <input type="radio" name="p1" value="b" class="p" id="b">
                    <div class="input-content">
                        <span> Pesquisando diversas fontes para uma compreensão completa do desafio.
                        </div>
                        </label>
                    
                <label for="c" class="input">
                    <input type="radio" name="p1" value="c" class="p" id="c">
                    <div class="input-content">
                        <span> Seguindo uma estrutura passo a passo para entender cada aspecto do desafio.
                        </div>
                        </label>
                    
                <label for="d" class="input">
                    <input type="radio" name="p1" value="d" class="p" id="d">
                    <div class="input-content">
                        <span> Colaborando com outros para trocar ideias e experiências.
                        </div>
                        </label>
                    
                <label for="e" class="input">
                    <input type="radio" name="p1" value="e" class="p" id="e">
                    <div class="input-content">
                        <span> Pesquisando em diversas fontes e aplicando conhecimentos na prática.
                        </div>
                        </label>
                    
                <label for="f" class="input">
                    <input type="radio" name="p1" value="f" class="p" id="f">
                    <div class="input-content">
                        <span> Certificando-se de entender as normas e protocolos associados.
                        </div>
                        </label>
                    
                <label for="g" class="input">
                    <input type="radio" name="p1" value="g" class="p" id="g">
                    <div class="input-content">
                        <span> Investigando todas as questões e perspectivas em torno do desafio.
                        </div>
                        </label>
                    
            </div>
        </div>`
        cores();
   }else if(contador == 5){
      console.log(contador)
      pergunta.innerHTML = `
      <div class="progress w-100" role="progressbar" style="height:10px" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
      <div class="progress-bar bg-danger" style="width: 60%"></div>
    </div> 
        
        <div class="question">
            <strong class="num-q">pergunta 6/10</strong>
            <h2>Como você se mantém motivado(a) durante períodos desafiadores ou projetos longos? </h2>
            <div class="inputs">

                <label for="a" class="input">
                    <input type="radio" name="p1" value="a" class="p" id="a">
                    <div class="input-content">
                        <span> Encontrando soluções inovadoras e mantendo o entusiasmo pelo desafio.
                        </div>
                        </label>
                    

                <label for="b" class="input">
                    <input type="radio" name="p1" value="b" class="p" id="b">
                    <div class="input-content">
                        <span> Lembrar-se do impacto positivo que o trabalho pode ter.
                        </div>
                        </label>
                    
                <label for="c" class="input">
                    <input type="radio" name="p1" value="c" class="p" id="c">
                    <div class="input-content">
                        <span> Focando nos objetivos finais e na realização de metas organizacionais.
                        </div>
                        </label>
                    
                <label for="d" class="input">
                    <input type="radio" name="p1" value="d" class="p" id="d">
                    <div class="input-content">
                        <span> Celebrando sucessos intermediários e reconhecendo conquistas de curto prazo.
                        </div>
                        </label>
                    
                <label for="e" class="input">
                    <input type="radio" name="p1" value="e" class="p" id="e">
                    <div class="input-content">
                        <span> Mantendo o foco nas relações interpessoais e no desenvolvimento humano.
                        </div>
                        </label>
                    
                <label for="f" class="input">
                    <input type="radio" name="p1" value="f" class="p" id="f">
                    <div class="input-content">
                        <span> Reafirmando o compromisso com a segurança e o bem-estar no trabalho.
                        </div>
                        </label>
                    
                <label for="g" class="input">
                    <input type="radio" name="p1" value="g" class="p" id="g">
                    <div class="input-content">
                        <span> Lembrando o propósito e a importância da tarefa.
                        </div>
                        </label>
                    
            </div>
        </div>`
        cores();
   }else if(contador == 6){
      console.log(contador)
      pergunta.innerHTML = `
      <div class="progress w-100" role="progressbar"style="height:10px"  aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
      <div class="progress-bar bg-danger" style="width: 70%"></div>
    </div> 
        
        <div class="question">
            <strong class="num-q">pergunta 7/10</strong>
            <h2>Como você costuma lidar com mudanças inesperadas ou situações fora do seu controle? </h2>
            <div class="inputs">

                <label for="a" class="input">
                    <input type="radio" name="p1" value="a" class="p" id="a">
                    <div class="input-content">
                        <span> Adaptando-me rapidamente, buscando oportunidades nas mudanças. 
                        </div>
                        </label>
                    

                <label for="b" class="input">
                    <input type="radio" name="p1" value="b" class="p" id="b">
                    <div class="input-content">
                        <span> Avaliando cuidadosamente as mudanças e ajustando minha abordagem.
                        </div>
                        </label>
                    
                <label for="c" class="input">
                    <input type="radio" name="p1" value="c" class="p" id="c">
                    <div class="input-content">
                        <span> Desenvolvendo estratégias para minimizar o impacto de mudanças imprevistas.
                        </div>
                        </label>
                    
                <label for="d" class="input">
                    <input type="radio" name="p1" value="d" class="p" id="d">
                    <div class="input-content">
                        <span> Colaborando com outros para encontrar soluções inovadoras em face de mudanças.
                        </div>
                        </label>          
                    
                <label for="e" class="input">
                    <input type="radio" name="p1" value="e" class="p" id="e">
                    <div class="input-content">
                        <span> Focando na gestão de relações interpessoais para suavizar as mudanças.
                        </div>
                        </label>
                    
                <label for="f" class="input">
                    <input type="radio" name="p1" value="f" class="p" id="f">
                    <div class="input-content">
                        <span> Garantindo o bom andamento do projeto.
                        </div>
                        </label>
                    
                <label for="g" class="input">
                    <input type="radio" name="p1" value="g" class="p" id="g">
                    <div class="input-content">
                        <span> Analisando as implicações das mudanças e ajustando conforme necessário.
                        </div>
                        </label>
                    
            </div>
        </div>`
        cores();
   }else if(contador == 7){
      console.log(contador)
      pergunta.innerHTML = `
      <div class="progress w-100" role="progressbar" style="height:10px" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
      <div class="progress-bar bg-danger" style="width: 80%"></div>
    </div> 
        
        <div class="question">
            <strong class="num-q">pergunta 8/10</strong>
            <h2>Como você costuma expressar sua criatividade no ambiente profissional e em sua vida pessoal? </h2>
            <div class="inputs">

                <label for="a" class="input">
                    <input type="radio" name="p1" value="a" class="p" id="a">
                    <div class="input-content">
                        <span> Desenvolvendo soluções inovadoras para desafios técnicos.
                        </div>
                        </label>
                    

                <label for="b" class="input">
                    <input type="radio" name="p1" value="b" class="p" id="b">
                    <div class="input-content">
                        <span> Explorando diferentes perspectivas e abordagens em projetos.
                        </div>
                        </label>
                    
                <label for="c" class="input">
                    <input type="radio" name="p1" value="c" class="p" id="c">
                    <div class="input-content">
                        <span> Criando estratégias originais para alcançar metas organizacionais. 
                        </div>
                        </label>
                    
                <label for="d" class="input">
                    <input type="radio" name="p1" value="d" class="p" id="d">
                    <div class="input-content">
                        <span> Desenvolvendo campanhas criativas e impactantes. 
                        </div>
                        </label>
                    
                <label for="e" class="input">
                    <input type="radio" name="p1" value="e" class="p" id="e">
                    <div class="input-content">
                        <span> Aplicando criatividade para promover relações interpessoais saudáveis. 
                        </div>
                        </label>
                    
                <label for="f" class="input">
                    <input type="radio" name="p1" value="f" class="p" id="f">
                    <div class="input-content">
                        <span> Encontrando abordagens originais para questões desafiadoras. 
                        </div>
                        </label>
                    
                <label for="g" class="input">
                    <input type="radio" name="p1" value="g" class="p" id="g">
                    <div class="input-content">
                        <span> Pensando de forma inventiva em situações complexas.
                        </div>
                        </label>
                    
            </div>
        </div>`
        cores();
   }else if(contador == 8){
      console.log(contador)
      pergunta.innerHTML = `
      <div class="progress w-100" role="progressbar" style="height:10px" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
      <div class="progress-bar bg-danger" style="width: 90%"></div>
    </div> 
        
        <div class="question">
            <strong class="num-q">pergunta 9/10</strong>
            <h2>Como você lida com situações que exigem soluções criativas e fora do convencional? </h2>
            <div class="inputs">

                <label for="a" class="input">
                    <input type="radio" name="p1" value="a" class="p" id="a">
                    <div class="input-content">
                        <span> Abordando desafios com uma mentalidade aberta e experimentando soluções. 
                        </div>
                        </label>
                    

                <label for="b" class="input">
                    <input type="radio" name="p1" value="b" class="p" id="b">
                    <div class="input-content">
                        <span> Incorporando diferentes perspectivas para abordar os problemas.
                        </div>
                        </label>
                    
                <label for="c" class="input">
                    <input type="radio" name="p1" value="c" class="p" id="c">
                    <div class="input-content">
                        <span> Desenvolvendo estratégias únicas alinhadas aos objetivos da organização. 
                        </div>
                        </label>
                    
                <label for="d" class="input">
                    <input type="radio" name="p1" value="d" class="p" id="d">
                    <div class="input-content">
                        <span> Criando campanhas de que se destacam pela originalidade. 
                        </div>
                        </label>
                    
                <label for="e" class="input">
                    <input type="radio" name="p1" value="e" class="p" id="e">
                    <div class="input-content">
                        <span> Aplicando criatividade para promover um ambiente de trabalho saudável. 
                        </div>
                        </label>
                    
                <label for="f" class="input">
                    <input type="radio" name="p1" value="f" class="p" id="f">
                    <div class="input-content">
                        <span> Encontrando soluções originais para desafios no contexto profissional. 
                        </div>
                        </label>
                    
                <label for="g" class="input">
                    <input type="radio" name="p1" value="g" class="p" id="g">
                    <div class="input-content">
                        <span> ensando de forma inventiva para resolver questões complexas. 
                        </div>
                        </label>
                    
            </div>
        </div>`
        cores();
   }else if(contador == 9){
      console.log(contador)
      pergunta.innerHTML = `
      <div class="progress w-100" role="progressbar" style="height:10px" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
      <div class="progress-bar bg-danger" style="width: 99%"></div>
    </div> 
        
        <div class="question">
            <strong class="num-q">pergunta 10/10</strong>
            <h2>Como você aborda situações desafiadoras considerando a perspectiva e sentimentos das pessoas envolvidas? </h2>
            <div class="inputs">

                <label for="a" class="input">
                    <input type="radio" name="p1" value="a" class="p" id="a">
                    <div class="input-content">
                        <span> Buscando soluções que atendam às necessidades e preocupações das pessoas afetadas.
                        </div>
                        </label>
                    

                <label for="b" class="input">
                    <input type="radio" name="p1" value="b" class="p" id="b">
                    <div class="input-content">
                        <span> Considerando as implicações emocionais ao enfrentar desafios globais. 
                        </div>
                        </label>
                    
                <label for="c" class="input">
                    <input type="radio" name="p1" value="c" class="p" id="c">
                    <div class="input-content">
                        <span> Gerenciando conflitos de forma a preservar relacionamentos interpessoais e sentimentos. 
                        </div>
                        </label>
                    
                <label for="d" class="input">
                    <input type="radio" name="p1" value="d" class="p" id="d">
                    <div class="input-content">
                        <span> Desenvolvendo soluções que ressoem com as emoções dos outros. 
                        </div>
                        </label>
                    
                <label for="e" class="input">
                    <input type="radio" name="p1" value="e" class="p" id="e">
                    <div class="input-content">
                        <span> Focando no desenvolvimento humano e no apoio ao bem-estar das pessoas na equipe.
                        </div>
                        </label>
                    
                <label for="f" class="input">
                    <input type="radio" name="p1" value="f" class="p" id="f">
                    <div class="input-content">
                        <span> Abordando desafios sensíveis com compreensão e consideração pelos envolvidos. 
                        </div>
                        </label>
                    
                <label for="g" class="input">
                    <input type="radio" name="p1" value="g" class="p" id="g">
                    <div class="input-content">
                        <span> MAntendo a igualdade, considerando as circunstâncias individuais. 
                        </div>
                        </label>
                    
            </div>
        </div>`
        cores();
   }else{
    const mostrarResultado = Math.max(contInfo, contAdm, contMark, contCom, contRh, contSeg, contSer);
    switch(mostrarResultado){
       case contInfo:
           window.location.href = "./info.html";
            break;
        case contAdm:
           window.location.href = './admin.html';
            break;
        case contMark:
           window.location.href = './marketing.html';
            break;
        case contCom:
           window.location.href = './comercio.html';
            break;
        case contRh:
           window.location.href = './rh.html';
            break;
        case contSeg:
           window.location.href = './seguranca.html';
            break;
        case contSer:
           window.location.href = './servicos.html';
            break;    
     }
   }
}

)


