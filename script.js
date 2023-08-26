function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

window.addEventListener('load', () => {
    delay(1500).then(() => {
        const contenedor_local = document.querySelector('.contenedor_loader');
        contenedor_local.style.opacity = 0;
        contenedor_local.style.visibility = "hidden";
    });
}); 
const quizData = [
    {
        question:'¿De qué Forma la ansiedad está afectando tu vida?',
        type:'many',
        options:[
            'Desencadena síntomas físicos como dolor de estómago',
            'Impacta negativamente mi autoestima',
            'Me impide realizar ciertas actividades',
            'Afecta mis interacciones sociales y relaciones',
            'Influye en mi estado de ánimo general',
            'Exacerba comportamientos adictivos'
        ]
    },
    {
        question:"¿Cuánto tiempo crees que la ansiedad ha estado afectando tu vida?",
        type:'one',
        options:[
            'No lo sé',
            '12-24 meses',
            'Más de 2 años',
            'Desde que tengo memoria'
        ]
        
    },
    {
        question:'¿Cuál de los siguientes tratamientos para manejar tu ansiedad has probado en los últimos 12 meses?',
        type:'many',
        options:[
            'Ejercicio',
            'Mindfulness',
            'Libros de autoayuda',
            'Diarios Terapeuticos',
            'Grupos de apoyo',
            'Terapia tradicional cara a cara',
            'Medicación'
        ]
    },
    {
        question:"¿Cuáles de los siguientes síntomas físicos asocias a un episodio de ansiedad?",
        type:'many',
        options:[
            'Dolor en el pecho o dificultades para respirar',
            'Ritmo cardíaco elevado o anormal',
            'Sensación de inquietud o nerviosismo',
            'Calambres o espasmos musculares',
            'Molestias o calambres estomacales',
            'Entumecimiento u hormigueo en las manos o piernas',
            'Mareos o sensación de desmayo',
            'Náuseas o vómitos',
            'Sudoración o escalofríos',
            'Ruborizarse'

        ]
    },
    {
        question:"¿Durante esta semana, ¿con qué frecuencia te ha preocupado excesivamente diferentes cosas o situaciones?",
        type:'one',
        options:[
            'Nunca',
            'Algunos dias',
            'Más de la mitad de los días',
            'Casi todos los días'
        ]
    },
    {
        question:"¿Durante esta semana, ¿con qué frecuencia te has sentido incapaz de controlar o evitar preocuparte?",
        type:'one',
        options:[
            'Nunca',
            'Algunos dias',
            'Más de la mitad de los días',
            'Casi todos los días'
        ]
    },
    {
        question:"¿Durante esta semana, ¿con qué frecuencia te has sentido nervioso, ansioso o inquieto?",
        type:'one',
        options:[
            'Nunca',
            'Algunos dias',
            'Más de la mitad de los días',
            'Casi todos los días'
        ]
    },
    {
        question:"¿Durante esta semana, ¿con qué frecuencia has experimentado dificultad para relajarte?",
        type:'one',
        options:[
            'Nunca',
            'Algunos dias',
            'Más de la mitad de los días',
            'Casi todos los días'
        ]
    },
    {
        question:"¿Durante esta semana, ¿con qué frecuencia has experimentado inquietud a tal grado que no podías quedarte quieto/a?",
        type:'one',
        options:[
            'Nunca',
            'Algunos dias',
            'Más de la mitad de los días',
            'Casi todos los días'
        ]
    },
    {
        question:"¿Durante esta semana, ¿con qué frecuencia has experimentado sentirte fácilmente enojado o irritado?",
        type:'one',
        options:[
            'Nunca',
            'Algunos dias',
            'Más de la mitad de los días',
            'Casi todos los días'
        ]
    },
    {
        question:"¿Durante esta semana, ¿con qué frecuencia has sentido miedo, como si algo malo pudiera suceder?",
        type:'one',
        options:[
            'Nunca',
            'Algunos dias',
            'Más de la mitad de los días',
            'Casi todos los días'
        ]
    },
    {
        question:"¿Cuánto te preocupa perder tus amistades o tener dificultades para mantener relaciones estables con amigos o parejas?",
        type:'one',
        options:[
            'Para nada',
            'Un poco',
            'Moderadamente',
            'Bastante',
            'Extremadamente'
        ]
    },
    {
        question:"¿Cuánto te preocupa la posibilidad de parecer poco inteligente o no poder articular adecuadamente tus opiniones?",
        type:'one',
        options:[
            'Para nada',
            'Un poco',
            'Moderadamente',
            'Bastante',
            'Extremadamente'
        ]
    },
    {
        question:"¿Cuánto te preocupa llegar tarde a citas o reuniones relacionadas con el trabajo?",
        type:'one',
        options:[
            'Para nada',
            'Un poco',
            'Moderadamente',
            'Bastante',
            'Extremadamente'
        ]
    },
    {
        question:"¿Cuánto te preocupa sentirte poco atractivo/a o el miedo de no ser amado/a?",
        type:'one',
        options:[
            'Para nada',
            'Un poco',
            'Moderadamente',
            'Bastante',
            'Extremadamente'
        ]
    },
    {
        question:"¿Cuánto te preocupa la posibilidad de no haber logrado lo suficiente o de no realizar tus ambiciones?",
        type:'one',
        options:[
            'Para nada',
            'Un poco',
            'Moderadamente',
            'Bastante',
            'Extremadamente'
        ]
    },
    {
        question:"¿Cuánto te preocupa la posibilidad de que se te acabe el dinero o no poder pagar las necesidades básicas o las facturas?",
        type:'one',
        options:[
            'Para nada',
            'Un poco',
            'Moderadamente',
            'Bastante',
            'Extremadamente'
        ]
    },
    {
        question:"¿Cuánto te preocupa sentir inseguridad o carecer de confianza en ti mismo/a?",
        type:'one',
        options:[
            'Para nada',
            'Un poco',
            'Moderadamente',
            'Bastante',
            'Extremadamente'
        ]
    },
    {
        question:"¿Cuánto te preocupa que tu vida carezca de propósito o dirección",
        type:'one',
        options:[
            'Para nada',
            'Un poco',
            'Moderadamente',
            'Bastante',
            'Extremadamente'
        ]
    },
    {
        question:"¿Cuánto te preocupa no trabajar lo suficientemente diligentemente o la posibilidad de cometer errores en tu trabajo?",
        type:'one',
        options:[
            'Para nada',
            'Un poco',
            'Moderadamente',
            'Bastante',
            'Extremadamente'
        ]
    },
    {
        question:"¿Cuánto te preocupa que tus condiciones de vida no sean suficientes o adecuadas?",
        type:'one',
        options:[
            'Para nada',
            'Un poco',
            'Moderadamente',
            'Bastante',
            'Extremadamente'
        ]
    },
    {
        question:`¿Con qué frecuencia asumes saber lo que otros piensan?. Por ejemplo, dices: "Ellos piensan que soy un fracaso".`,
        type:'one',
        options:[
            'Nunca',
            'Ocasionalmente',
            'Gran parte del tiempo',
            'Casi todo el tiempo'
        ]
    },
    {
        question:`¿Con qué frecuencia te enfocas mucho más en lo negativo que en lo positivos? Por ejemplo, dices: "Si tengo éxito, es suerte, pero si me va mal, es mi culpa".`,
        type:'one',
        options:[
            'Nunca',
            'Ocasionalmente',
            'Gran parte del tiempo',
            'Casi todo el tiempo'
        ]
    },
    {
        question:`¿Con qué frecuencia generalizas a partir de situaciones negativas aisladas? Por ejemplo, dices: "Nunca hago las cosas bien".`,
        type:'one',
        options:[
            'Nunca',
            'Ocasionalmente',
            'Gran parte del tiempo',
            'Casi todo el tiempo'
        ]
    },
    {
        question:`¿Con qué frecuencia percibes que las cosas que pasan son culpa tuya o están dirigidos hacia ti? Por ejemplo, dices: "Ellos me dejaron por algo que hice".`,
        type:'one',
        options:[
            'Nunca',
            'Ocasionalmente',
            'Gran parte del tiempo',
            'Casi todo el tiempo'
        ]
    },
    {
        question:`¿Con qué frecuencia crees que las cosas deben ajustarse a tus expectativas? Por ejemplo, dices: "No debería haber cometido errores".`,
        type:'one',
        options:[
            'Nunca',
            'Ocasionalmente',
            'Gran parte del tiempo',
            'Casi todo el tiempo'
        ]
    },
    {
        question:"¿Cuáles son las metas que deseas alcanzar al superar la ansiedad?",
        type:'many',
        options:[
            'Aumentar mi autoestima',
            'Ser más seguro/a de mí mismo/a',
            'Reducir la preocupación',
            'Eliminar el pensamiento excesivo',
            'Mejorar mi vida social',
            'Sentirme más feliz',
            'Reducir el estrés',
            'Mejorar el estado de ánimo',
            'Mejorar el sueño',
            'Mejorar el enfoque y la concentración',
            'Gestionar la incertidumbre',
            'Reducir los síntomas físicos',
            'Tener más energía',
            'Mejorar la resolución de problemas'
        ]
    }
];





