import FaqSection from '../../animata/accordion/faq';
import { Container } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faClock,
  faUtensils,
  faExclamationCircle,
  faFire,
} from '@fortawesome/free-solid-svg-icons';

export default function FAQ() {
  const faqItems = [
    {
      id: 1,
      question: 'Qual a frequência ideal de treinos por semana?',
      answer:
        'A frequência ideal varia de acordo com seus objetivos, mas geralmente 3 a 5 vezes por semana é recomendado.',
      icon: <FontAwesomeIcon icon={faCalendar} />,
      iconPosition: 'left',
    },
    {
      id: 2,
      question: 'Quanto tempo leva para ver resultados?',
      answer:
        'Os resultados podem começar a aparecer em 4 a 8 semanas, dependendo da consistência e do esforço.',
      icon: <FontAwesomeIcon icon={faClock} />,
      iconPosition: 'left',
    },
    {
      id: 3,
      question: 'É necessário seguir uma dieta específica?',
      answer:
        'Uma alimentação equilibrada é essencial para alcançar seus objetivos, mas consulte um nutricionista para um plano personalizado.',
      icon: <FontAwesomeIcon icon={faUtensils} />,
      iconPosition: 'left',
    },
    {
      id: 4,
      question: 'Posso treinar mesmo com dores musculares?',
      answer:
        'Dores leves são normais, mas se forem intensas ou persistentes, é melhor descansar e consultar um profissional.',
      icon: <FontAwesomeIcon icon={faExclamationCircle} />,
      iconPosition: 'left',
    },
    {
      id: 5,
      question: 'Qual a importância do aquecimento antes do treino?',
      answer:
        'O aquecimento prepara o corpo, reduz o risco de lesões e melhora o desempenho durante o treino.',
      icon: <FontAwesomeIcon icon={faFire} />,
      iconPosition: 'left',
    },
  ];

  return (
    <Container id="faq" className="sm:p-4 p-5 flex flex-col">
      <div className="flex items-center justify-start mb-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-whiteColor-2 inline">
          Dúvidas de alguns clientes
        </h1>
      </div>
      <FaqSection data={faqItems} />
    </Container>
  );
}
