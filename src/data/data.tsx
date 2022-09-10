//пагинация работает, в данном коммите этот файл не подключен, вместо него PersonagePage.tsx

import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { IPersonage } from '../models/models';

export function usePersonage() {
   const [personage, setPersonages] = useState<IPersonage[]>([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');
   const [currentPage, setCurrentPage] = useState(0);
   const [pageCount, setPageCount] = useState(0);

   async function fetchPersonage() {
      try {
         {
            setError('');
            setLoading(true);
            const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
            setLoading(false);
            setPersonages(response.data.results);
            const totalPage = Math.ceil(Number(response.data.info.count) / 20);
            setPageCount(totalPage);
         }
      } catch (e: unknown) {
         const error = e as AxiosError;
         setError(error.message);
         setLoading(false);
      }
   }
   const handlePageClick = (e: any) => {
      setCurrentPage(e.selected + 1);
   };

   useEffect(() => {
      fetchPersonage();
   }, [currentPage]);

   return { personage, loading, error, handlePageClick, pageCount };
}