const button_submit = document.getElementById('btn-submit');
const quiz_container = document.getElementById('quiz-container');

const quiz_header = document.getElementById('quiz-header');
const porcen_header = document.getElementById('porcent');

let numberQuestion=0
function loadQuiz (){
    quizexactly=quizData[numberQuestion];
    options=quizexactly["options"];
    options_html=`<h2 id="question">${quizexactly.question}</h2>`;
    number_element=1;
    incrementador=0;
    if(quizexactly.type==='many'){
        options.forEach(element=>{
            options_html=options_html+`<a  class="question"  data-value="${number_element}">${options[incrementador]}</a>`
            number_element++;
            incrementador++;
        });
        options_html=options_html+'<button class="btn-submit" onclick="submit()"  id="btn-submit">Submit</button>';
    }
    if(quizexactly.type==='one'){
        options.forEach(element=>{
            options_html=options_html+`<a  class="question" id="answer_${number_element}" onclick="añadirScoreOne(${number_element})" data-value="${number_element}">${options[incrementador]}</a>`
            number_element++;
            incrementador++;
        });
    }
    quiz_header.innerHTML=options_html;
}

loadQuiz();
function añadirClick(){
    const enlaces = document.querySelectorAll('a');

// Define the function for the event listener
function enlaceClicado(event) {
  let classname = event.target.getAttribute('class');
  if(classname==="question"){
    event.target.classList.remove('question');
    event.target.classList.add('question-quiz');
  }
  if(classname==="question-quiz"){
    event.target.classList.remove('question-quiz');
    event.target.classList.add('question');
  }  // Your additional logic here
}

// Add the event listener to each link
enlaces.forEach((enlace) => {
  enlace.addEventListener('click', enlaceClicado);
});
}

