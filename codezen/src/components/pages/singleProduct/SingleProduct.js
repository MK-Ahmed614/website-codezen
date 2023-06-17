import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './SingleProduct.scss'
// import { useGlobalContext } from '../../context/context.jsx'

const   SingleProduct = () => {
  // const { bageid,setbageid } = useGlobalContext()

  const { t } = useTranslation();
  const { id } = useParams();
  const projects = t('Projects', { returnObjects: true });
  const project = projects.find((p) => p.id === id);
 console.log(project);

  return (
    <div className='single'>
      <img src={project.bage.imgUrl} alt="design" />
    </div>
  );
}

export default SingleProduct