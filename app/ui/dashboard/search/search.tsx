'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { MdSearch } from 'react-icons/md';
import styles from './search.module.css';

const Search = ({ placeholder }: any) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handleSearch = (e: any) => {
    params.set('q', e.target.value)

    if (e.target.value) {
      params.set("q", e.target.value);
    }
    else {
      params.delete("q");
    }

    replace(`${pathName}?${params}`);
  }

  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  )
}

export default Search