añadirClick();

const getSelectOption = () =>{
    let xd=undefined;
    enlaces.forEach(enlace=>{
        const classname=enlace.getAttribute('class');
        if(classname==='question-quiz'){
            console.log(enlace.getAttribute('data-value'));
        }
    });
    return xd;
}
const deselectedOptions = () => {
    const enlaces = document.querySelectorAll('a');

    enlaces.forEach(enlace => {
        const valor = enlace.getAttribute('class');
        if(valor==='question-quiz'){
        enlace.classList.remove('question-quiz');
        enlace.classList.add('question');
        }
      });
}



let score=0;
function añadirScoreOne(elementId){
    const optionOne = document.getElementById(`answer_${elementId}`);
    let puntaje=optionOne.getAttribute('data-value');
    score=score+parseFloat(puntaje);
    deselectedOptions();
    numberQuestion++;
    if(numberQuestion<quizData.length){
        loadQuiz();
        añadirClick();
        aumentar_porcent_header();
    }
    else{
        const puntuacionFinal=(score*quizData.length/45);
        quiz_container.innerHTML=`<h2>You Finished the Game ${puntuacionFinal}%</h2><br>
                                <img id="imagen_final" src="imagen.png">
                                 <button id="Attempt" onclick="location.reload()"><h2>Try again</h2></button>`
    }
}
function añadirScore(){
    const enlaces = document.querySelectorAll('a');
    let puntos=0;

    enlaces.forEach(enlace => {
        const valor = enlace.getAttribute('class');
        if(valor==='question-quiz'){
            puntos=puntos+parseFloat(enlace.getAttribute('data-value'));
        }
    });
    score=score+puntos;
}

