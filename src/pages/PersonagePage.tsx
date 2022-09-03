import Error from '../components/Error';
import Loader from '../components/Loader';
import { usePersonage } from '../data/data';
import { MainPage } from './MainPage';
import style from '../style/PersonagePage.module.css';
import ReactPaginate from 'react-paginate';
import '../style/Pogination.css';

export function PersonagePage() {
   const { loading, error, personage, handlePageClick, pageCount } = usePersonage();

   return (
      <div>
         {loading && <Loader />}
         {error && <Error />}
         <ReactPaginate breakLabel='...' nextLabel='>' onPageChange={handlePageClick} pageRangeDisplayed={1} pageCount={pageCount} previousLabel='<' containerClassName='pogination' pageLinkClassName='page-num' previousLinkClassName='page-num' nextLinkClassName='page-num' activeLinkClassName='active' nextClassName='next' previousClassName='previous' />
         {
            <div className={style.wrapper}>
               {personage.map((personage) => (
                  <MainPage personage={personage} key={personage.id} />
               ))}
            </div>
         }
         кнопка скрола на вверх по центру на всю ширину или в правом углу
      </div>
   );
}

export default PersonagePage;
