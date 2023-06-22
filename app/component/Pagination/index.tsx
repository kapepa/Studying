import React, {FC} from "react";
import styles from "./styles.module.scss";

interface PaginationInterface {
  max: number;
  currentPage: number;
  changePage: (page: number) => void;
}

const Pagination: FC<PaginationInterface> = ({max, changePage, currentPage}) => {
  const clickPage = (e: React.MouseEvent<HTMLDivElement>) => {
    changePage(Number(e.currentTarget.dataset.page));
  }

  const clickSiblings = (e: React.MouseEvent<HTMLDivElement>) => {
    if( e.currentTarget.dataset.siblings === "+" && currentPage < max) changePage(++currentPage);
    if( e.currentTarget.dataset.siblings === "-" && currentPage > 1) changePage(--currentPage);
  }

  const PrevNavigate: FC<{currentPage: number, clickPage: (e: React.MouseEvent<HTMLDivElement>) => void}> = ({currentPage}) => {
    return <>
      { (currentPage > 2 ) && <div onClick={clickPage} className={`${styles.pagination__square} ${styles['pagination__square--pointer']}`} data-page={1} >1</div>}
      { (currentPage > 3 ) && <div onClick={clickPage} className={`${styles.pagination__square} `}>{`. .`}</div>}
      { (currentPage > 1 ) && <div onClick={clickPage} className={`${styles.pagination__square} ${styles['pagination__square--pointer']}`} data-page={currentPage - 1} >{currentPage - 1}</div>}
    </>
  }

  const NestNavigate: FC<{currentPage: number,  clickPage: (e: React.MouseEvent<HTMLDivElement>) => void, max: number}> = ({currentPage, max}) => {
    return <>
      { (currentPage !== max ) && <div onClick={clickPage} className={`${styles.pagination__square} ${styles['pagination__square--pointer']}`} data-page={currentPage + 1} >{currentPage + 1}</div>}
      { (currentPage < (max - 1)) && <div onClick={clickPage} className={`${styles.pagination__square} `}>{`. .`}</div>}
      { (currentPage < (max - 1)) && <div onClick={clickPage} className={`${styles.pagination__square} ${styles['pagination__square--pointer']}`} data-page={max} >{max}</div>}
    </>
  }

  return <div className={styles.pagination} role="pagination">
    <div onClick={clickSiblings} className={`${styles.pagination__square} ${styles['pagination__square--pointer']} ${styles.pagination__edge} ${styles['pagination__edge--left']}`} data-siblings={'-'} role="prev"/>
    <PrevNavigate currentPage={currentPage} clickPage={clickPage}/>
    <div className={`${styles.pagination__square} ${styles['pagination__square--active']}`} role="current">{currentPage}</div>
    <NestNavigate currentPage={currentPage} clickPage={clickPage} max={max}/>
    <div onClick={clickSiblings} className={`${styles.pagination__square} ${styles['pagination__square--pointer']} ${styles.pagination__edge} ${styles['pagination__edge--right']}`} data-siblings={'+'} role="next"/>
  </div>
}

export default Pagination;