let porcentaje=4;
function aumentar_porcent_header(){
    porcentaje=porcentaje+3.69;
    porcen_header.style.width=`${porcentaje}%`

}

function submit(){
    añadirScore();
    deselectedOptions();
    numberQuestion++;
    if(numberQuestion<quizData.length){
        loadQuiz();
        añadirClick();
        aumentar_porcent_header();
    }
    else{
        const puntuacionFinal=(score*quizData.length/45);
        quiz_container.innerHTML=`
        <h2 class="title-end">Hemos desarrollado un progragrama que te ayuda a conocer tu ansiedad</h2>
        <p class="parrafo-end">Basado en tus resultados, hemos creado un programa de terapia personalizado
            exclusivamente para ti, acompañado por un coach profesional</p>
        <div class="result-quiz">
            <div class="porcentaje">${puntuacionFinal}%</div>
            <p>Tu nivel de ansiedad es severo</p>
        </div>
        <div class="result-world">
            <h2>72%</h2>
            <p>Las personas con tus resultados lograron reducir su ansiedad con Mindwell</p>
        </div>
        <div class="sintomas-quiz">
            <h2>Síntomas</h2>
            <p>Los siguientes son tus principales sintomas</p>
            <br><br><br>
        </div>
        <div class="end-information">
            <div class="lesson">
                <h2>Dominios de ansiedad</h2>
                <p>Los siguientes son los principales causantes de tu ansiedad</p>
                <div class="causa left">
                    <div class="img"></div>
                    <div class="information-causas">
                        <h3>Relaciones</h3>
                        <p>La ansiedad sobre las relaciones puede sentirse como caminar constantemente sobre
                            cáscaras de huevo, sin saber cuándo o qué podría causar la próxima grieta. Con nuestro
                            programa, adquirirás las herramientas para navegar tus relaciones de manera más segura y
                            efectiva.
                        </p>
                    </div>
                </div>
                <div class="causa right">
                    <div class="img"></div>
                    <div class="information-causas">
                        <h3>Falta de confianza</h3>
                        <p>¿Sientes que siempre estás dudando de ti mismo? Esa es la ansiedad que se aparece,
                            jugando con tu confianza y haciéndote cuestionar tu valía. Con nuestro programa,
                            descubrirás nuevas estrategias para reconstruir tu confianza.
                        </p>
                    </div>
                </div>
            </div>

            <div class="lesson">
                <h2>Distorsiones cognitivas</h2>
                <p>Los siguientes son los principales causantes de tu ansiedad</p>
                <div class="causa top">
                    <div class="img"></div>
                    <div class="information-causas">
                        <h3>Lectura de mente</h3>
                        <p>La distorsión de la lectura de mente es como pensar que tienes un poder psíquico, donde asumes que sabes lo que los demás están pensando de ti, a menudo de manera negativa. Con nuestro programa, desarrollarás herramientas para desafiar y cambiar estos pensamientos.
                        </p>
                    </div>
                </div>
                <div class="causa top">
                    <div class="img"></div>
                    <div class="information-causas">
                        <h3>Magnificación/Minimización</h3>
                        <p>La magnificación/minimización es como amplificar los problemas mientras que tus logros aparecen como pequeños puntos en el horizonte. Con nuestro programa, adquirirás las herramientas para equilibrar tu perspectiva.
                        </p>
                    </div>
                </div>
            </div>
        </div>`
    }
}


